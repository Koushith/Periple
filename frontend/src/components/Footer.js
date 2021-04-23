import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <>
        <Row>
          <Col className='text-center py-3'>
            Copyright {new Date().getFullYear()}&copy; Periple
          </Col>
        </Row>
      </>
    </footer>
  );
};

export default Footer;
