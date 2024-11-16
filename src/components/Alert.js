import React from 'react'

export default function Alert(props) {
  const capitalize=(word)=>{
    let lower=word.toLowerCase();
    return lower.charAt(0).toUpperCase() +lower.slice(1);
  }
  return (
    props.newAlert && <div>
      <div className={`alert alert-${props.newAlert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.newAlert.type)}! :</strong> {props.newAlert.msg}
      </div>
    </div>
  )
}
