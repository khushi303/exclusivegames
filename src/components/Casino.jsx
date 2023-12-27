import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Btnemzor from '../assets/images/png/btn-emzor.png';
import Casinoimg from '../assets/images/png/casinonight.png'

const Casino = () => {
    return (
        <div id='Por' className='bg_white2 position-relative z-2'>
            <Container className='custom_container'>
                <Row className='align-items-center'>
                    <Col lg={6} className='col-12'>
                        <h3 data-aos="fade-down" className='mb-0 ff_anton fs_xl fw-normal text_greenblack lh_120'>Por qué elegirnos</h3>
                        <p data-aos="fade-down" className='mb-0 ff_inter fs_sm fw-medium text_greenblack op_08 lh_160 mw_526 mt-3'>Con Exclusive Games tenés Exclusivos beneficios. Te reintegramos todo lo invertido en fichas en la moneda que elijas. En Exclusive Games siempre sumamos nuevos juegos. Juegos crash, los juegos interactivos que más pide la gente. Con Exclusive Games empezás a ganar ya! Creamos tu plataforma en solo 2 semanas.</p>
                        <div data-aos="fade-down" className='mt-4'>
                            <div className='btn_lime position-relative'>
                                <button className='btn_empezar ff_inter fs_sm fw-bold'>Aprende más</button>
                                <img src={Btnemzor} alt="Btnemzor" className='position-absolute btn_emzorimg' />
                            </div>
                        </div>
                    </Col>
                    <Col data-aos="zoom-out-down" lg={6} className='col-12 mt-lg-0 mt-4 pt-lg-0 pt-2'>
                        <img src={Casinoimg} alt="Casinoimg" className='w-100 br_16 mw_md_520 img_hov cur_pointer' />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Casino