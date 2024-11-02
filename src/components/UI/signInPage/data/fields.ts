export interface SignInFormInputs {
  name: string;
  password: string;
}

export const fields: Array<{
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
