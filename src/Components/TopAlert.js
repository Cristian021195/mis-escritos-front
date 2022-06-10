import React from 'react'

export const TopAlert = ({children, online, setNetStat}) => {
  return (
    <div className={`top-alert rojo top-alert-show d-${online === true ? 'none' : 'block'}`} onClick={()=>{setNetStat(true)}}>
        {children}
    </div>
  )
}