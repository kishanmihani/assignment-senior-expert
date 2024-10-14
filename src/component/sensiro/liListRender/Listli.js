import React from 'react'
function Listli(props) {
  return (
    <li className={`${props.className}`}><small>{ props.brand }</small></li>
  )
}
export default React.memo(Listli)