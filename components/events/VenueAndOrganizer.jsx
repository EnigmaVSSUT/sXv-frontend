import getEventDate from "@/lib/utils/getEventDate";
import {
  AccessTimeFilled,
  CalendarToday,
  GroupWork,
  LocationOn,
} from "@mui/icons-material";
import { Stack, Typography, Divider } from "@mui/material";
import Item from "./Item";

const VenueAndOrganizer = ({ venue, organizer, accessTime, day }) => {
  return (
    <Stack
      direction={{
        xs: "column",
        md: "row",
      }}
      width="100%"
      gap="32px"
    >
      <Stack flexGrow={1} gap="24px">
        <Stack>
          <Typography variant="overline">Venue</Typography>
          <Divider
            sx={{
              borderColor: "divider",
            }}
          />
        </Stack>
        <Stack gap="12px">
          <Item icon={<LocationOn />} text={venue} />
          <Item icon={<AccessTimeFilled />} text={accessTime} />
          <Item icon={<CalendarToday />} text={getEventDate(day)} />
        </Stack>
      </Stack>
      <Stack flexGrow={1} gap="24px">
        <Stack>
          <Typography variant="overline">Organizer</Typography>
          <Divider
            sx={{
              borderColor: "divider",
            }}
          />
        </Stack>
        <Stack>
          <Item icon={<GroupWork />} text={organizer} />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default VenueAndOrganizer;
