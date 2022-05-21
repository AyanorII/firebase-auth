import { Box, Grid, Paper, Stack } from "@mui/material";
import { AuthType } from "../../lib/types";
import EmailAndPasswordForm from "./EmailAndPasswordForm";
import FormFooter from "./FormFooter";
import FormHeader from "./FormHeader";
import SignInWithProviders from "./SignInWithProviders";

const AuthForm = ({ method }: AuthType) => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
      maxWidth="lg"
    >
      <Paper elevation={8}>
        <Box p={5}>
          <Stack
            spacing={2}
            justifyContent="center"
            alignItems="center"
            style={{ width: "30vw" }}
          >
            <FormHeader method={method} />
            <EmailAndPasswordForm method={method} />
            <SignInWithProviders />
            <FormFooter method={method} />
          </Stack>
        </Box>
      </Paper>
    </Grid>
  );
};

export default AuthForm;
