export type ProfileFormInputs = {
  age: string;
  dob: string;
  city: string;
};

export const fields: Array<{
  name: keyof ProfileFormInputs;
  label: string;
  type?: string;
  validation?: Record<string, any>;
}> = [
  {
    name: "age",
    label: "Age",
    type: "string",
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
