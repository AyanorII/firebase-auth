import { Container } from "@mui/material";
import AuthForm from "../components/auth/AuthForm";

const Login = () => {
  return (
    <Container>
      <AuthForm method="login" />
    </Container>
  );
};

export default Login;
