import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>

      </div>
      <div className="mfs-auto">
        <span className="mr-1">Site by</span>
        <a href="https://mosierdata.com" target="_blank" rel="noopener noreferrer">Mosierdata</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
