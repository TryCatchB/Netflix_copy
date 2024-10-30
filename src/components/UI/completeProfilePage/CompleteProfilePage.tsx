import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button, Container, Paper, TextField, Typography } from "@mui/material";
import { completeProfile } from "../../../features/userSlice";

type ProfileFormInputs = {
  age: number;
  dob: string;
  city: string;
};

const CompleteProfilePage: FC = (): JSX.Element => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormInputs>();
  const navigate = useNavigate();

  const onSubmit = (data: ProfileFormInputs) => {
    dispatch(
      completeProfile({ age: data.age, dob: data.dob, city: data.city })
    );

    navigate("/");
  };

  return (
    <Container component="main" maxWidth="xs" style={{ paddingTop: "50px" }}>
      <Paper
        elevation={0}
        style={{
          padding: "20px",
          backgroundColor: "transparent",
          color: "white",
        }}
      >
        <Typography variant="h4" align="center" sx={{ marginBottom: "10px" }}>
          Complete Profile
        </Typography>
        <Typography variant="h6" align="center" sx={{ color: "#B5B5B5" }}>
          Please provide additional information
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            fullWidth
            variant="outlined"
            label="Age"
            margin="normal"
            type="number"
            {...register("age", {
              required: "Age is required",
              min: { value: 1, message: "Enter a valid age" },
            })}
            error={!!errors.age}
            helperText={errors.age ? errors.age.message : ""}
            sx={
              /* Same style you used earlier */ {
                "& label": { color: "white" },
                "& input": { color: "white" },
              }
            }
          />
          <TextField
            fullWidth
            variant="outlined"
            label="Date of Birth"
            margin="normal"
            type="text"
            {...register("dob", { required: "Date of birth is required" })}
            error={!!errors.dob}
            helperText={errors.dob ? errors.dob.message : ""}
            sx={
              /* Same style you used earlier */ {
                "& label": { color: "white" },
                "& input": { color: "white" },
              }
            }
          />
          <TextField
            fullWidth
            variant="outlined"
            label="City"
            margin="normal"
            {...register("city", { required: "City is required" })}
            error={!!errors.city}
            helperText={errors.city ? errors.city.message : ""}
            sx={
              /* Same style you used earlier */ {
                "& label": { color: "white" },
                "& input": { color: "white" },
              }
            }
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: "16px" }}
          >
            Save Profile
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default CompleteProfilePage;
