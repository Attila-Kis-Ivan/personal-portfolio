import { useEffect, useState } from "react";
import InputField from "../Input/input.component";
import TextField from "../Textarea/textarea.component";
import emailjs from "@emailjs/browser";
import {
  ContactSection,
  Form,
  Heading,
  Text,
  Button,
  Alert,
  TextAlert,
} from "./contact-form.styles";

const ContactForm = () => {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    role: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send("service_b2mafh9", "template_2n0vqoq", values, "BdPPPjGG5Y0xDqapC")
      .then(
        (response) => {
          console.log("SUCCESS!", response);
          setValues({
            fullName: "",
            email: "",
            role: "",
            message: "",
          });
          setStatus("SUCCESS");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  useEffect(() => {
    if (status === "SUCCESS") {
      setTimeout(() => {
        setStatus("");
      }, 1000);
    }
  }, [status]);

  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <ContactSection>
      {status && renderAlert()}
      <Form onSubmit={handleSubmit}>
        <Heading>Contact Us</Heading>
        <Text>
          Feel free to send us a message about anything you might need help
          with.
        </Text>
        <InputField
          value={values.fullName}
          handleChange={handleChange}
          label="Full Name"
          name="fullName"
          type="text"
          placeholder="Your name"
          required
        />
        <InputField
          value={values.email}
          handleChange={handleChange}
          label="E-Mail"
          name="email"
          type="email"
          placeholder="youremail@example.com"
          required
        />
        <TextField
          value={values.message}
          handleChange={handleChange}
          label="Your message here"
          name="message"
        />
        <Button type="submit" onClick={() => renderAlert()}>
          Send
        </Button>
      </Form>
    </ContactSection>
  );
};

const renderAlert = () => (
  <Alert>
    <TextAlert>Your message sent successfully</TextAlert>
  </Alert>
);

export default ContactForm;
