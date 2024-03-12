import React from "react";
import AppContext from "context/AppContext";
import { useRouter } from "next/router";
import { Stack, TextField, Card, CardHeader, Avatar } from "@mui/material";
const Profile = () => {
  const router = useRouter();
  const { isAuthenticated } = React.useContext(AppContext);
  React.useEffect(() => {
    if (!isAuthenticated) {
      router.push("/registration");
    }
  });
  return <Stack>Profile</Stack>;
};

export default Profile;
