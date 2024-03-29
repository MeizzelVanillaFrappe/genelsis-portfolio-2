import React from 'react';
import { Link } from 'react-router-dom';


const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'> 
        Need a Website for your Business? 
      <br className='sm:block hidden'/>
        let's build your Website together!
      </p>
       <Link to='/contact' className='btn'>
         Contact Me
       </Link>
    </section>
  )
}

export default CTA