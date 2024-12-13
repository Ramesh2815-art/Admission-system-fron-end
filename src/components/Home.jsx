import React from 'react'
import Navbar from './Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal, faUser } from '@fortawesome/free-solid-svg-icons';
import { faChalkboardUser } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

import './Styles/Home.css'
import Card from './Card';
import Footer from './Footer';

const Home = () => {
  const navigate = useNavigate();
  let handle=()=>{
    navigate('/form');
  }
  return (
    <>

    <main>
        <div className="image">
            <img src="pexels-ekrulila-2292837.jpg" alt="no image" />
        </div>
        <div className="course">
          <h2>COURSE OFFEERED...</h2>
          <ul>
            <li>BSC COMPUTER SCIENCE</li>
            <li>BCA COMPUTER APPLICATION</li>
            <li>BSC CHEMISTRY</li>
            <li>BSC  MATHEMATICS</li>
          </ul>
          <div className="btn">
            <button onClick={handle}> Apply</button>
          </div>
        </div>
    </main>
    <div className="count">
      <div className="student">
       <FontAwesomeIcon icon={faUser} size="5x" color="blue" className='font'/>
       <h4>2089</h4>
       <p>Total Students</p>  
      </div>
      <div className="facult">
       <FontAwesomeIcon icon={faChalkboardUser} size="5x" color="blue" className='font'/>
       <h4>137</h4>
       <p>Total facult</p>  
      </div>
      <div className="progammes">
       <FontAwesomeIcon icon={faGraduationCap} size="5x" color="blue" className='font'/>
       <h4>11</h4>
       <p> progammes</p>  
      </div>
      <div className="placements">
       <FontAwesomeIcon icon={faMedal} size="5x" color="blue" className='font'/>
       <h4>11</h4>
       <p> placements</p>  
      </div>
    </div>
    <div className="cards">
    <Card image="person.jpg" degree="BSC COMPUTER SCIENCE" percentage="95%"/>
    <Card image="person2.jpg" degree="BSC MATHEMATICS" percentage="85%"/>
    <Card image="person3.jpg" degree="BSC CHEMISTRY" percentage="98%"/>
    </div>
    </>
  )
}

export default Home