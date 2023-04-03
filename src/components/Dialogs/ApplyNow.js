import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import { Styles } from './dialogs'
import Link from 'next/link'

export default function ApplyNow() {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  React.useEffect(() => {
    var s = document.createElement('script')
    s.type = 'text/javascript'
    s.async = true
    s.src = 'https://widgets.nopaperforms.com/emwgts.js'
    document.body.appendChild(s)

    var MXLandingPageId = '8b8c0c2f-5e98-11ed-a19b-0acc9d8b1d02';

  })

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
              <iframe style={{width:'100%'}} name="leadsquared_landing_page_frame" src="https://shooliniuniversity.viewpage.co/Enquire-Now?ignoremxtracking=mxtrue" width="300" height="600" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>
         
            <Button className="btnHideForm" onClick={handleClose}>
              X
            </Button>
          </DialogContent>
        </Dialog>
      </div>
    </Styles>
  )
}
