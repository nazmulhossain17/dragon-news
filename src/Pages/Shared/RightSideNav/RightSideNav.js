import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Button, ButtonGroup, ListGroup, ListGroupItem } from 'react-bootstrap';
import {FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube} from "react-icons/fa"
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import BrandCarosel from '../BrandCarosel/BrandCarosel';

const RightSideNav = () => {
    const {providerLogin} = useContext(AuthContext);
    
    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn =() =>{
        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
        .catch(error => console.log(error))
    }
    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} className='mb-2' variant='outline-primary'><FaGoogle/> Login with Google</Button>
                <Button variant='outline-dark'><FaGithub/> Login with Github</Button>
            </ButtonGroup>
            <div>
                <h5>Find us on</h5>
                <ListGroup>
                    <ListGroupItem className='mb-2'><FaFacebook/> Facebook</ListGroupItem>
                    <ListGroupItem className='mb-2'><FaWhatsapp/> WhatsApp</ListGroupItem>
                    <ListGroupItem className='mb-2'><FaTwitter/> Twitter</ListGroupItem>
                    <ListGroupItem className='mb-2'><FaInstagram/> Instagram</ListGroupItem>
                    <ListGroupItem className='mb-2'><FaYoutube/> Youtube</ListGroupItem>
                </ListGroup>
            </div>
            <div>
                <BrandCarosel></BrandCarosel>
            </div>
        </div>
    );
};

export default RightSideNav;