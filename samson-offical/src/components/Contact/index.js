import React from 'react';
import { FormButton, FormContent, FormH1, FormEmailInput, FormTextarea, FormLabel, FormWrap, Text, Icon, Form, Container } from './ContactElements';

const Contact = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">samson</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Contact me</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormEmailInput type='email' required />
                            <FormLabel htmlFor='for'>Feel free to tell me anything :)</FormLabel>
                            <FormTextarea rows='6' type='subject' required />
                            <FormButton type='submit'>Submit</FormButton>
                            <Text>Learn more about me</Text>
                         </Form>
                    </FormContent>
                </FormWrap>
            </Container>
            
        </>
    )
}

export default Contact;
