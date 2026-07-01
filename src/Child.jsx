import React from 'react'

const Child = React.memo(
   ({handleClick}) => {
  console.log("mai chl raha hu")
  return (
     <div>
      <button onClick={handleClick}>
        Child Button
      </button>
    </div>
  )
}
)

export default Child