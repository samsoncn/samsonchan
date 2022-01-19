import React, { useState } from "react";
import {
  FormButton,
  FormContent,
  FormH1,
  FormEmailInput,
  FormTextarea,
  FormLabel,
  FormWrap,
  Text,
  Icon,
  Form,
  Container,
  Message,
} from "./ContactElements";
import emailjs from "@emailjs/browser";

const Result = () => {
  return <p>Successfully sent. I will contact you soon.</p>;
};

const Contact = () => {
  const [result, showResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_39n8aka",
        "template_jy6lzqn",
        e.target,
        "user_jux9Xh96WoNyiIsBcpe9D"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">SCHAN</Icon>
          <FormContent>
            <Form action="#" onSubmit={sendEmail}>
              <FormH1>Say Hello!</FormH1>
              <FormLabel htmlFor="for">Full Name</FormLabel>
              <FormEmailInput type="text" name="fullName" required />

              <FormLabel htmlFor="for">Enter Email</FormLabel>
              <FormEmailInput type="text" name="email" required />

              <FormLabel htmlFor="for">Message</FormLabel>
              <FormTextarea rows="6" type="text" name="message" required />

              <Message>{result ? <Result /> : null}</Message>

              <FormButton type="submit">Submit</FormButton>
              <Text>Learn more about me</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Contact;
