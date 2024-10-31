import React, { ReactNode } from "react";
import { FieldValues, Path, SubmitHandler, useForm } from "react-hook-form";
import { Button, Container, Paper, TextField, Typography } from "@mui/material";

interface FormProps<T extends FieldValues> {
  title: string;
  subtitle: string;
  fields: Array<{
    name: Path<T>;
    label: string;
    type?: string;
    validation?: Record<string, any>;
  }>;
  onSubmit: SubmitHandler<T>;
}

const GenericForm = <T extends FieldValues>(
  props: FormProps<T>
): JSX.Element => {
  const { title, subtitle, fields, onSubmit } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<T>();

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
          {title}
        </Typography>
        <Typography variant="h6" align="center" sx={{ color: "#B5B5B5" }}>
          {subtitle}
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          {fields.map(({ name, label, type = "text", validation }) => (
            <TextField
              key={name as string}
              fullWidth
              variant="outlined"
              label={label}
              margin="normal"
              type={type}
              {...register(name, validation)}
              error={!!errors[name]}
              helperText={(errors[name]?.message as ReactNode) ?? ""}
              sx={{
                "& label": { color: "white" },
                "& input": { color: "white" },
              }}
            />
          ))}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: "16px" }}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default GenericForm;
