import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fields, SignInFormInputs } from "./data/fields";
import GenericForm from "../genericForm/GenericForm";

const SignInPage: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data: SignInFormInputs) => {
    const { login } = await import("../../../features/userSlice");

    dispatch(login({ name: data.name, password: data.password }));
    navigate("/complete-profile");
  };

  return (
    <GenericForm<SignInFormInputs>
      title="Sign In"
      subtitle="Welcome user, please sign in to continue"
      fields={fields}
      onSubmit={onSubmit}
    />
  );
};

export default SignInPage;
