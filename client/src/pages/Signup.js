import { useState } from 'react';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../hooks/auth';
// import { INTEGER } from 'sequelize/types';

const Signup = () => {
    const { signup, isLoggedIn } = useAuth();
    // History and location are hooks we can use to manipulate our page's history!
    const history = useHistory();
    const location = useLocation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [verify, setVerify] = useState('');
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');

    // For our redirector
    const [redirectToLogin, toggleRedirect] = useState(false);
    // This is the key part to our redirector. We can pull the prior location out here, if it exists
    const { from } = location.state || { from: { pathname: '/' } };


    const validateNames = name => {
        if (name === ' ') {
            alert('Cannot be blank.');
        } else if (/[0-9]+$/.test(name)) {
            alert('Roman Numerals Needed');
        }
    };
    const handleSubmit = event => {
        event.preventDefault();
        validateNames(first);
        validateNames(last);


        // Password Validation:

        // If password not entered 
        if (password === '') {
            alert('Please enter Password');


            // If confirm password not entered 
        } else if (verify === '') {
            alert('Password not entered.');

        }

        // If Not same return False.     
        else if (password !== verify) {
            alert('Passwords do not match: Please try again.');

            return false;
        }

        // If same return True. 
        else {
            // alert('Password Match: Welcome to Destination Set!');
            signup(email, password, first, last).then(res => {
                // Go back to whence you came!
                history.replace(from);
            });
            return true;
        }

    };

    if (isLoggedIn()) {
        return <Redirect to={location.state || '/destinations'} />;
    }

    if (redirectToLogin) {
        // If someone goes to login, this transfers the redirect
        return <Redirect to={{
            pathname: '/login',
            state: { from: from }
        }}
        />;
    }

    return (
        <div className='App'>
            <h2 id='h1'>
                Signup Page
            </h2>

            {/* <p>
            What type of account are you looking for? <button onClick={() => toggleRedirect(true)}>Business</button><button onClick={() => toggleRedirect(true)}>Leisure</button>
        </p> */}

            <form onSubmit={handleSubmit}>
                <label id='fillIn' htmlFor='first'>First Name :</label>
                <input
                    name='first'
                    placeholder='First Name'
                    type='first'
                    value={first}
                    onChange={event => setFirst(event.target.value)}
                />
                <br />
                <label id='fillIn' htmlFor='last'>Last Name :</label>
                <input
                    name='last'
                    placeholder='Last Name'
                    type='last'
                    value={last}
                    onChange={event => setLast(event.target.value)}
                />
                <br />
                <label id='fillIn' htmlFor='email'>Email :</label>
                <input
                    name='email'
                    placeholder='Email'
                    type='email'
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />
                <br />
                <label id='fillIn' htmlFor='password'>Create Password :</label>
                <input
                    name='password'
                    placeholder='Password'
                    type='password'
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                />
                <br />
                <label id='fillIn' htmlFor='verify'>Verify Password :</label>
                <input
                    name='verify'
                    placeholder='Enter Password Again'
                    type='password'
                    value={verify}
                    onChange={event => setVerify(event.target.value)}
                />
                <br />
                <br />

                <button id='btn-signup' className="btn btn-light" type='submit'>Register</button>
            </form>
            <p id='loginP'>
                Already have an account? <button id='btn-login' className="btn btn-light" onClick={() => toggleRedirect(true)}>Login Here</button>
            </p>

        </div>
    );
};

export default Signup;