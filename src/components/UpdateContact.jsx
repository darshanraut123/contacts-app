import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function UpdateContact() {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const contacts = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        const conObj = contacts.filter(contact => contact.id === +id);
        console.log(conObj);
        if (conObj[0] !== undefined) {
            setName(conObj[0].name);
            setEmail(conObj[0].email);
            setPhone(conObj[0].phone);
        }

    }, [])


    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch({
            type: "update",
            payload: {
                id, name, email, phone
            }
        })
        setName(""); setEmail(""); setPhone("");
        return toast.success("Success", { position: 'bottom-center' });
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

export default UpdateContact;