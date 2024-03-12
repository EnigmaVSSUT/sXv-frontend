import useEventTimelineStore from "@/lib/store/useEventStore";
import { useMediaQuery, Tabs, Tab, Typography } from "@mui/material";

const CategoryTabSelector = () => {
  const [category, setCategory] = useEventTimelineStore((state) => [
    state.category,
    state.setCategory,
  ]);
  // const theme = useTheme()
  const greaterThanLg = useMediaQuery((theme) => theme.breakpoints.up("lg"), {
    noSsr: true,
  });

  const handleChange = (e, v) => {
    setCategory(v);
  };

  return (
    <Tabs
      value={category}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons
      allowScrollButtonsMobile
      sx={{
        width: "100%",
        "& .MuiTabs-flexContainer": {
          justifyContent: "center",
        },
      }}
    >
      <Tab
        label={
          <Typography variant="ACH6" fontSize={{ xs: "20px", sm: "45px" }}>
            Technical
          </Typography>
        }
      />
      <Tab
        label={
          <Typography variant="ACH6" fontSize={{ xs: "20px", sm: "45px" }}>
            Cultural
          </Typography>
        }
      />
      <Tab
        label={
          <Typography variant="ACH6" fontSize={{ xs: "20px", sm: "45px" }}>
            Category
          </Typography>
        }
      />
    </Tabs>
  );
};

export default CategoryTabSelector;
