import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Intell, Proactivated, Innovocation } from './Iconimg';
import Dottedimg from '../assets/images/png/dotted-arrow.png';
import Dottedimg2 from '../assets/images/png/dotted-arrow2.png';
import Jetx from '../assets/images/png/jetximg.png';
import Btnline from '../assets/images/png/btn-line.png';
import Jokerimg from '../assets/images/png/jokerimg.png';
import Sagaimg from '../assets/images/png/sagaimg.png';
import Fortuneimg from '../assets/images/png/fortuneimg.png';
import Delightimg from '../assets/images/png/delightjungleimg.png';
import Casinoimg from '../assets/images/png/casinoimg.png';
import Btnemzor from '../assets/images/png/btn-emzor.png';


const Atributos = () => {
    return (
        <div className='position-relative z-2'>
            <div className='bg_atributos'>
                <Container className='custom_container'>
                    <h2 data-aos="fade-up" className='mb-0 ff_anton fs_xl fw-normal lh_120 text_greenblack text-center'>Nuestros Atributos de Marca</h2>
                    <Row className='pb_150 pb_50 pt-lg-5 pt-4 justify-content-center'>
                        <Col data-aos="fade-right" lg={4} sm={6} className='col-12 d-flex justify-content-lg-start justify-content-center position-relative'>
                            <div className='d-flex flex-column justify-content-center align-items-center cur_pointer'>
                                <Intell />
                                <h3 className='mb-0 ff_anton fs_md fw-normal lh_130 text_greenblack text-center mt-3'>Inteligencia</h3>
                                <p className='mb-0 ff_inter fs_sm fw-medium lh_160 text_greenblack op_08 mw_263 text-center mt-2'>Somos creadores de cambios que exploran nuevas formas de entretenimiento.</p>
                            </div>
                            <div className='position-absolute mw_273 dotted_img d-lg-block d-none'>
                                <img src={Dottedimg} alt="Dottedimg" className='w-100' />
                            </div>
                        </Col>
                        <Col data-aos="fade-up" lg={4} sm={6} className='col-12 d-flex justify-content-center mt-sm-0 mt-4'>
                            <div className='d-flex flex-column justify-content-center align-items-center cur_pointer'>
                                <Proactivated />
                                <h3 className='mb-0 ff_anton fs_md fw-normal lh_130 text_greenblack text-center mt-3'>Proactividad</h3>
                                <p className='mb-0 ff_inter fs_sm fw-medium lh_160 text_greenblack op_08 mw_263 text-center mt-2'>Comprendemos a la perfección los gustos de las personas y el mundo del gaming.</p>
                            </div>
                        </Col>
                        <Col data-aos="fade-left" lg={4} sm={6} className='col-12 d-flex justify-content-lg-end justify-content-center position-relative mt-lg-0 mt-4'>
                            <div className='d-flex flex-column justify-content-center align-items-center cur_pointer'>
                                <Innovocation />
                                <h3 className='mb-0 ff_anton fs_md fw-normal lh_130 text_greenblack text-center mt-3'>Innovación</h3>
                                <p className='mb-0 ff_inter fs_sm fw-medium lh_160 text_greenblack op_08 mw_263 text-center mt-2'>Pensamos fuera de la caja para estar siempre un paso adelante.</p>
                            </div>
                            <div className='position-absolute mw_273 dotted_img2 d-lg-block d-none'>
                                <img src={Dottedimg2} alt="Dottedimg2" className='w-100' />
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container id='Tragamonedas' className='custom_container'>
                    <h2 data-aos="fade-down" className='mb-0 ff_anton fs_xl fw-normal text_greenblack lh_120 text-center'>Slots</h2>
                    <div data-aos="fade-down" className='d-flex align-items-center justify-content-center mt-3 mb_60 mb_40'>
                        <p className='mb-0 ff_inter fs_sm fw-medium text_greenblack lh_160 text-center mw_904'>En Exclusive Games, ofrecemos una selección de más de 600 juegos de los principales desarrolladores, como Aristocrat, Amatic, EGT, Novomatic, IGT, Playtech, Igrosoft y Tom Horn. Nuestro equipo trabaja incansablemente para innovar y ampliar nuestra oferta de experiencias, garantizando la máxima seguridad con operaciones protegidas por cifrado SSL de 256 bits.</p>
                    </div>
                    <Row>
                        <Col data-aos="fade-right" lg={4} md={6} className='col-12'>
                            <div className='position-relative img_hover1 cur_pointer'>
                                <div className='black_layer position-relative br_8'>
                                    <img src={Jetx} alt="Jetx" className='w-100 br_8' />
                                </div>
                                <div className='position-absolute btn_none top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center'>
                                    <div className='position-relative btn_white'>
                                        <button className='btn_acceso ff_inter fs_sm fw-bold lh_160 text-white'>Jugar</button>
                                        <img src={Btnline} alt="Btnline" className='position-absolute btn_img' />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col data-aos="fade-down" lg={4} md={6} className='col-12 mt-md-0 mt-4'>
                            <div className='position-relative img_hover1 cur_pointer'>
                                <div className='black_layer position-relative br_8'>
                                    <img src={Jokerimg} alt="Jokerimg" className='w-100 br_8' />
                                </div>
                                <div className='position-absolute btn_none top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center'>
                                    <div className='position-relative btn_white'>
                                        <button className='btn_acceso ff_inter fs_sm fw-bold lh_160 text-white'>Jugar</button>
                                        <img src={Btnline} alt="Btnline" className='position-absolute btn_img' />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col data-aos="fade-left" lg={4} md={6} className='col-12 mt-lg-0 mt-4'>
                            <div className='position-relative img_hover1 cur_pointer'>
                                <div className='black_layer position-relative br_8'>
                                    <img src={Sagaimg} alt="Sagaimg" className='w-100 br_8' />
                                </div>
                                <div className='position-absolute btn_none top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center'>
                                    <div className='position-relative btn_white'>
                                        <button className='btn_acceso ff_inter fs_sm fw-bold lh_160 text-white'>Jugar</button>
                                        <img src={Btnline} alt="Btnline" className='position-absolute btn_img' />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col data-aos="fade-right" lg={4} md={6} className='col-12 mt-4'>
                            <div className='position-relative img_hover1 cur_pointer'>
                                <div className='black_layer position-relative br_8'>
                                    <img src={Fortuneimg} alt="Fortuneimg" className='w-100 br_8' />
                                </div>
                                <div className='position-absolute btn_none top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center'>
                                    <div className='position-relative btn_white'>
                                        <button className='btn_acceso ff_inter fs_sm fw-bold lh_160 text-white'>Jugar</button>
                                        <img src={Btnline} alt="Btnline" className='position-absolute btn_img' />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col data-aos="fade-up" lg={4} md={6} className='col-12 mt-4'>
                            <div className='position-relative img_hover1 cur_pointer'>
                                <div className='black_layer position-relative br_8'>
                                    <img src={Delightimg} alt="Delightimg" className='w-100 br_8' />
                                </div>
                                <div className='position-absolute btn_none top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center'>
                                    <div className='position-relative btn_white'>
                                        <button className='btn_acceso ff_inter fs_sm fw-bold lh_160 text-white'>Jugar</button>
                                        <img src={Btnline} alt="Btnline" className='position-absolute btn_img' />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col data-aos="fade-left" lg={4} md={6} className='col-12 mt-4'>
                            <div className='position-relative img_hover1 cur_pointer'>
                                <div className='black_layer position-relative br_8'>
                                    <img src={Casinoimg} alt="Casinoimg" className='w-100 br_8' />
                                </div>
                                <div className='position-absolute btn_none top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center'>
                                    <div className='position-relative btn_white'>
                                        <button className='btn_acceso ff_inter fs_sm fw-bold lh_160 text-white'>Jugar</button>
                                        <img src={Btnline} alt="Btnline" className='position-absolute btn_img' />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div data-aos='fade-down' className='d-flex align-items-center justify-content-center cur_pointer mt-4 pt-2'>
                        <div className='position-relative btn_lime'>
                            <button className='btn_empezar ff_inter fs_sm fw-bold'>Mostrar más</button>
                            <img src={Btnemzor} alt="Btnemzor" className='position-absolute btn_emzorimg' />
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Atributos;