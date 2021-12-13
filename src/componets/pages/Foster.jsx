import React, { useState } from 'react';
import './Foster.css';
import FormModal from '../FormModal';

function Foster() {
    const [modalShow, setModalShow] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

   function submit(e) {
        e.preventDefault();
        setModalShow(true);
   }

   function changeName(e) {
       setName(e.target.value);
   }

   function changeEmail(e) {
      setEmail(e.target.value);
   }

    function changePassword(e) {
        setPassword(e.target.value);
    }
  
    return(
        <>
        <div className="fosterContainer">
        <p>Thank you for opening your heart to a pet rescued by your local, independent Pet! Our Adoption Center is open daily from 11 am to 5 pm. To adopt a dog, cat, puppy, kitten, 
            or small pet we strongly encourage you to make an Adoption Hold to ensure the pet will be waiting to meet 
            you when you arrive. Our shelter is open to meet a pet without an Adoption Hold, however you may need to wait for an adoption time to become available.</p>
        
            <form onSubmit={submit} className="contact">
            <div>
                <label>Enter your name:</label>
                <input type="text"  placeholder="Enter your name" value={name} onChange={changeName} required />

            </div>
            <div>
                <label>Enter your email:</label>
                <input type="email" placeholder="Enter your email" value={email} onChange={changeEmail} required />

            </div>
            <div>
                <label>Enter your Password:</label>
                <input type="password" placeholder="Enter your Password" value={password} onChange={changePassword}required />

            </div>
            <div>
                <div className='type'>Animal type</div>
                    <div className='slection'>
                        <label>Cat</label>
                        <input type="checkbox"  />
                        <label>Dog</label>
                        <input type="checkbox" />
                        <label>Other</label>
                        <input type="checkbox" />

                    </div>               
            </div>
               
               <button className="btnFoster" type="submit">Submit</button>            
            </form>
        </div> 
        <FormModal show={modalShow} onHide={() => setModalShow(false)} name={name} email={email} password={password} />
        </>
    )
}
export default Foster;