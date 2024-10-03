import { SerializedError } from "@reduxjs/toolkit";
import { getFetchErrorMessage } from "./getFetchErrorMessage";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

interface IErrorMessage {
  (error: FetchBaseQueryError | SerializedError): string;
}

export const getErrorMessage: IErrorMessage = (error) => {
  if ("status" in error) {
    return getFetchErrorMessage(error);
  }

  if ("message" in error) {
    return error.message ?? "An unknown error occurred";
  }

  return "An unknown error occurred";
};
