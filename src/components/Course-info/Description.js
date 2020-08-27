import React from 'react';

import { Button, Accordion,Card } from 'react-bootstrap';
import './Description.css';
const Description = (props) => {
    
    return (
      
        <div className='description'>
            <div className="course-info">
                <Accordion className='btn'>
                    <Card >
                        <Card.Header>
                            <Accordion.Toggle as={Button } variant="link" eventKey="0">
                                <h4>{props.course.name}</h4>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body >
                             
                                <h4>{props.course.name}</h4>
                                <p>Instractor: {props.course.instractor}</p>
                                <h5>{props.course.description.header}</h5>
                                <h6>{props.course.description.info}</h6>

                                <Button className='bBtn' onClick={() => props.handleCourse(props.course)}> Enrol Now</Button>
                          
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        
            {/* <div className='coure-info'>
                <h4>{props.course.name}</h4>
                <p>Instractor: {props.course.instractor}</p>
                <h5>{props.course.description.header}</h5>
                <h6>{props.course.description.info}</h6>

                <Button onClick={()=>props.handleCourse(props.course)}> Enrol Now</Button>
            </div> */}
          
            <div className='pricing'>
                <h6>Price: ${props.course.price}</h6>                
            </div>
           
        </div>
    );
};

export default Description;