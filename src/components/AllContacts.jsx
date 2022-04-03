import React from 'react';
import { useSelector } from 'react-redux';
import Contact from './Contact';


function AllContacts() {

    const contacts = useSelector((state) => state);
 
    let sr = 0;  
    return (<>

        <div className="contacts__container">

            <table className="styled-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contacts.map((contact,index) => {
                            return (<Contact key={contact.id} index={index+1} {...contact}/>)
                        })
                    }
                </tbody>
            </table>


        </div>
    </>);
}

export default AllContacts;