import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ResidentCards = ({ resident }) => {
  const [body, setBody] = useState()

  useEffect(() => {

    axios.get(resident)
      .then(res => setBody(res.data))
  }, [])

  console.log(body)

  const bgStatus = () => {
    if(body?.status === "Alive"){return "#4AB648"}
     else if (body?.status === "Dead"){return "red"}
     else {return "grey"}
  }

  return (
    <div className='resident__card'>
      <img src={body?.image} alt="" />
      <div className='info__resident'>
      <p>Name:{body?.name}</p>
      <p>Specie:{body?.species}</p>
      <p>Gender:{body?.gender}</p>
      <p>Origin:{body?.origin?.name}</p>
      <p>Episodes:{body?.episode?.length}</p>
      </div>
      <div className='info__status'>
        <div className='status' style={{backgroundColor: bgStatus() }}>
          </div><p>{body?.status}</p>
      </div>
    </div>
  )
}

export default ResidentCards