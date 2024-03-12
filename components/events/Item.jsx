import { Stack, Typography } from "@mui/material";

const Item = ({ icon, text }) => {
  return (
    <Stack direction="row" gap="12px">
      {icon}
      <Typography>{text}</Typography>
    </Stack>
  );
};

export default Item;
