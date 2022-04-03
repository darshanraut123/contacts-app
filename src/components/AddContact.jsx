import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

function AddContact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const contacts = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();


        if (!name)
            return toast.warning("Please provide the name", { position: 'bottom-center' });
        else if (!email)
            return toast.warning("Please provide the email", { position: 'bottom-center' });
        else if (!phone || isNaN(Number.parseInt(phone)))
            return toast.warning("Please provide the phone", { position: 'bottom-center' });
        else {
            const isEmailExists = contacts.find(contact => contact.email === email);
            if (isEmailExists)
                return toast.error("Email already exists", { position: 'bottom-center' });
            else {
                dispatch({
                    type: "add",
                    payload: {
                        id: Math.floor(Math.random() * 1000),
                        name, email, phone
                    }
                })
                setName(""); setEmail(""); setPhone("");
                return toast.success("Success", { position: 'bottom-center' });
            }
        }
    }

    return (<>

        <div className="contacts__container">
            <div className="contacts__modal">
                <form className="contacts__form" onSubmit={(e) => handleSubmit(e)}>
                    <div id="modalHeader">
                        <h2>Add to contacts</h2>
                    </div>
                    <div id="name">
                        <input type="text" value={name} placeholder="Enter name..." onChange={e => setName(e.target.value)} />
                    </div>
                    <div id="email">
                        <input type="text" value={email} placeholder="Enter email..." onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div id="phone">
                        <input type="text" value={phone} placeholder="Enter phone..." onChange={e => setPhone(e.target.value)} />
                    </div>
                    <div id="submit">
                        <input type="submit" value="submit"></input>
                    </div>
                </form>
            </div>
        </div>





    </>);
}

export default AddContact;