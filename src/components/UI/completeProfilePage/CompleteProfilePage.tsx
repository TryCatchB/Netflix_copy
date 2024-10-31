import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { completeProfile } from "../../../features/userSlice";
import GenericForm from "../genericForm/GenericForm";

type ProfileFormInputs = {
  age: number;
  dob: string;
  city: string;
};

const CompleteProfilePage: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data: ProfileFormInputs): void => {
    dispatch(
      completeProfile({ age: data.age, dob: data.dob, city: data.city })
    );
    navigate("/");
  };

  const fields: Array<{
    name: keyof ProfileFormInputs;
    label: string;
    type?: string;
    validation?: Record<string, any>;
  }> = [
    {
      name: "age",
      label: "Age",
      type: "number",
      validation: {
        required: "Age is required",
        min: { value: 1, message: "Enter a valid age" },
      },
    },
    {
      name: "dob",
      label: "Date of Birth",
      validation: { required: "Date of birth is required" },
    },
    {
      name: "city",
      label: "City",
      validation: { required: "City is required" },
    },
  ];

  return (
    <GenericForm<ProfileFormInputs>
      title="Complete Profile"
      subtitle="Please provide additional information"
      fields={fields}
      onSubmit={onSubmit}
    />
  );
};

export default CompleteProfilePage;
