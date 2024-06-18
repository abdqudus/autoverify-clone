import { createAndClickLink, getDomain } from "./base";

const TOKEN_NAME = "jwtToken";
const DEFAULT_ACCESS_EXPIRY = 55 / 60; // 55mins
const DEFAULT_REFRESH_EXPIRY = (24 * 60 - 5) / 60; // 5mins less of 24hrs
const FIVE_MINUTES_IN_HOURS = 5 / 60; //
const TOKEN_ENDPOINT = "https://be.autoverify.bloombyte.dev/api/v1/token/";
const REFRESH_TOKEN_ENDPOINT =
  "https://be.autoverify.bloombyte.dev/api/v1/token/refresh/";

// type JwtTokenType = {
//   access: string;
//   refresh: string;
//   access_expiry?: string;
//   refresh_expiry?: string;
// };

// type JwtAccessTokenType = {
//   access: string;
//   access_expiry?: string;
// };

// type UserCredientials = {
//   username: string;
//   password: string;
// };

function hasExpired(expiryTimestamp) {
  // Get the current time in seconds since the epoch
  // Expiry time stamp is a 10 digit unix time stamp
  const expires_when = parseInt(expiryTimestamp);
  const currentTimestamp = Math.floor(Date.now() / 1000);

  // Compare the expiry timestamp with the current timestamp
  return expires_when <= currentTimestamp;
}

function getTokenFromStorage() {
  const tokens = localStorage.getItem(TOKEN_NAME);
  if (!tokens) {
    return null;
  }
  return JSON.parse(tokens);
}

function _getExpiryTimestamp(hoursToExpire) {
  // Get the current time
  const currentTime = new Date();

  // Calculate the expiry time by adding hoursToExpire to the current time
  const expiryTime = new Date(
    currentTime.getTime() + hoursToExpire * 60 * 60 * 1000
  );

  // Get the Unix timestamp (in seconds) for the expiry time
  const expiryTimestamp = Math.floor(expiryTime.getTime() / 1000);

  return expiryTimestamp.toString(); // Convert to string and return
}

function _subtractHoursFromTimestamp(timestamp, hoursToRemove) {
  // Convert the Unix timestamp to milliseconds
  const timestampInMillis = parseInt(timestamp);
  const secondsToRemove = hoursToRemove * 60 * 60;

  // Create a new Date object using the timestamp
  const newTimeStamp = timestampInMillis - secondsToRemove;

  return String(newTimeStamp);
}

function _complete_tokens(tokens) {
  if (!tokens.access_expiry || !tokens.refresh_expiry) {
    // set access to 1hr
    // set refresh to 1 day
    tokens.access_expiry = _getExpiryTimestamp(DEFAULT_ACCESS_EXPIRY); // set access to 55mins
    tokens.refresh_expiry = _getExpiryTimestamp(DEFAULT_REFRESH_EXPIRY); // set refresh to 5mins from 24hrs
  } else {
    tokens.access_expiry = _subtractHoursFromTimestamp(
      tokens.access_expiry,
      FIVE_MINUTES_IN_HOURS
    );
    tokens.refresh_expiry = _subtractHoursFromTimestamp(
      tokens.refresh_expiry,
      FIVE_MINUTES_IN_HOURS
    );
  }
  return tokens;
}

export function _now_timestamp() {
  // returns now in unix time stamp
  return Math.floor(new Date().getTime() / 1000);
}

export function _toTimeStamp(date) {
  return Math.floor(date.getTime() / 1000);
}

// Function to convert Unix timestamp to Date object
export function _unixToDate(unixTimestamp) {
  // Multiply by 1000 to convert seconds to milliseconds
  return new Date(unixTimestamp * 1000);
}

export function stringToDate(dateString) {
  // convert string of format yyyy-mm-dd to date object
  const [year, month, day] = dateString.split("-").map(Number);

  // Create a new Date object
  const date = new Date(year, month - 1, day);
  return date;
}

export function dateToString(date) {
  // convert date object to yyyy-mm-dd string
  const year = date.getFullYear();
  let month = (date.getMonth() + 1).toString();
  let day = date.getDate().toString();

  // Add leading zeros to month and day if necessary
  if (month.length < 2) {
    month = "0" + month;
  }
  if (day.length < 2) {
    day = "0" + day;
  }

  // Combine year, month, and day into the yyyy-mm-dd format
  return `${year}-${month}-${day}`;
}

function setTokenInStorage(tokens) {
  tokens = _complete_tokens(tokens);
  const token_string = JSON.stringify(tokens);
  localStorage.setItem(TOKEN_NAME, token_string);
}

function setOnlyAccessTokenInStorage(tokens) {
  const jwtToken = getTokenFromStorage();

  if (!jwtToken) {
    throw Error("RefreshError: storage is empty.");
  }

  jwtToken.access = tokens.access;
  jwtToken.access_expiry = _subtractHoursFromTimestamp(
    tokens.access_expiry,
    FIVE_MINUTES_IN_HOURS
  );

  localStorage.setItem(TOKEN_NAME, JSON.stringify(jwtToken));
}

export async function loginUser(credentials) {
  // if this function returns null it means an error ocurred or the access token
  try {
    const res = await fetch(TOKEN_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    if (res.ok) {
      const jwtToken = await res.json();
      setTokenInStorage(jwtToken);
      return jwtToken.access;
    }
    console.error(`Authentication failed: ${res.statusText}`);
  } catch (error) {
    console.error("Authentication failed:", error);
  }

  return null;
}

async function refreshToken(refresh_token) {
  // if this function returns null you need to log in the user
  // access = loginUser(credentials: UserCredentials);

  try {
    const res = await fetch(REFRESH_TOKEN_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refresh: refresh_token,
      }),
    });
    if (res.ok) {
      const jwtToken = await res.json();
      setOnlyAccessTokenInStorage(jwtToken);
      return jwtToken.access;
    }
    console.error(`Authentication failed: ${res.statusText}`);
  } catch (error) {
    console.error("Authentication failed:", error);
  }

  return null;
}

export async function getToken() {
  // check if access token is not expired
  const jwtToken = getTokenFromStorage();

  if (jwtToken === null) {
    // storage is empty
    return null;
  }

  if (hasExpired(jwtToken.access_expiry)) {
    // access: expired but refresh:ok
    if (!hasExpired(jwtToken.refresh_expiry)) {
      const access = await refreshToken(jwtToken.refresh);
      return access;
    }
    return null;
  } else {
    return jwtToken.access;
  }
}

export function gotToLogout() {
  createAndClickLink(`${getDomain()}/login`);
}

export function logoutUser() {
  localStorage.removeItem(TOKEN_NAME);
  gotToLogout();
}
