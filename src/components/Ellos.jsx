import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Btnline from '../assets/images/png/btn-line.png';
import Girosimg from '../assets/images/png/giros-gratis.png';
import Moneyimg from '../assets/images/png/moneygame.png';
import Happyhour from '../assets/images/png/happyhourimg.png'

const Ellos = () => {
    return (
        <div className=''>
            <div className='mt-5 pt-lg-5 pt-4 pb-5 position-relative ellos_ellipse1'>
                <Container className='position-relative z-2 custom_container'>
                    <h3 data-aos="fade-down" className='mb-0 ff_anton fs_xl fw-normal text-white lh_120 text-center'>Ellos eligieron apostar con nosotros</h3>
                    <Row className='mt-sm-5 mt-4 justify-content-center'>
                        <Col data-aos="fade-down-right" lg={4} md={6} className='col-12'>
                            <div className='position-relative img_hover1 cur_pointer'>
                                <div className='black_layer position-relative br_8'>
                                    <img src={Girosimg} alt="Girosimg" className='w-100 br_8' />
                                </div>
                                <div className='position-absolute btn_none top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center'>
                                    <div className='position-relative btn_white'>
                                        <button className='btn_acceso ff_inter fs_sm fw-bold lh_160 text-white'>Rcasinovip</button>
                                        <img src={Btnline} alt="Btnline" className='position-absolute btn_img' />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col data-aos="fade-up" lg={4} md={6} className='col-12 mt-md-0 mt-4'>
                            <div className='position-relative img_hover1 cur_pointer'>
                                <div className='black_layer position-relative br_8'>
                                    <img src={Moneyimg} alt="Moneyimg" className='w-100 br_8' />
                                </div>
                                <div className='position-absolute btn_none top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center'>
                                    <div className='position-relative btn_white'>
                                        <button className='btn_acceso ff_inter fs_sm fw-bold lh_160 text-white'>Rcasinovip</button>
                                        <img src={Btnline} alt="Btnline" className='position-absolute btn_img' />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col data-aos="fade-down-left" lg={4} md={6} className='col-12 mt-lg-0 mt-4'>
                            <div className='position-relative img_hover1 cur_pointer'>
                                <div className='black_layer position-relative br_8'>
                                    <img src={Happyhour} alt="Happyhour" className='w-100 br_8' />
                                </div>
                                <div className='position-absolute btn_none top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center'>
                                    <div className='position-relative btn_white'>
                                        <button className='btn_acceso ff_inter fs_sm fw-bold lh_160 text-white'>Rcasinovip</button>
                                        <img src={Btnline} alt="Btnline" className='position-absolute btn_img' />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className='d-flex flex-column align-items-center justify-content-center mt-4'>
                        <p className='mb-0 ff_inter fs_sm fw-semibold text-white lh_160 text-center mw_md_883'>Clientes satisfechos que confiaron en Exclusive Games y han disfrutado de emocionantes experiencias de juego.
                        </p>
                        <p data-aos='fade-down' className='mb-0 ff_inter fs_sm fw-semibold text-white lh_160 text-center mw_390'>Ahora, la próxima apuesta está en tus manos.
                            Elige ganar. Elige exclusive game.</p>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Ellos