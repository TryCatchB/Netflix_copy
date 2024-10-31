import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../../features/userSlice";
import GenericForm from "../genericForm/GenericForm";

interface SignInFormInputs {
  name: string;
  password: string;
}

const SignInPage: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data: SignInFormInputs) => {
    dispatch(login({ name: data.name, password: data.password }));

    navigate("/complete-profile");
  };

  const fields: Array<{
    name: keyof SignInFormInputs;
    label: string;
    type?: string;
    validation?: Record<string, any>;
  }> = [
    {
      name: "name",
      label: "Name",
      validation: { required: "Name is required" },
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      validation: { required: "Password is required" },
    },
  ];

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
