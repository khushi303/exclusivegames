import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Pokerimg from '../assets/images/png/pokerimg.png';
import Aviatorimg from '../assets/images/png/aviatorimg.png';
import { Arsonarrow } from './Iconimg';

const Mision = () => {
    return (
        <div id='Misión' className='mision_padding ellipse1 position-relative'>
            <Container>
                <Row className='position-relative z-2'>
                    <Col lg={6} className='d-flex justify-content-center col-12'>
                        <div className='d-flex gap-lg-5 gap-md-4 gap-3 flex-lg-column flex-column-reverse position-relative z-2'>
                            <div data-aos="fade-up" className='mw_530 br_16'>
                                <img src={Pokerimg} alt="Pokerimg" className='w-100 br_16 img_hov' />
                            </div>
                            <div data-aos="fade-up">
                                <h2 className='ff_anton fs_xl fw-normal lh_120 text-white'>Nuestra Visión</h2>
                                <p className='ff_inter fs_sm fw-medium lh_160 text-white op_08 mw_444'>Nuestra visión es ser líderes indiscutibles en la industria de los juegos de azar y llevar nuestra pasión por el entretenimiento más allá de las fronteras. Imagina un mundo donde la emoción y la diversión no tengan límites, y ese es el mundo que queremos crear contigo.</p>
                                <a href="" className='cur_pointer'><Arsonarrow /></a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} className='d-flex mid_ellipse position-relative col-12 mt-lg-0 mt-5'>
                        <div className='d-flex gap-lg-5 gap-md-4 gap-3 flex-column position-relative z-2'>
                            <div data-aos="fade-down">
                                <h2 className='ff_anton fs_xl fw-normal lh_120 text-white'>Nuestra Misión</h2>
                                <p className='ff_inter fs_sm fw-medium lh_160 text-white op_08 mw_444'>Nuestra misión es simple pero poderosa: proporcionarte la más amplia gama de soluciones de entretenimiento de alta calidad y rentabilidad. Estamos comprometidos a elevar tus expectativas y brindarte experiencias inigualables.</p>
                                <a href="" className='cur_pointer'><Arsonarrow /></a>
                            </div>
                            <div data-aos="fade-down" className='mw_530'>
                                <img src={Aviatorimg} alt="Aviatorimg" className='w-100 br_16 img_hov' />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Mision;