import React from 'react';
import {Link} from "react-router-dom"

function Navbar() {
    return (<>



        <div className="contacts__navbar">
            <h1>react redux contact application</h1>
            {/* <div> */}
            <Link to="/add">Add to contacts</Link>    
            <Link to="/">All Contacts</Link>    

            {/* </div> */}
            
        </div>


    </>);
}

export default Navbar;