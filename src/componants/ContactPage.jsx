import useScript from "./useScript"
import React from 'react';


const ContactPage = url => { 
//Conact Form provided by Free Service, Requires sign up with company. **At No Cost.**
//1. visit kontactr.com and sign up 
//2. create a new form within the newly created account.  
//3. proceed to publish form. the publish proccess will provide a URL form "embeding" the form, copy this address. DO NO use the link or pop up option.
//Please change FormURL="" with new form url once the above proccess is complete.
//please change embed-src="" with new form src url once the above proccess is complete.
    
    const FormUrl="https://d3vxmrleduyji.cloudfront.net/js/e.js"
    return(
        <div data-embed-src="https://kontactr.com/form/8cd20fef31e2a40">
        {useScript(FormUrl)}
        </div>)
}
export default ContactPage;