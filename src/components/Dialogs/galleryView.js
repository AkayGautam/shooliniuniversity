import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { Styles } from './dialogs'

export default function galleryView() {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Styles>
      <div>
        <Button
          className="slider-btn1 mr-2"
          variant="outlined"
          onClick={handleClickOpen}
        >
          Enquire
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogContent className="p-3">
            <div
              className="npf_wgts"
              data-height="510px"
              data-w="7d1b402b547afa4d6a10968170a856b6"
            ></div>
            <Button className="btnHideForm" onClick={handleClose}>
              X
            </Button>
          </DialogContent>
        </Dialog>
      </div>
    </Styles>
  )
}
