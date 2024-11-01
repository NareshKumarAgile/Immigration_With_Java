import React from 'react'

const BottomCard = (props) => {
  return (
    <div>
        <div className="max-w-full shadow-lg rounded-2xl transition-all duration-500 md:hover:scale-110">
            <div className="flex justify-center items-center">
              <img className="w-full h-full rounded-t-2xl" src={props.image} alt=""/>
            </div>
            <h3 className="text-2xl py-2 text-center">{props.heading}</h3>
            <p className="py-2 text-center">{props.paragraph}</p>
        </div>
    </div>
  )
}

export default BottomCard
