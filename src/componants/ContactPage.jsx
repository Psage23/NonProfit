import useScript from "./useScript"
import React from 'react';


const ContactPage = url => {
    const FormUrl="https://d3vxmrleduyji.cloudfront.net/js/e.js"
    return(
        <div data-embed-src="https://kontactr.com/form/8cd20fef31e2a40">
        {useScript(FormUrl)}
        </div>)
}
export default ContactPage;