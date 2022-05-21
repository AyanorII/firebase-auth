import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { Button, InputAdornment, Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { auth } from "../../lib/firebase";
import { AuthType } from "../../lib/types";

const SignInWithEmail = ({ method }: AuthType) => {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState("");

  const handleEmail = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEmail({ value: e.target.value, error: "" });
  };

  const handlePassword = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPassword(e.target.value);
  };

  const login = async (loginEmail: string, loginPassword: string) => {
    try {
      await auth.signInWithEmailAndPassword(loginEmail, loginPassword);
    } catch (error: any) {
      setEmail({ value: loginEmail, error: error.message });
    }
  };

  const register = async (registerEmail: string, registerPassword: string) => {
    const gAuth = getAuth();

    try {
      await createUserWithEmailAndPassword(
        gAuth,
        registerEmail,
        registerPassword
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        method === "login"
          ? login(email.value, password)
          : register(email.value, password);
      } }
      style={{ width: "100%" }}
    >
      <Stack
        spacing={ 2 }
      >
        {/* ------------------------------ Email ------------------------------*/}
        <TextField
          id="email"
          value={email.value}
          onChange={(e) => handleEmail(e)}
          type="email"
          placeholder="Email"
          variant="outlined"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
          helperText={email.error ? email.error : ""}
          error={email.error.length > 0}
        />
        {/* ------------------------------ Email ------------------------------*/}
        {/* ---------------------------- Password -----------------------------*/}
        <TextField
          id="password"
          type="password"
          value={password}
          onChange={(e) => handlePassword(e)}
          placeholder="Password"
          variant="outlined"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            ),
          }}
        />
        {/* ---------------------------- Password -----------------------------*/}
        <StyledButton type="submit" variant="contained" fullWidth>
          {method === "login" ? "Login" : "Register"}
        </StyledButton>
      </Stack>
    </form>
  );
};

export default SignInWithEmail;

const StyledButton = styled(Button)`
  font-weight: 700;
  border-radius: 8px;
`;
