import React from 'react';
import { signOut } from 'firebase/auth';
import { database } from './fire';
import { useNavigate } from 'react-router-dom';

function MyAccount(){
    const history = useNavigate();

    const handleClick = (e) => {
        signOut(database).then(val=>{
            history('/home');
        });
    }
    
    return (
        <div className='myaccount-container'>
            <h1 className='myaccount-title'>My Account</h1>
            <button className='logout-btn' onClick={handleClick}>Logout</button>
            <h3 className='account-info'>
                Username: <br /> 
                Password: <br /> 
                Email: <br /> 
            </h3>
        </div>
    );
}

export default MyAccount;