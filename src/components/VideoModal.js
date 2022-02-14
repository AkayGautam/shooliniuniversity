import React from 'react'
import { Styles } from "./common/styles/modal";

const VideoModal = ({ show }) => {
    return (
        <> 
        <Styles>
         { 
         show ?
         
         <div className="modalContainer" >
            <div className="modal" >
              <header className="modal_header">
                <h2 className="modal_header-title"> Modal Title </h2>
                <button className="close" >
                  {/* <img src={Close} alt="close" /> */}
                </button>
              </header>
              <main className="modal_content">
              This is Modal Content
              </main>
              <footer className="modal_footer">
                <button className="modal-close" >
                  Cancel
                </button>
    
                <button className="submit">Submit</button>
              </footer>
            </div>
          </div>
          : null
         }
         </Styles>
        </>
      );
}

export default VideoModal


// https://pretagteam.com/question/react-state-is-not-defined-noundef
// https://react-reusable-components.vercel.app/