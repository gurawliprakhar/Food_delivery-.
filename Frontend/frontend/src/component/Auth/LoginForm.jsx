import { Button, TextField, Typography } from "@mui/material";
import { Field, Formik } from "formik";
import React from "react";
import { Form, useNavigate, useDispatch } from "react-router-dom";
import { loginUser } from "../state/Authentication/Action";

const intitalValues = {
  email: "",
  password: "",
};


export const LoginForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleSubmit = (values) => {
    dispatch(loginUser({userData:values,navigate}))
  };
  return (
    <div>
      <Typography variant="h5" className="text-center">
        Login
      </Typography>
      <Formik onSubmit={handleSubmit} intitalValues={intitalValues}>
        <Form>
          <Field
            as={TextField}
            name="email"
            label="email"
            fullWidth
            variant="outlined"
             margin="normal"
          />
          <Field
            as={TextField}
            name="password"
            label="password"
            fullWidth
            variant="outlined"
            margin="normal"
          />
          <Button sx={{mt:2, padding:"1"}} fullWidth type='submit' variant='contained'></Button>
        </Form>
      </Formik>
      <Typography variant='body2' align='center' sx={{mt:3}}>
        Don't have an account?
        <Button size='small' onCLick={()=>navigate("account/register")}>
            register
        </Button>
      </Typography>
    </div>
  );
};

export default LoginForm;
