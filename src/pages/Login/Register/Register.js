import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const { createUser, updateUserProfile, emailVerification } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [accept, setAccept] = useState(false);


    const handleAccept = (e) => {
        setAccept(e.target.checked)

    }

    const handleEmailVerification = () => {
        emailVerification()
            .then(result => { })
            .catch(error => {
                console.log(error)
            })
    }

    const handleUpdateUserProfile = (name, photoUrl) => {
        const profile = {
            displayName: name,
            photoURL: photoUrl,
        }
        updateUserProfile(profile)
            .then(result => { })
            .catch(error => { })

    }

    const handleSignIn = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoUrl, email, password)

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                handleUpdateUserProfile(name, photoUrl);
                handleEmailVerification();
                toast.success('Please verify your email before login')
            })
            .catch(error => {
                setError(error.message)
            })


    }
    return (
        <div>
            <Form onSubmit={handleSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name="name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo Url</Form.Label>
                    <Form.Control type="text" placeholder="Enter photoUrl" name="photoUrl" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" required />
                </Form.Group>

                <Form.Check
                    type="switch"
                    id="custom-switch"
                    onClick={handleAccept}
                    label={<>accept <Link to="/terms">terms and condition</Link></>}
                />
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
                <br />
                <Button variant="primary" type="submit" disabled={!accept}>
                    Register
                </Button>
            </Form>
        </div>
    );
};

export default Register;