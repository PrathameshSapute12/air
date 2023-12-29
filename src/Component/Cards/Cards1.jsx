import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from '@mui/material/Button';
const Cards1 = (prop) => {
  return (
    <div className='text'>
        <Card >
      <Card.Img variant="top" src={prop.img}/>
      <Card.Body>
        <Card.Title>
            {
                    prop.title
            }
        </Card.Title>
        <Card.Text>
          {
            prop.description
          }
        </Card.Text>
        <Button variant="outlined">{prop.button}</Button>
      </Card.Body>
    </Card>

    </div>
  )
}

export default Cards1
