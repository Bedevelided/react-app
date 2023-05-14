import React from 'react'
// importing the prop-types modules to check type
import PropTypes from 'prop-types'

// Profile components and passing the props
const Profile = ({fullName = 'modibo camara' , bio, profession = "frond-end designer", children}) => {
  // handleClick function
  function handleClick(){
      alert(`The name is ${fullName}`)
  }
  
  return (
    // inline styles
    <div className='card' style={{display : 'grid' , gridTemplateColumns : '1fr'}}>
        <div className='bg-header'></div>
        <div className='bg-details'>
            <div className="img-div">
              {/* child props */}
                {children}
            </div>
            <h1>{fullName}</h1>
            <h4>{profession}</h4>
            <p className='accordion'>
                {bio}
            </p>
        </div>
        {/* inline styles */}
        <button style = {{cursor : 'pointer' , padding : '15px 5px' , textTransform: 'uppercase'}} onClick={handleClick}>Get user</button>
    </div>
  )
}

// type checking
Profile.propTypes = {
  fullName : PropTypes.string,
  bio : PropTypes.string,
  profession : PropTypes.string,
  handleClick : PropTypes.func
}

// exporting eProfile components
export default Profile