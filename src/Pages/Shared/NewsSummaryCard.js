import React from 'react';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsSummaryCard = ({ news }) => {
    const { title, _id, total_view, author, details, image_url, rating } = news;
    const { name, img, published_date } = author;
    return (
        <Card className="mb-5">
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex'>
                    <Image
                        className='me-2'
                        roundedCircle
                        src={img}
                        style={{ height: '60px' }}
                    ></Image>
                    <div>
                        <p className='mb-0'>   {name}</p>
                        <p>{published_date}</p>
                    </div>
                </div>
                <div>
                    <FaRegBookmark></FaRegBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant='top' src={image_url}></Card.Img>
                <Card.Text>
                    {
                        details.length > 200 ?
                            <p>{details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>Read More</Link> </p>
                            : <p>{details}</p>
                    }
                </Card.Text>

            </Card.Body>
            <Card.Footer className="">
                <div className='d-flex   justify-content-between align-items-center'>
                    <div>
                        <FaStar className='text-warning me-2'></FaStar>
                        <span>{rating?.number}</span>
                    </div>
                    <div className=''>
                        <FaEye className='me-2'></FaEye>
                        <span>{rating?.badge}</span>
                    </div>
                </div>
            </Card.Footer>
        </Card>

    );
};

export default NewsSummaryCard;