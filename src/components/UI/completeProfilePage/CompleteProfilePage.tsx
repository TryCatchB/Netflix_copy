import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ProfileFormInputs, fields } from "./data/fields";
import GenericForm from "../genericForm/GenericForm";

const CompleteProfilePage: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data: ProfileFormInputs): Promise<void> => {
    const { completeProfile } = await import("../../../features/userSlice");
    const { v4 } = await import("uuid");
    const userId = v4();

    dispatch(
      completeProfile({ age: data.age, dob: data.dob, city: data.city, userId })
    );
    navigate("/");
  };

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
