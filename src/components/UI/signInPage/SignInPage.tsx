import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Container, Typography, Paper } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../../features/userSlice";

interface SignInFormInputs {
  name: string;
  password: string;
}

const SignInPage: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormInputs>();

  const onSubmit = (data: SignInFormInputs) => {
    dispatch(login({ name: data.name, password: data.password }));

    navigate("/");
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper
        elevation={0}
        style={{ padding: "20px", backgroundColor: "#0f1011", color: "white" }}
      >
        <Typography variant="h4" align="center" sx={{ marginBottom: "10px" }}>
          Sign In
        </Typography>
        <Typography variant="h6" align="center" sx={{ color: "#B5B5B5" }}>
          Welcome user, please sign in to continue
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            fullWidth
            variant="outlined"
            label="Name"
            margin="normal"
            {...register("name", { required: "name is required" })}
            error={!!errors.name}
            helperText={errors.name ? errors.name.message : ""}
            sx={{
              "& label": {
                color: "white", // Label color
              },
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#0f1011",
                "& fieldset": {
                  borderColor: "#494949", // Border color
                },
                "&:hover fieldset": {
                  borderColor: "#494949", // Border color on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#494949", // Border color when focused
                },
                "& input": {
                  color: "white", // Text color when typing
                  backgroundColor: "#0f1011",
                },
                "& input::placeholder": {
                  color: "#B8B8B8", // Placeholder color
                },
              },
            }}
          />
          <TextField
            fullWidth
            variant="outlined"
            label="Password"
            margin="normal"
            type="password"
            {...register("password", { required: "Password is required" })}
            error={!!errors.password}
            helperText={errors.password ? errors.password.message : ""}
            sx={{
              "& label": {
                color: "white", // Label color
              },
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#0f1011",
                "& fieldset": {
                  borderColor: "#494949", // Border color
                },
                "&:hover fieldset": {
                  borderColor: "#494949", // Border color on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#494949", // Border color when focused
                },
                "& input": {
                  color: "white", // Text color when typing
                  backgroundColor: "#0f1011",
                },
                "& input::placeholder": {
                  color: "#B8B8B8", // Placeholder color
                },
              },
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: "16px" }}
          >
            Sign In
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default SignInPage;
