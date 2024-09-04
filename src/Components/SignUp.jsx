import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

export const SignUp = () => (
  <div>
    <center>
      <h1>Signup</h1>
    </center>
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <center>
            <span>First Name</span>
            <Field name="firstName" placeholder="Enter your first name" />
            {errors.firstName && touched.firstName ? (
              <div>{errors.firstName}</div>
            ) : null}
            <br />
            <br />
            <span>Last Name</span>
            <Field name="lastName" placeholder="Enter your last name" />
            {errors.lastName && touched.lastName ? (
              <div>{errors.lastName}</div>
            ) : null}
            <br />
            <br />
            <span>Email Address</span>
            <Field name="email" type="email" placeholder="Enter your email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <br />
            <br />
            <button type="submit">Submit</button>
          </center>
        </Form>
      )}
    </Formik>
  </div>
);

export default SignUp;
