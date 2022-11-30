import React from 'react'
import { Row, Col, Button } from "react-bootstrap"
import Card from 'react-bootstrap/Card'

export default function ServicesCard({ Title, Slug, imgSrc, i }) {
    return (
        <>
            <Card key={i} className="border-0 d-flex">
                <Card.Img className='card-img' src={imgSrc} />
                <Card.ImgOverlay className='img-overlay'>
                    <Card.Title>{Title}</Card.Title>
                </Card.ImgOverlay>
                {/* <Card.Body>
                    <Card.Text>
                        Hello world
                    </Card.Text>
                </Card.Body>
                <Button>Read more</Button> */}
            </Card>

        </>
    )
}
