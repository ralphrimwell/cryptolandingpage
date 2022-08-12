import { FormContainer, SplitScreen, LeftSide, RightSide, FormTitle } from "../components/Forms/forms";
import { PasswordInput, Input, Button, TextInput, Title, Text, Checkbox } from '@mantine/core';
import { At } from 'tabler-icons-react';
import {FcGoogle} from 'react-icons/fc'


const Register = () => {
  return (
    <>
      <SplitScreen>
        <LeftSide>

        </LeftSide>

        <RightSide>
          <FormContainer>
            <Text weight={700} order={6} color="dimmed">TRY FOR FREE</Text >


            <Title order={1}>Sign up </Title>
            <Text weight={500} order={6} color="dimmed">Already have an account?{' '}
              <Text mt="md"
                variant="link" component="a" href = '/login' to="login">Login</Text>
            </Text >
            <TextInput
              mt="md"

              label="Email"
              placeholder="Enter your email address"
              required
            />
              <TextInput
              mt="md"

              label="Name"
              placeholder="Enter your username"
              required
            />
            <PasswordInput
              placeholder="Enter your password"
              label="Password"
              required
              mt="md"
            />
            <PasswordInput
              placeholder="Enter your password"
              label="Confirm password"
              required
              mt="md"
            />
            <Checkbox mt="md" label="By registering, you agree to the terms of service" />

            <Button mt="md" fullWidth >
              Register
            </Button>
            <Button mt="md" fullWidth variant="outline" leftIcon={<FcGoogle />}>
              Sign up with google
            </Button>
          </FormContainer>
        </RightSide>
      </SplitScreen>


    </>

  )
}

export default Register;

