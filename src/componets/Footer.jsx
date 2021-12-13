
import React ,{useState}from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  const [loading, setLoading] = useState(false);

  const handleSubmit =async() => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve,2000));
      
      
         setLoading(false);
  };
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        Sign Up for our Newsletter and receive our best program information
        </p>
        <div className='input-areas'>
          <form className="formContainer">
            <input
              className='footer-input' placeholder='Your Email'
            />
            <button className="btnSub" onClick={handleSubmit} disabled={loading}>
            {loading && (<span className="spinner-border spinner-border-sm" role ="status" aria-hidden ="true" />) }
                     Submit                    
                    </button>
          </form>
        </div>
      </section>
      
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/'>Animal Sanctuary</Link>
            <Link to='/'>Board of Directors</Link>
            <Link to='/'>Shelter Stories</Link>
            <Link to='/'>The Hope Program</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
        <div className='footer-link-items'>
            <h2>Policies</h2>
            <Link to='/'>Legal Information</Link>
            <Link to='/'>Privacy Policy</Link>
            <Link to='/'>Security FAQs</Link>
            <Link to='/'>Patent</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Connect</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>

        </div>
          
        
      </div>
      
    </div>
  );
}

export default Footer;