import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Box, Button, Typography, useTheme } from "@mui/material";
const fieldStyle = {
  width: "100%",
  height: "2.8rem",
  padding: "10px",
  border: "1px solid #8B8B8B",
  borderRadius: "8px",
};

const ContactForm = () => {
  const theme = useTheme();
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^\d+$/, "Phone number must contain only digits")
      .required("Phone number is required"),
    message: Yup.string().required("Message is required"),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const handleSubmit = (values) => {
    console.log("Form submitted:", values);
    alert("Form submitted successfully!");
  };

  return (
    <Box
      sx={{
        width: "100%",
        p: 4,
        bgcolor: "#F6F6F6",
        borderRadius: "8px",
      }}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
              <Box sx={{ flex: 1 }}>
                <Typography variant="subtitle2">First Name</Typography>
                <Field
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  style={fieldStyle}
                />
                <Typography variant="caption" color="error">
                  <ErrorMessage name="firstName" />
                </Typography>
              </Box>

              <Box sx={{ flex: 1 }}>
                <Typography variant="subtitle2">Last Name</Typography>
                <Field
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  style={fieldStyle}
                />
                <Typography variant="caption" color="error">
                  <ErrorMessage name="lastName" />
                </Typography>
              </Box>
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle2">Email</Typography>
              <Field
                name="email"
                type="email"
                placeholder="Email Address"
                style={fieldStyle}
              />
              <Typography variant="caption" color="error">
                <ErrorMessage name="email" />
              </Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle2">Phone Number</Typography>
              <Field
                name="phone"
                type="text"
                placeholder="Phone Number"
                style={fieldStyle}
              />
              <Typography variant="caption" color="error">
                <ErrorMessage name="phone" />
              </Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle2">Message</Typography>
              <Field
                name="message"
                as="textarea"
                placeholder="Message"
                style={{
                  ...fieldStyle,
                  height: "10.3rem",
                }}
              />
              <Typography variant="caption" color="error">
                <ErrorMessage name="message" />
              </Typography>
            </Box>

            <Button
              type="submit"
              variant="contained"
              sx={{
                width: "100%",
                py: 1.5,
                borderRadius: "8px",
                textTransform: "none",
                boxShadow: "none",
                color: "white",
                height: "3.2rem",
                bgcolor: theme.palette.secondary.main,
              }}
              disabled={isSubmitting}
            >
              Send us a message
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default ContactForm;
