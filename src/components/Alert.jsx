import React from 'react'

function Alert(props) {
    
    return (
      <div className='container' style={{height:"35px"}}>
    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{(props.alert.type)}:</strong> {props.alert.msg}.
        {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
    </div>}
    </div>
  )
}

export default Alert