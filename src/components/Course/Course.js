import React from 'react';
import './Course.css'
import myData from '../../myData';
import Description from '../Course-info/Description';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Cart from '../Cart/Cart';

const Course = () => {
    const [courses, setCourses] = useState(myData)
    const [cart, setCart] = useState([])
    const handleCourse = (course) => {
        const newCart = [...cart, course]
        setCart(newCart)
        console.log('added', course)
    }

    return (
        <div>
            <Container className='container'>
                <Row>
                    <Col sm={9}>
                        {
                            courses.map(course => <Description course={course} handleCourse={handleCourse}></Description>)
                        }
                    </Col>
                    <Col sm={3}>
                        {
                            <Cart cart={cart}></Cart>
                       }
                    </Col>
                </Row>
            </Container>
    </div>
    );
};

export default Course;