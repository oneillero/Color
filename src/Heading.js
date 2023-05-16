import React from 'react';
import { Col, Container, Row, Badge, Alert } from 'react-bootstrap';

function App() {
    return (
        <div style={{ paddingTop: '20px' }}>
            <Container>
                <Alert bg="danger" variant='secondary' style={{ padding: '20px' }}>
                    <h2 className='display-4'>Color</h2>
                    <p>Play with the background colors by clicking on the color palettes</p>
                </Alert>
            </Container> 
        </div>
    );
}

export default App;
