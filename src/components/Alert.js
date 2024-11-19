import React from 'react'

export default function Alert(props) {
  const capitalize=(word)=>{
    let lower=word.toLowerCase();
    return lower.charAt(0).toUpperCase() +lower.slice(1);
  }
  return (
    <div style={{height:'50px'}}>
    {props.newAlert && <div className={`alert alert-${props.newAlert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.newAlert.type)}! :</strong> {props.newAlert.msg}
      </div>}
      </div>
  )
}
