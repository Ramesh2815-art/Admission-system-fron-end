import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuildingColumns } from '@fortawesome/free-solid-svg-icons';
import './Styles/Navbar.css'


const Navbar = () => {
  return (
    <>
    <nav>
    <div className="icon">
    <FontAwesomeIcon icon={faBuildingColumns} size="5x" color="blue" className='font'/>
   
    <div className="details">
        <h2 id='hr'>LAXMANAN</h2>
        <h5>College of Engineering & Technology</h5>
        <p>(An Autonomous insitution in Thoothukudi)</p>
        <p><span>mail@sscollege.edu.in</span>(<span>9878230285</span>)</p>
        <button>Autonomous</button>
    </div>
    </div>
    <div className="nac">
        <h4>Accreditation</h4>
        <img src="https://seeklogo.com/images/N/naac-logo-D7080DA979-seeklogo.com.png" alt="no image" />
    </div>
    <div className="con">
        <h5>Counseling Code</h5>
        <button>2815</button>
    </div>
    </nav>
    </>
  )
}



export default Navbar