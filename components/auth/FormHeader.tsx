import { Stack, Typography } from "@mui/material";
import Logo from "../Logo";

type Props = {
  method: "login" | "register";
};

const FormHeader = ({ method }: Props) => {
  return (
    <Stack spacing={0} alignItems="start" style={{ width: "100%" }}>
      <Logo />
      <Typography
        variant="h1"
        style={{
          fontSize: "1.5rem",
          fontWeight: 700,
          marginBlock: "1.5rem 1rem",
        }}
      >
        {method === "login"
          ? "Login"
          : "Join thousands of learners from around the world"}
      </Typography>
      {method === "register" && (
        <Typography variant="body1">
          Master web development by making real-life projects. There are
          multiple paths for you to choose
        </Typography>
      )}
    </Stack>
  );
};

export default FormHeader;
