import { Box, Button, Stack, Typography } from "@mui/material";

type Props = {};

const UserInfoHeader = (props: Props) => {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Box mb={5}>
        <Typography variant="h5" component="h2" gutterBottom>
          Profile
        </Typography>
        <Typography variant="body2" color="GrayText">
          Some info may be visible to other people
        </Typography>
      </Box>
      <Button variant="outlined" color="warning">Edit</Button>
    </Stack>
  );
};

export default UserInfoHeader;
