import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

interface IFetchErrorMessage {
  (error: FetchBaseQueryError): string;
}

export const getFetchErrorMessage: IFetchErrorMessage = (error) => {
  let message = `Error: ${error.status}`;

  if (typeof error.data === "string") {
    message += ` - ${error.data}`;
  } else if (
    error.data &&
    typeof error.data === "object" &&
    "message" in error.data
  ) {
    message += ` - ${(error.data as any).message}`;
  }

  return message;
};
