import React from 'react';
import 'bulma/css/bulma.css';
import Navbar from '../navbar/Navbar';
import FormField from '../formfield/FormField';
import CoolButton from '../CoolButton/CoolButton';

function Signup() {
    return (
        <div>
  <Navbar />
  
  <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
  <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
  <CoolButton /> 
        </div>
    )
}

export default Signup
