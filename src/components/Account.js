import React from 'react';
import './Account.css';

function Account(){

    return (
        <div className='account-container'>
            <div className='login-container'>
                <form className='login-form'>
                    <h2 className='login-title'>LOGIN</h2>
                    Username: <input className='login-username' type='text' /><br />
                    Password: <input  className='login-password'type='password' /><br />
                    <input type='Submit' className='login-submit' value='Login'/><br />
                </form>
            </div>
            <div className='signup-container'>
                <form className='signup-form'>
                    <h2 className='signup-title'>SIGNUP</h2>
                    Username: <input type='text'/>
                    Password: <input type='password'/>
                    Email: <input type='email'/>
                    <input type='submit' className='signup-submit' value='Signup'/>
                </form>
            </div>
        </div>

        
    );
}

export default Account;