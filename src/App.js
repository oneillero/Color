import React, { useState } from 'react';
import { Col, Container, Row, Alert } from 'react-bootstrap';
import { CirclePicker } from 'react-color';
import Heading from './Heading.js';

function App() {
  const [backgroundColor1, setBackgroundColor1] = useState('#E6F3FF'.toLowerCase());
  const [backgroundColor2, setBackgroundColor2] = useState('#F2F9F9'.toLowerCase());
  const [backgroundColorPage, setBackgroundColorPage] = useState('#D3C9B8'.toLowerCase());

  const blueColors = ['#9AD7FF', '#69B3E9', '#3A86FF', '#007acf', '#004D80'].map(color => color.toLowerCase());
  const greenColors = ['#C6E8B7', '#A5D98A', '#7BC75E', '#5AA637', '#3C7E22'].map(color => color.toLowerCase());

  const textColor1 = backgroundColor1 === blueColors[blueColors.length - 1] ? '#FFFFFF' : '#000000';
  const textColor2 = backgroundColor2 === greenColors[greenColors.length - 1] ? '#FFFFFF' : '#000000';

  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <Heading />
      </div>

      <Container variant="success">
        <Row>
          <Col sm={6} lg={6}>
            <Alert variant='info' className='shadow' style={{ backgroundColor: backgroundColor1 }}>
              <p style={{ color: textColor1 }}>
                青は藍より出でて藍より青し
                <br></br>
                Ao wa ai yori dete ai yori aoshi 
                <br></br>
                Blue comes from indigo but is bluer than indigo, Japanese Proverb
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <CirclePicker
                  color={backgroundColor1}
                  onChange={(color) => setBackgroundColor1(color.hex)}
                  colors={blueColors}
                />
              </div>
            </Alert>
          </Col>
          <Col sm={6} lg={6}>
            <Alert variant='danger' className='shadow' style={{ backgroundColor: backgroundColor2 }}>
              <p style={{ color: textColor2 }}>
                Grænt er hús þess er býr og búum
                <br></br>
                Greynt er hoos thess er beer og booum
                <br></br>
                -Green is the house in which we live, Icelandic Proverb
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <CirclePicker
                  color={backgroundColor2}
                  onChange={(color) => setBackgroundColor2(color.hex)}
                  colors={greenColors}
                />
              </div>
            </Alert>
          </Col>
        </Row>
      </Container>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <CirclePicker
          color={backgroundColorPage}
          onChange={(color) => setBackgroundColorPage(color.hex)}
          colors={['#8C7C6B', '#725E49', '#5A4935', '#463723', '#35291A']}
        />
      </div>

      <style>{`
        body {
          background-color: ${backgroundColorPage};
        }
      `}</style>
    </div>
  );
}

export default App;
