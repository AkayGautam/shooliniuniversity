import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { useState } from "react";

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: "absolute",
  "&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft": {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  "&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight": {
    top: theme.spacing(2),
    left: theme.spacing(2),
  },
}));

const actions = [
  {
    icon: (
      <a
        href="https://www.youtube.com/channel/UCIIk_Yyimb_MwWNMr8JEDJg"
        target="_blank"
        rel="noreferrer"
      >
        <FaYoutube />
      </a>
    ),
    name: "Youtube",
  },
  {
    icon: (
      <a
        href="https://www.instagram.com/shooliniuniversity/?hl=en"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram />
      </a>
    ),
    name: "Instagram",
  },
  {
    icon: (
      <a
        href="https://twitter.com/ShooliniUniv?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
        target="_blank"
        rel="noreferrer"
      >
        <FaTwitter />
      </a>
    ),
    name: "Twitter",
  },
  {
    icon: (
      <a
        href="https://www.facebook.com/ShooliniUniversityOfficial/"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookF />
      </a>
    ),
    name: "Facebook",
  },
];

export default function SocialShare() {
  const [direction, setDirection] = useState("up");
  const [hidden, setHidden] = useState(false);

  return (
    <Box
      className="socialSare"
      sx={{
        position: "fixed",
        top: "96%",
        height: "100px",
        width: "100px",
        flexGrow: 2,
      }}
    >
      <Box sx={{ position: "relative", mt: 3 }}>
        <StyledSpeedDial
          ariaLabel="Social Icons"
          hidden={hidden}
          icon={<SpeedDialIcon />}
          direction={direction}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
            />
          ))}
        </StyledSpeedDial>
      </Box>
    </Box>
  );
}
