import React from 'react';
import './Services.css'
import foster3 from '../../images/foster3.jpeg'
import service1 from '../../images/service1.png'

function Donate() {
    
    return(
        <>
        
        <div className="services">
            <div className="card">
                <h2>Behavior & traning</h2>
                <img src={foster3} alt="training" className="serviceImg"/>
                <p>Since during this shelter-in-place time all of us are going to be s
                    pending a lot of time indoors with our dogs and cats, why not take this 
                    time to improve our pet’s skills? </p>
                    <div className="btnBox">
                    <button className="btnLearn">Learn More</button>
                </div>
               
            </div>
            <div className="card">
                <h2>Vaccination & Microchip Clinics</h2>
                <img src={service1} alt="training" className="serviceImg" />
                <p>Our low-cost vaccination & microchip clinic provides vaccinations.  It is available by appointment only and for cats and dogs of all ages.  </p>
                <div className="btnBox">
                    <button className="btnLearn">Learn More</button>
                </div>
                
               
            </div>
        </div>
        
        </>
    )
}
export default Donate;