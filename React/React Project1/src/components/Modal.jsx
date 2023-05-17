import React from 'react'
import {useState, useEffect} from 'react';

function Modal(){

  let [alert, setAlert] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{ setAlert(false) }, 2000)
  }, [])

  return (
    <div>
      {
        alert == true ? <div className="alert alert-warning">2초 후에 사라지는 모달</div> : null
      }
    </div>

  )
}

export default Modal