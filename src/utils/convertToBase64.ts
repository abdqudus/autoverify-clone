// import { Dispatch, SetStateAction } from "react";

export const convertToBase64 = (selectedFile: File, storeDetails: any) => {
  const reader = new FileReader();
  reader.readAsArrayBuffer(selectedFile);
  reader.onload = () => {
    const buffer = reader.result as ArrayBuffer;
    const base64String = arrayBufferToBase64(buffer);
    // console.log(base64String);
    storeDetails.logo = base64String;
    // Now you can use the base64String as needed (e.g., set it in state)
  };
};

// Function to convert ArrayBuffer to base64 string
function arrayBufferToBase64(buffer: ArrayBuffer): string {
  const binary = new Uint8Array(buffer);
  let base64String = "";
  binary.forEach((byte) => {
    base64String += String.fromCharCode(byte);
  });
  return btoa(base64String);
}
