const credentials = {
  username: "admin",
  password: "theadmin123",
};
const getToken = async () => {
  try {
    const res = await fetch(
      "https://apps.autoverify-be.bloombyte.dev/api/v1/token/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      }
    );
    if (!res.ok) {
      throw new Error(`Authentication failed: ${res.statusText}`);
    }
    const jwtToken = await res.json();
    localStorage.setItem("jwtToken", JSON.stringify(jwtToken));
    return jwtToken.access;
  } catch (error) {
    console.error("Authentication failed:", error);
  }
};
export async function refreshAccessToken(
  refreshToken: string
): Promise<string | null> {
  try {
    const response = await fetch(
      "https://apps.autoverify-be.bloombyte.dev/api/v1/token/refresh/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refreshToken }),
      }
    );

    if (!response.ok) {
      // If response is not okay, handle the error (e.g., throw an error)
      throw new Error("Failed to refresh access token");
    }

    const accessToken = await response.json();

    // Return the new access token
    return accessToken;
  } catch (error) {
    // Handle any errors that occur during the process
    console.error("Error refreshing access token:", error);
    return null; // Return null to indicate failure
  }
}

export default getToken;
