import React from 'react';
import {useDispatch} from "react-redux"
import { useNavigate } from 'react-router-dom';

function Contact({index,id,name ,phone,email}) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleDelete(){
        dispatch({
            type:"delete",
            payload:id
        });
    }

    function handleUpdate(){
        navigate("/update/"+id);
    };
   


    return (<tr>
        <td>{index}</td>
        <td>{name}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td><input type="button" value="Edit" onClick={handleUpdate}/></td>
        <td><input type="button" value="Delete" onClick={handleDelete}/></td>
    </tr>);
}

export default Contact;