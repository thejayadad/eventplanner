import React from "react";

interface FormInputProps {
  label: string; // Label for the input
  name: string; // Name attribute for the input
  id: string;
  placeholder: string; // Placeholder text
  type?: string; // Input type (default: "text")
  required?: boolean; // Whether the input is required
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  id,
  placeholder,
  type = "text",
  required = false,
}) => {
  return (
    <div className="form-control w-full mb-4">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
      id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        className="input input-bordered w-full"
      />
    </div>
  );
};

export default FormInput;
