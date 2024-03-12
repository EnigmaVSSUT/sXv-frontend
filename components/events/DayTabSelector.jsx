import useEventTimelineStore from "@/lib/store/useEventStore";
import { useMediaQuery, Tabs, Tab, Typography } from "@mui/material";

const DayTabSelector = () => {
  const [activeDay, setActiveDay] = useEventTimelineStore((state) => [
    state.activeDay,
    state.setActiveDay,
  ]);
  // const theme = useTheme()
  const greaterThanLg = useMediaQuery((theme) => theme.breakpoints.up("lg"), {
    noSsr: true,
  });

  const handleChange = (e, v) => {
    setActiveDay(v);
  };

  return (
    <Tabs
      orientation={greaterThanLg ? "vertical" : "horizontal"}
      value={activeDay}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons
      allowScrollButtonsMobile
      sx={{
        "& .MuiTabs-scrollButtons": {
          width: "20px",
        },
        width: greaterThanLg ? "150px" : "auto",
      }}
    >
      <Tab label={<Typography variant="ACH6">DAY : 1</Typography>} />
      <Tab label={<Typography variant="ACH6">DAY : 2</Typography>} />
      <Tab label={<Typography variant="ACH6">DAY : 3</Typography>} />
    </Tabs>
  );
};

export default DayTabSelector;
