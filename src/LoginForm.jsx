import React, { useState } from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import FormikField from "./components/FormikField";
import { Button } from "@material-ui/core";
import FormikSelect from "./components/FormikSelect/FormikSelect";

const initialValues = {
  name: "",
  position: "",
};

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "To short Username")
    .max(10, "Too large Username")
    .required("Required"),
  position: Yup.string().required(),
});

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [positions, setPositions] = useState("");

  const handleSubmit = (values) => {
    alert(JSON.stringify(values));
    setUsername(values.name);
    setPositions(values.position);
  };

  return (
    <div className="app">
      <h1>Signup</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={SignupSchema}
      >
        {({ isValid, dirty }) => {
          return (
            <Form>
              <FormikField label="Name" name="name" />
              <div>
                <label htmlFor="">Position: </label>
                <Field name="position" as="select">
                  <option value="">/</option>
                  <option value="front-end">Front End</option>
                  <option value="back-end">Back End</option>
                  <option value="devops-end">Dev Ops</option>
                  <option value="qa">QA Enginner</option>
                </Field>
                <ErrorMessage name="position" />
              </div>
              <FormikSelect />
              <Button
                type="submit"
                disabled={!dirty || !isValid}
                variant="contained"
                color="primary"
              >
                Submit
              </Button>
            </Form>
          );
        }}
      </Formik>

      {/* outing the state and forms values */}
      {username && positions ? (
        <div>
          <br />
          <p>
            The name is {username} and postion is {positions}
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default LoginForm;
