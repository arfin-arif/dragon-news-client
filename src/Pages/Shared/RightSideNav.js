import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from './BrandCarousel';
import { FaFacebook, FaGithub, FaGoogle, FaTwitch, FaTwitter } from 'react-icons/fa';
import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const RightSideNav = () => {
    const { providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSigIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)

            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSigIn} variant='outline-primary' ><FaGoogle></FaGoogle> Login With Google  </Button>
                <Button variant='outline-dark'><FaGithub></FaGithub> Login With GitHub </Button>

            </ButtonGroup>
            <div>
                <h5>Find Us On</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch></FaTwitch> Twitch</ListGroup.Item>

                </ListGroup>
            </div>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;