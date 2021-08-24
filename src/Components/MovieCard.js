import React from 'react';
import { Card } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";


export default function MovieCard({Movie}) {
    return (
        <div style={{color:"black"}}>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant={Movie.name} src={Movie.posterUrl} />
            <Card.Body>
                <Card.Title>{Movie.name}</Card.Title>
                <Card.Text>
                {Movie.Year}
                </Card.Text>
                <Card.Text>
                {Movie.descrption}
                </Card.Text>
                <ReactStars
                    count={5}
                    value={Movie.rating}
                    size={24}
                    activeColor="#ffd700"
                />
            </Card.Body>
            </Card>
        </div>
    )
}
