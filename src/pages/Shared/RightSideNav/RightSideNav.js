import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import BrandCarousel from '../BrandCarousel/BrandCarousel';


const RightSideNav = () => {
    const { providerLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} variant="outline-primary"> <FaGoogle></FaGoogle> Login with Google</Button>
                <Button variant="outline-dark"> <FaGithub></FaGithub> Login with github</Button>
            </ButtonGroup>
            <div className='mt-3'>
                <h5>Find us on</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-3'> <FaFacebook></FaFacebook> Cras justo odio</ListGroup.Item>
                    <ListGroup.Item className='mb-3'> <FaTwitter></FaTwitter> Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item className='mb-3'> <FaWhatsapp></FaWhatsapp> Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item className='mb-3'> <FaLinkedin></FaLinkedin> Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item className='mb-3'> <FaInstagram></FaInstagram> Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </div>
            <BrandCarousel></BrandCarousel>

        </div>
    );
};

export default RightSideNav;