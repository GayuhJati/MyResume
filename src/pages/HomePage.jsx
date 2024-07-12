import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import profile from '../assets/profile.png';
import 'bootstrap-icons/font/bootstrap-icons.css'


import '../App.css';

export const HomePage = () => {
  return (
    <>
    <div>
    <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
            <Container className='container px-5 pb-5'>
                <Row className='row gx-5 align-items-center'>
                    <Col className='col-xxl-5'>
                        <div className="text-center text-xxl-start">
                                <div className="badge bg-gradient-primary-to-secondary text-white mb-4">
                                    <div className="text-uppercase">Design &middot; Development &middot; Editing
                                        </div>
                                </div>
                                <div className="fs-3 fw-light text-muted">Hi, My name is</div>
                                <h1 className="display-3 fw-bolder mb-5"><span className="text-gradient d-inline">Gayuh Jati</span></h1>
                                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                                    <a className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder" href={import.meta.env.BASE_URL + "Resume"}>Resume</a>
                                    <a className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder" href= {import.meta.env.BASE_URL + "Project"} >Projects</a>
                                </div>
                        </div>    
                    </Col>
                    <Col className='col-xxl-7'>
                        <div className='d-flex justify-content-center mt-5 mt-xxl-0'>
                            <div className='profile bg-gradient-primary-to-secondary'>
                                <Image className="profile-img" src={profile} fluid/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <section className="bg-light py-5">
                <Container className='container px-5'>
                <Row>
                    <Col>
                    <div className='text-center my-5'>
                        <h2 className='display-5 fw-bolder'><span className='text-gradient d-inline'>About Me</span></h2>
                        <p className='lead fw-light mb-4'> My name is Akbara Jati Gayuh Risangaji</p>
                        <p className="text-muted">I'm a fresh graduate that seeking for opportunity for my eager in technology world. I'm a creative and collaborative with a passion and a knack for mastering new skills. Proficient in C++, JavaScript, and Python, with a strong foundation in editing software like Premier Pro, Photoshop, Canva, and CapCut. Passionate to make a good impact to others.
                        </p>
                        <div className="d-flex justify-content-center fs-2 gap-4">
                            <a className="text-gradient" href="#!"><i className="bi bi-instagram"></i></a>
                            <a className="text-gradient" href="#!"><i className="bi bi-linkedin"></i></a>
                            <a className="text-gradient" href="#!"><i className="bi bi-github"></i></a>
                        </div>
                    </div>
                    </Col>
                </Row>
                </Container>
            </section>
    </div>
    </>
)
}
