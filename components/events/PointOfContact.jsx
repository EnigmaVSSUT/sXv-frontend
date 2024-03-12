import { Divider, Stack, Typography } from "@mui/material";
import Item from "./Item";
import { Email, Person } from "@mui/icons-material";

const PointOfContact = ({ email }) => {
  return (
    <Stack width="100%" gap="24px">
      <Stack>
        <Typography variant="overline">Point Of Contact(s)</Typography>
        <Divider
          sx={{
            borderColor: "divider",
          }}
        />
      </Stack>
      <Stack>
        <Item icon={<Email />} text={email} />
      </Stack>
    </Stack>
  );
};

export default PointOfContact;
