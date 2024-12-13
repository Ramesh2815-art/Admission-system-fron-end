import React from 'react'


const Card = (props) => {
  return (
    <>
    <div className="card">
     <div className="img">
        <img src={props.image} alt="" />
     </div>
     <div className="details">
        <h5>{props.degree}</h5>
        <h5>2019-2022</h5>
        <h5>percentage {props.percentage}</h5>
     </div>

    </div>
    </>
  )
}

export default Card