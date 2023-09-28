import React, { useState } from 'react';
import './Account.css';
import { database } from './fire';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; 

function Account(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [boxToShow, setBoxToShow] = useState(1);

    const toggleBox = () => {
      setBoxToShow(prevBox => (prevBox === 1 ? 2 : 1));
    };

    const [login, setLogin] = useState(false);
    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;
        const email = e.target.email.value;
        
        console.log(username);
        console.log(password);
        console.log(email);

        createUserWithEmailAndPassword(database, username, password, email).then(data => {
            console.log(data, "authData")
        })
    }

    const handleLoginSubmit = (e, type) => {
        e.preventDefault();
        const username = e.target.username1.value;
        const password = e.target.password1.value;
        
        console.log(username);
        console.log(password);
        if(type == 'signup'){
            createUserWithEmailAndPassword(database, username, password).then(data => {
                console.log(data, "authData")
                history('/myAccount');
            }).catch(err=>{
                alert(err.code);
                setLogin(true);
            })
        }else{
            signInWithEmailAndPassword(database, username, password).then(data => {
                console.log(data, "authData")
                history('/myAccount');
            }).catch(err=>{
                alert(err.code);
            })
        }
    }

    return (

        <div className='account-container'>
            <div className='login-container'>
                <div className='row'>
                    <div id='login_name' className={login == true ?'activeColor' : 'pointer'} onClick={() => setLogin(true)}>Login</div>
                    <div id='signup_name' className={login == false ?'activeColor' : 'pointer'} onClick={() => setLogin(false)}>Signup</div>
                </div>
                <form className='login-form' onSubmit={(e) => handleLoginSubmit(e, login?'signin':'signup')}>
                    <h2 className='login-title'>{login?'Login':'Signup'}</h2>
                    <input className='login-username' name='username1' type='text' placeholder='Username...'/><br />
                    <input  className='login-password' name='password1' type='password' placeholder='Password...'/><br />
                    <button className='login-submit'>{login?'Login':'Signup'}</button>
                </form>
            </div>
        </div>
    );
}

export default Account;