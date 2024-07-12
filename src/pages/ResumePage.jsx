import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import Image from 'react-bootstrap/Image';
import profile from '../assets/profile.png';

import 'bootstrap-icons/font/bootstrap-icons.css'




export const ResumePage = () => {
  return (
    <div className="d-flex flex-column h-100 bg-light">
      <div className="flex-shrink-0">
        <Container className='container px-5 my-5'>
          <div className='text-center mb-5'>
           <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Resume</span></h1>
          </div>
          <Row className='row gx-5 justify-content-center'>
            <Col className='col-lg-11 col-xl-9 col-xxl-8'>
              <section>
                  <div className='d-flex align-items-center justify-content-between mb-4'>
                    <h2 className="text-primary fw-bolder mb-0">Experience</h2>
                    <a className="btn btn-primary px-4 py-3" href="https://docs.google.com/document/d/1h0klay1Cp4IUK_QlL_BusobRo2XTrY1b_jXJs9jJALo/edit?usp=sharing">
                        <div className="d-inline-block bi bi-download me-2"></div>
                          Download Resume
                    </a>
                  </div>
                  <Card className='shadow border-0 rounded-4 mb-5'>
                    <Card.Body className='p-5'>
                      <Row className='align-items-center gx-5'>
                        <Col className='text-center text-lg-start mb-4 mb-lg-0'>
                          <div className='bg-light p-4 rounded-4'>
                            <div className="text-primary fw-bolder mb-2">Feb 2022 - July 2022</div>
                            <div className="small fw-bolder">Cloud Computing</div>
                            <div className="small text-muted">Bangkit Academy 2022 "Online"</div>
                            <div className="small text-muted">Yogyakarta, Indonesia</div>
                          </div>
                        </Col>
                        <Col>
                          <Card.Text className='lg-8'><span>In this program, I participated in a program that aims to produce graduates who can compete in the field of technology. I participated in the Cloud Computing segment in charge of creating a connection between the front end and the database or a model in machine learning. In this program, my team and I made a final project with the concept of image recognition to detect food and will bring up recipes from the detected food.</span></Card.Text>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                  <Card className='shadow border-0 rounded-4 mb-5'>
                    <Card.Body className='p-5'>
                      <Row className='align-items-center gx-5d'>
                        <Col className='text-center text-lg-start mb-4 mb-lg-0'>
                        <div className='bg-light p-4 rounded-4'>
                            <div className="text-primary fw-bolder mb-2">Feb 2022 - July 2023</div>
                            <div className="small fw-bolder">Laboratory Assistant</div>
                            <div className="small text-muted">UPN "Veteran" Yogyakarta</div>
                            <div className="small text-muted">Yogyakarta, Indonesia</div>
                        </div>   
                        </Col>
                        <Col>
                        <Card.Text className='lg-8'><span>On this occasion, I was given the responsibility of being a laboratory assistant in my department by teaching several courses such as algorithms and web programming. I was assigned to teach students in these courses.</span></Card.Text>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
              </section>
              <section>
                <h2 className='text-secondary fw-bolder mb-4'>Education</h2>
                <Card className='shadow border-0 rounded-4 mb-5'>
                  <Card.Body className='p-5'>
                    <Row className='align-items-center gx-5'> 
                      <Col className='text-center text-lg-start mb-4 mb-lg-0'>
                      <div className="bg-light p-4 rounded-4"> 
                        <div className="text-secondary fw-bolder mb-2">2019 - 2024</div>
                          <div className="mb-2">
                            <div className="small fw-bolder">UPN "Veteran" Yogyakarta</div>
                            <div className="small text-muted">Yogyakarta, Indonesia</div>
                          </div>
                          <div className="fst-italic">
                             <div className="small text-muted">Bachelor</div>
                            <div className="small text-muted">Information System</div>
                          </div>                  
                      </div>
                      </Col>
                      <Col>
                      <Card.Text className='lg-8'><span>I graduated with honors and a GPA of 4.70. I had a long learning period because I participated in several activities during my time as a student. I am a student who is diligent in carrying out the tasks given by the lecturer.</span></Card.Text>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </section>
              <div className="pb-5"></div>
              <section>
                <Card className='shadow border-0 rounded-4 mb-5'>
                  <Card.Body className='p-5'>
                    <div className='mb-5'>
                      <div className="d-flex align-items-center mb-4">
                      <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3 " style={{width : '50px', height:'50px'}}><i className="bi bi-tools h1"></i></div>
                        <h3 className="fw-bolder mb-0"><span className="text-gradient d-inline">Professional Skills</span></h3>
                      </div>
                      <Row className='row-cols-1 row-cols-md-3 mb-4'>
                        <Col className='mb-4 mb-md-0'>
                         <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">HTML</div>
                        </Col>
                        <Col className='mb-4 mb-md-0'>
                          <div className='d-flex align-items-center bg-light rounded-4 p-3 h-100'>CSS</div>
                        </Col>
                        <Col className='mb-4 mb-md-0'>
                          <div className='d-flex align-items-center bg-light rounded-4 p-3 h-100'>Laravel</div>
                        </Col>
                      </Row>
                      <Row className='row-cols-1 row-cols-md-3 mb-4'>
                        <Col className='mb-4 mb-md-0'>
                          <div className='d-flex align-items-center bg-light rounded-4 p-3 h-100'>React</div>
                        </Col>
                        <Col className='mb-4 mb-md-0'>
                          <div className='d-flex align-items-center bg-light rounded-4 p-3 h-100'>PHP</div>
                        </Col>
                        <Col className='mb-4 mb-md-0'>
                          <div className='d-flex align-items-center bg-light rounded-4 p-3 h-100'>C++</div>
                        </Col>
                      </Row>
                      <Row className='row-cols-1 row-cols-md-3'>
                        <Col className='mb-4 mb-md-0'>
                          <div className='d-flex align-items-center bg-light rounded-4 p-3 h-100'> Photoshop</div>
                        </Col>
                        <Col className='mb-4 mb-md-0'>
                          <div className='d-flex align-items-center bg-light rounded-4 p-3 h-100'> Premiere Pro</div>
                        </Col>
                        <Col className='mb-4 mb-md-0'>
                          <div className='d-flex align-items-center bg-light rounded-4 p-3 h-100'> Capcut</div>
                        </Col>
                      </Row>
                    </div>
                    <div className='mb-0'>
                      <div className="d-flex align-items-center mb-4">
                          <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3" style={{width : '50px', height:'50px'}}><i className="bi bi-code-slash h1"></i></div>
                          <h3 className="fw-bolder mb-0"><span className="text-gradient d-inline">Languages</span></h3>
                      </div>
                      <Row className='row-cols-1 row-cols-md-3 mb-4'>
                        <Col className='mb-4 mb-md-0'>
                         <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Bahasa Indonesia</div>
                        </Col>
                        <Col className='mb-4 mb-md-0'>
                          <div className='d-flex align-items-center bg-light rounded-4 p-3 h-100'> English </div>
                        </Col>
                      </Row>
                    </div>
                  </Card.Body>
                </Card>
              </section>
            </Col>
          </Row>
        </Container>
      </div>
      
    </div>
  )
}
