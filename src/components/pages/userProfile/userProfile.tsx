import React, { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import Image from "../../UI/image/Image";
import styles from "./UserProfile.module.css";

type UserProfileForm = {
  userName: string;
  dob: string;
  country: string;
  city: string;
};

const UserProfile: FC = (): JSX.Element => {
  const storedName = localStorage.getItem("userName") || "";
  const storedDob = localStorage.getItem("userDob") || "";
  const storedCountry = localStorage.getItem("userCountry") || "";
  const storedCity = localStorage.getItem("userCity") || "";

  const { register, handleSubmit, setValue } = useForm<UserProfileForm>({
    defaultValues: {
      userName: storedName,
      dob: storedDob,
      country: storedCountry,
      city: storedCity,
    },
  });

  const onSubmit = (data: UserProfileForm) => {
    localStorage.setItem("userName", data.userName);
    localStorage.setItem("userDob", data.dob);
    localStorage.setItem("userCountry", data.country);
    localStorage.setItem("userCity", data.city);
    alert("Profile updated!");
  };

  useEffect(() => {
    setValue("userName", storedName);
    setValue("dob", storedDob);
    setValue("country", storedCountry);
    setValue("city", storedCity);
  }, [setValue, storedName, storedDob, storedCountry, storedCity]);

  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          image={"https://cdn-icons-png.flaticon.com/512/149/149071.png"}
        />
        <p className={styles.name}>{storedName}</p>
      </div>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name:
          <input {...register("userName")} placeholder="Enter your name" />
        </label>
        <label>
          Date of Birth:
          <input type="date" {...register("dob")} />
        </label>
        <label>
          Country:
          <input {...register("country")} placeholder="Enter your country" />
        </label>
        <label>
          City:
          <input {...register("city")} placeholder="Enter your city" />
        </label>
        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
};

export default UserProfile;
