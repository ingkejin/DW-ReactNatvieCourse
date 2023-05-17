import React from 'react'
import {useState, useEffect} from 'react'
import './Modal2.css'

const Modal2 = () => {
  let [modal, setModal] = useState(false);
  useEffect(()=>{
    setTimeout(()=>{setModal(true)}, 2000)
  })

  return (
    <div>
      {
        modal == true ? <h1 className='modalClose'>2초 후에 사라지는 모달</h1> : null
      }
    </div>
  )
}

export default Modal2