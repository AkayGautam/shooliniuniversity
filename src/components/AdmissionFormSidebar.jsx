import React, { useEffect } from 'react'


const AdmissionFormSidebar = () => {

  useEffect(() => {
    var s=document.createElement("script"); s.type="text/javascript"; s.async=true; s.src="https://widgets.nopaperforms.com/emwgts.js"; document.body.appendChild(s); 
  })

  
  return (
    <>
      <div className="sideBarNew mt-3">
      <div className="enqForm course-search">
                          <h5 className="formName"> Admissions Open: 2023 </h5>
                          <div class="npf_wgts" data-height="330px" data-w="1222078993f709a639ec1d6ca2d2d084"></div>
                      </div>
      </div>
    </>
  )
}

export default AdmissionFormSidebar
