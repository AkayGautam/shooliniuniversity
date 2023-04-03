import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Slide from "@mui/material/Slide";
import { BsFillChatLeftDotsFill } from "react-icons/bs";
import { FaRegEnvelope } from "react-icons/fa";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EnquireForMob() {


 useEffect(() => {

  var s=document.createElement("script"); s.type="text/javascript"; s.async=true; s.src="https://widgets.nopaperforms.com/emwgts.js"; document.body.appendChild(s); 


 }, [])
 
  
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="modEnq">
      <Button className="play-buttonC enqForMob" onClick={handleClickOpen}>
        <FaRegEnvelope />
      </Button>

      <a
        className="desNone"
        target="_blank"
        href="https://admissions.shooliniuniversity.com/?utm_source=Organic&utm_medium=Enquirenow&utm_campaign=Enquirenow"
        rel="noreferrer"
      >
        <BsFillChatLeftDotsFill /> Enquire Now
      </a>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          <div class="npf_wgts" data-height="350px" data-w="1222078993f709a639ec1d6ca2d2d084"></div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );


  
}
