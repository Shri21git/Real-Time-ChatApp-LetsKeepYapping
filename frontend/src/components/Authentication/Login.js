import React, { useState } from "react";
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const submitHandler = () => {};

  return (
    <VStack spacing={3}>
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter your Email here"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>

      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement w="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Button colorScheme="blue" w="100%" mt="15" onClick={submitHandler}>
        Login
      </Button>

      <Button
        variant="solid"
        colorScheme="red"
        w="100%"
        onClick={() => {
          setEmail("guest@temporary.com");
          setPassword("123456");
        }}
      >
        Use Guest User Credentials
      </Button>
    </VStack>
  );
};

export default Login;
