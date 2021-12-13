import React from 'react';

import './Volunteer.css'
import  volunteer from '../../images/vol.jpeg';
function Volunteer() {
    return(
        <>
        <div className="volContainer">
            <div className="volCard">
                    <h2>Volunteer with Us!</h2>
                    <div className="process">
                        <p> 1.Review our Volunteer Positions</p> 
                        <p> 2.Fill out an Application</p>
                        <p> 3.Attend an Orientation</p>
                        <p> 4.Volunteer!</p>
                        <p>Note: Some positions require supplemental training, and not all are available at every orientation.</p>

                    
                    </div>
                   

                    
                    
            </div>
            <div>
            <img src={volunteer} alt="volunteer" className="volunteerImg"/>
            </div>
           
                
               
            </div>
        
        </>
    )
}

export default Volunteer;