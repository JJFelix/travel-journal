import React from 'react'

function MainCard(props) {
  return (
    <div className="main-card">
        <div className='card'>
            <img src={props.item.image} className="card-image" />
            <div className='card-text'>
                <span className='location'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMsoyUYbl1RELTu-0DIKd6_1msX6snFwxPWHZmfbq32aDKDj4ICMGNIYrxjzLYAK3vskc&usqp=CAU" alt="location-icon" /> 
                    {/* "/images/location.png" */}
                    <>{props.item.location}</>
                    <a href={props.item.link} target="_blank">View on Google Maps</a>
                </span>
                <h2 className='title'>{props.item.title}</h2>
                <h3 className='date'>{props.item.date.start} - {props.item.date.end}</h3>
                <p className='description'>{props.item.description}</p>
            </div>
        </div>
    </div>
  )
}

export default MainCard