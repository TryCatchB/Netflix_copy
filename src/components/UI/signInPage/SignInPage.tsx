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

const SignInPage: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormInputs>();

  const onSubmit = (data: SignInFormInputs) => {
    dispatch(login({ name: data.name, password: data.password }));

    navigate("/complete-profile");
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
            label="Password"
            margin="normal"
            type="password"
            {...register("password", { required: "Password is required" })}
            error={!!errors.password}
            helperText={errors.password ? errors.password.message : ""}
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
            Sign In
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default SignInPage;
