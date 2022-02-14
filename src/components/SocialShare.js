import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";


const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: 'absolute',
  '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
    top: theme.spacing(2),
    left: theme.spacing(2),
  },
}));

const actions = [
    { icon: <FaYoutube />, name: 'Youtube' },
    { icon: <FaInstagram />, name: 'Instagram' },
    { icon: <FaTwitter />, name: 'Twitter' },
  { icon: <FaFacebookF />, name: 'Facebook' },
];

export default function SocialShare() {
  const [direction, setDirection] = React.useState('up');
  const [hidden, setHidden] = React.useState(false);

  return (
    <Box sx={{ position: 'fixed', top: '95%', height:'100px', width:'100px', flexGrow: 2 }}>
     
      <Box sx={{ position: 'relative', mt: 3}}>
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
