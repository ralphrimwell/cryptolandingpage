import { FormContainer, SplitScreen, LeftSide, RightSide, FormTitle } from "../components/Forms/forms";
import { PasswordInput, Input, Button, TextInput, Title, Text, Checkbox, LoadingOverlay, Group } from '@mantine/core';
import { At } from 'tabler-icons-react';
import { FcGoogle } from 'react-icons/fc'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const Login = () => {
  let navigate = useNavigate()
  const [visible, setVisible] = useState(false);
  return (
    <>
      <SplitScreen>
        <LeftSide>

        </LeftSide>

        <RightSide>
          <FormContainer>
            <LoadingOverlay visible = {visible} />
            <Text weight={700} order={6} color="dimmed">WELCOME BACK</Text >


            <Title order={1}>Log in</Title>
            <Text weight={500} order={6} color="dimmed">Don't have an account? {' '}
              <Text mt="md"
                variant="link" component="a" href="/register">Register</Text>

            </Text >
            <TextInput
              mt="md"

              label="Email"
              placeholder="Enter your email address"
              required
            />

            <PasswordInput
              placeholder="Enter your password"
              label="Password"
              required
              mt="md"
            />
            <Checkbox mt="md" label="Stay logged in" />

            <Button  mt="md" fullWidth >
              Log in
            </Button>
            <Button  onClickmt="md" fullWidth variant="outline" leftIcon={<FcGoogle />}>
              Log in with google
            </Button>
            
          </FormContainer>
        </RightSide>
      </SplitScreen>


    </>

  )
}

export default Login;
