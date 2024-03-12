import { Divider, Stack, Typography } from "@mui/material";
import Item from "./Item";
import { Looks3, LooksOne, LooksTwo } from "@mui/icons-material";

const PrizeDetails = ({ firstPrize, secondPrize, thirdPrize }) => {
  return (
    <Stack width="100%" gap="24px">
      {firstPrize && (
        <Stack>
          <Typography variant="overline">Prize Pool</Typography>
          <Divider
            sx={{
              borderColor: "divider",
            }}
          />
        </Stack>
      )}
      <Stack gap="12px">
        {firstPrize && <Item icon={<LooksOne />} text={firstPrize} />}
        {secondPrize && <Item icon={<LooksTwo />} text={secondPrize} />}
        {thirdPrize && <Item icon={<Looks3 />} text={thirdPrize} />}
      </Stack>
    </Stack>
  );
};

export default PrizeDetails;
