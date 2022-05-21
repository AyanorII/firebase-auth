import { Box, Container, Divider, List, Paper } from "@mui/material";
import { getAuth } from "firebase/auth";
import { useContext } from "react";
import { UserContext } from "../../pages/_app";
import UserInfoHeader from "./UserInfoHeader";
import UserInfoItem from "./UserInfoItem";
import {auth} from "../../lib/firebase";

type Props = {};

const UserInfo = (props: Props) => {
  const user: any = useContext(UserContext);

  return (
    <Container maxWidth="md">
      <Paper elevation={3}>
        <Box p={5} mt={4}>
          <UserInfoHeader />
          <Divider />
          <List>
            {user && (
              <>
                <UserInfoItem field="photo" avatar />
                <UserInfoItem field="name" value={user.displayName} />
                {/* <UserInfoItem field="bio" value={} />
                <UserInfoItem field="phone" value={} /> */}
                <UserInfoItem field="email" value={user.email} />
              </>
            )}
          </List>
        </Box>
      </Paper>
    </Container>
  );
};

export default UserInfo;
