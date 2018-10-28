import React from 'react';
import './Signin.css';
import './Bootsrap.css';

const Signin = ({ onSignInUser }) => {

    const onSignInClick = () => {
        const login = document.getElementById("login_field").value;
        const password = document.getElementById("password_field").value;

        fetch('http://localhost:3001/signin', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: login,
                password: password
            })
        })
        .then(response => response.json())
        .then(user => {
            if (user.id) {
                onSignInUser(user);
            } else {
                document.getElementById('js-flash-container').hidden = false;
            }
        })
    }

    return (
        <div className="signinContaier">
                <div className="logged-out env-production page-responsive min-width-0 session-authentication">
                    <div className="header header-logged-out width-full pt-5 pb-4" role="banner">
                        <div className="container clearfix width-full text-center">
                            <a className="header-logo" href="http://localhost:3000" aria-label="Homepage" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
                                <svg version="1.1" height="48" width="48" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 209.32 209.32" style={{enableBackground:'new 0 0 209.32 209.32'}}
                                    xmlSpace="preserve">
                                    <path d="M188.936,69.388c2.41-0.492,8.924,2.945,14.986-0.194c9.468-4.903,4.372-6.989,0.583-8.681
                c-3.789-1.691-13.699-5.069-14.574-14.048c-0.876-8.978-8.336-11.482-8.336-11.482s3.458-17.633,0.168-18.634
                c-3.291-1.001-14.895,10.961-18.036,13.718c-10.632,0-21.922,13.978-22.192,30.271c-0.272,16.434-8.798,28.472-17.447,32.074
                c-49.731,16.216-52.749,46.172-52.614,68.605c0.036,5.958,0.653,10.985,1.657,15.191c-5.355-5.113-13.015-20.135-7.906-47.62
                C71.642,94.103,52.931,59.886,0,68.972c19.51,9.362,25.406,34.431,21.655,48.654c-8.063,30.571-10.425,75.405,48.386,75.405
                c6.944,0,12.509,0,16.973,0c2.893,0,10.168,0,17.84,0c11.448,0,23.782,0,23.782,0c4.595-0.015,10.676,0,10.676-4.31
                c0-4.865-17.027-6.217-18.379-7.433c0,0,28.405-2.154,30.541-29.73c0,0,23.582,41.246,31.082,41.352c7.5,0.105,12.695,0,17.433,0
                c4.111,0,5.665-2.294,5.665-5.537c0-3.244-4.764-4.734-7.422-4.734c-2.466,0-7.973,0.676-11.216-3.784
                c-16.217-20.811-15.531-36.707-15.547-45.001c-0.007-4.001,1.223-6.892,2.979-9.865c11.757-20.947,13.328-24.238,13.386-32.049
                c0.059-7.811-5.771-15.461-6.82-17.093C179.965,73.216,183.644,70.469,188.936,69.388z" />
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </div>


                    <div id="start-of-content" className="show-on-focus"></div>



                    <div role="main" className="application-main ">

                        <div id="js-pjax-container" data-pjax-container>


                            <div className="auth-form" id="login">
                                <form action="/session" acceptCharset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input
                                        type="hidden" name="authenticity_token" value="EcvGaZz2YBQH401KXEd+gtbvLqupvL7kBjcSQTnTd/egHcpUuuoCFw6b7PLJ3b/9wBx967sWQEtmOaRg2nKlow==" />
                                    <div className="auth-form-header p-0">
                                        <h1>Sign in to Mennenger</h1>
                                    </div>

                                    <div hidden={true} id="js-flash-container">


                                        <div className="flash flash-full flash-error">
                                            <div className="container">
                                            <button onClick={() => document.getElementById('js-flash-container').hidden = true} className="flash-close js-flash-close" type="button" aria-label="Dismiss this message">
                                                <svg className="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fillRule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"></path></svg>
                                            </button>
                                            Incorrect email or password.

                                            </div>
                                        </div>
                                    </div>
                                    <div className="auth-form-body mt-3">

                                        <label htmlFor="login_field">
                                            Your email address
                                        </label>
                                        <input type="text" name="login" id="login_field" className="form-control input-block" tabIndex="1"
                                            autoCapitalize="off" autoCorrect="off" autoFocus="autofocus" />

                                        <label htmlFor="password">
                                            Password <a className="label-link" href="/password_reset">Forgot password?</a>
                                        </label>
                                        <input type="password" name="password" id="password_field" className="form-control form-control input-block"
                                            tabIndex="2" />

                                        <input onClick={onSignInClick} type="button" name="commit" value="Sign in" tabIndex="3" className="btn btn-primary btn-block"
                                            data-disable-with="Signing in…" />
                                    </div>
                                </form>

                            </div>

                        </div>
                        <div className="modal-backdrop js-touch-events"></div>
                    </div>
                </div>
            </div>
        )
}

export default Signin;