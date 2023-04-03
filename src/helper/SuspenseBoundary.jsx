import React from 'react'

function SuspenseBoundary({ children }) {
  return (
    <React.Suspense
      fallback={
        <div className="loading">
          <div className="lds-dual-ring"></div>
        </div>
      }
    >
      {children}
    </React.Suspense>
  )
}

export default SuspenseBoundary
