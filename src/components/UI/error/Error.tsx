import React, { FC } from "react";
import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { Alert } from "@mui/material";
import { getErrorMessage } from "./getErrorMessage";

interface IError {
  error: FetchBaseQueryError | SerializedError;
}

const Error: FC<IError> = ({ error }): JSX.Element => {
  const errorMessage = getErrorMessage(error);

  return <Alert severity="error">{errorMessage}</Alert>;
};

export default Error;
