import React from 'react';
import './Register.css';

const Register = ({ onRegisterUser }) => {

    const onRegisterClick = () => {
        const login = document.getElementById("user[login]").value;
        const email = document.getElementById("user[email]").value;
        const password = document.getElementById("user[password]").value;
        
        fetch('http://localhost:3001/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: email,
                password: password,
                name: login
            })
            })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                    onRegisterUser(user);
                }
            })
    }

    return (
        <div className="registerContaier">
            <div className="mx-auto hide-sm">
                <div className="rounded-1 text-gray bg-gray-light py-4 px-4 px-md-3 px-lg-4">
                    <form className="home-hero-signup js-signup-form" autoComplete="off" acceptCharset="UTF-8" method="post">
                        <dl className="form-group mt-0" >
                            <dt className="input-label">
                                <label className="form-label f5" htmlFor="user[login]">Username</label>
                            </dt>
                            <dd>
                                <input type="text" name="user[login]" id="user[login]" className="form-control form-control-lg input-block"
                                    placeholder="Pick a username" autoFocus="" autoComplete="off" spellCheck="false" />
                            </dd>
                        </dl>
                        <dl className="form-group">
                            <dt className="input-label">
                                <label className="form-label f5" htmlFor="user[email]">Email</label>
                            </dt>
                            <dd>
                               
                                <input type="text" name="user[email]" id="user[email]" className="form-control form-control-lg input-block js-email-notice-trigger"
                                    placeholder="you@example.com" autoComplete="off" spellCheck="false" />
                            
                            </dd>
                        </dl>
                        
                        <dl className="form-group">
                            <dt className="input-label">
                                <label className="form-label f5" htmlFor="user[password]">Password</label>
                            </dt>
                            <dd>
                                 <input type="password" name="user[password]" id="user[password]" className="form-control form-control-lg input-block"
                                    placeholder="Create a password" />
                            </dd>
                            <p className="form-control-note">Make sure it's more than 15 characters, or at least 7 characters,
                                including a number, and a lowercase letter.</p>
                        </dl>

                        <button onClick={onRegisterClick} className="btn-mktg btn-primary-mktg btn-large-mktg f4 btn-block" type="button" data-ga-click="Signup, Attempt, location:teams;">Sign
                            up for Mennenger</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;