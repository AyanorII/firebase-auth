import { Avatar } from '@mui/material';
import Image from 'next/image';
import React, { useContext } from 'react'
import { UserContext } from '../pages/_app';

const UserAvatar = () => {
  const user: any = useContext(UserContext);

  return (
    <Avatar variant="rounded">
      {user.photoURL && (
        <Image src={user.photoURL} layout="fill" alt={user.displayName} />
      )}
    </Avatar>
  );
}

export default UserAvatar
