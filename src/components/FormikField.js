import React from "react";
import TextField from "@material-ui/core/TextField";
import { Field, ErrorMessage } from "formik";
import "./FormikFields.css";

const FormikField = ({ label, name, type }) => {
  return (
    <div className="FormikField">
      <Field
        label={label}
        required
        type={type || TextField}
        name={name}
        autoComplete="off"
        fullWidth
        as={TextField}
        helperText={<ErrorMessage name={name} />}
      />
    </div>
  );
};

export default FormikField;
