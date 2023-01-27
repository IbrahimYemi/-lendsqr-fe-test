import React from 'react'

const HeadTab = ({ data }) => {
  return (
    <div className='head-tab' >
        <img src={data.image} alt="details" />
        <small> {data.name} </small>
        <h3> {data.count} </h3>
    </div>
  )
}

export default HeadTab