import React from 'react';
import './Register.css';

const Signin = () => {
    return (
        <div className="registerContaier">
            <div className="mx-auto col-sm-8 col-md-5 hide-sm">
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

                        <button className="btn-mktg btn-primary-mktg btn-large-mktg f4 btn-block" type="submit" data-ga-click="Signup, Attempt, location:teams;">Sign
                            up for GitHub</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signin;