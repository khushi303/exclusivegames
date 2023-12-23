import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Jackpotimg from '../assets/images/png/jackpotimg.png';
import { Greentick } from './Iconimg';
import Lanzalayer1 from '../assets/images/png/PlataformaRightImg.png';
import Lanzalayer2 from '../assets/images/png/PlatformaImgLeft.png';
import Ejugi from '../assets/images/png/zugiimg.png';
import Btnline from '../assets/images/png/btn-line.png';
import Roulete from '../assets/images/png/rouleteimg.png';
import Bettingimg from '../assets/images/png/bettingimg1.png';

const Potenciando = () => {
    return (
        <div className='bg_jackpot position-relative jackpot_ellipse'>
            <Container className='pb_150 pb_80 position-relative z-2'>
                <Row className='flex-lg-row flex-column-reverse'>
                    <Col data-aos="fade-down-right" lg={6} className='col-12 d-flex justify-content-lg-start justify-content-center mt-lg-0 mt-4'>
                        <div className='mw_md_558'>
                            <img src={Jackpotimg} alt="Jackpotimg" className='w-100 br_16 img_hov cur_pointer' />
                        </div>
                    </Col>
                    <Col data-aos="fade-up-left" lg={6} className='col-12 d-flex flex-column justify-content-center'>
                        <h3 className='mb-0 ff_anton fs_xl fw-normal lh_120 text-white'>Potenciando sus elecciones</h3>
                        <p className='mb-0 ff_inter fs_sm fw-medium lh_160 op_08 text-white mt-2'>Con Exclusive Game lo mejor está de tu lado.</p>
                        <div className=' mt-4'>
                            <div className='d-flex align-items-center gap-2'>
                                <Greentick />
                                <p className='mb-0 ff_inter fs_sm fw-medium text-white op_08 lh_160'>Tecnología HTML5</p>
                            </div>
                            <div className='d-flex align-items-center gap-2 pt-2'>
                                <Greentick />
                                <p className='mb-0 ff_inter fs_sm fw-medium text-white op_08 lh_160'>Versión PC y móvil</p>
                            </div>
                            <div className='d-flex align-items-center gap-2 pt-2'>
                                <Greentick />
                                <p className='mb-0 ff_inter fs_sm fw-medium text-white op_08 lh_160'>Control de RTP (controlás qué porcentaje pagar)</p>
                            </div>
                            <div className='d-flex align-items-center gap-2 pt-2'>
                                <Greentick />
                                <p className='mb-0 ff_inter fs_sm fw-medium text-white op_08 lh_160'>Bonos editables, happy hours, Jackpots, códigos  promocionales.</p>
                            </div>
                            <div className='d-flex align-items-center gap-2 pt-2'>
                                <Greentick />
                                <p className='mb-0 ff_inter fs_sm fw-medium text-white op_08 lh_160'>Aplicación para android y windows de regalo.</p>
                            </div>
                        </div>
                        <p className='mb-0 ff_inter fs_sm fw-medium text-white op_08 lh_160 mt-4'>Te reintegramos todo lo invertido en fichas en la moneda que elijas.</p>
                    </Col>
                </Row>
            </Container>
            <Container className='pb_150 pb_80 d-flex align-items-center justify-content-center'>
                <div className='lanza_box w-100 d-flex align-items-center justify-content-center position-relative mix_blend_light overflow-hidden px-md-0 px-4'>
                    <h3 data-aos="fade-up" className='mb-0 ff_anton fs_xl fw-normal lh_120 text-white text-center mw_md_520 position-relative z-2'>lanza tu propia plataforma en sólo 2 semanas</h3>
                    <img src={Lanzalayer1} alt="Lanzalayer1" className='position-absolute end-0 bottom-0' />
                    <img src={Lanzalayer2} alt="Lanzalayer2" className='position-absolute start-0 top-0' />
                </div>
            </Container>
            <Container className='position-relative z-2'>
                <h3 data-aos="fade-down" className='mb-0 ff_anton fs_xl fw-normal text-white text-center lh_120 pb_50'>Juegos en vivo</h3>
                <Row className=' justify-content-center'>
                    <Col data-aos="fade-right" lg={4} md={6} className='col-12'>
                        <div className='position-relative img_hover1 shadow_hover cur_pointer'>
                            <div className='black_layer position-relative br_8'>
                                <img src={Ejugi} alt="Ejugi" className='w-100 br_8' />
                            </div>
                            <div className='position-absolute btn_none top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center'>
                                <div className='position-relative btn_white'>
                                    <button className='btn_acceso ff_inter fs_sm fw-bold lh_160 text-white'>Reproducir ahora</button>
                                    <img src={Btnline} alt="Btnline" className='position-absolute btn_img' />
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col data-aos="fade-down" lg={4} md={6} className='col-12 mt-md-0 mt-4'>
                        <div className='position-relative img_hover1 shadow_hover cur_pointer'>
                            <div className='black_layer position-relative br_8'>
                                <img src={Roulete} alt="Roulete" className='w-100 br_8' />
                            </div>
                            <div className='position-absolute btn_none top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center'>
                                <div className='position-relative btn_white'>
                                    <button className='btn_acceso ff_inter fs_sm fw-bold lh_160 text-white'>Reproducir ahora</button>
                                    <img src={Btnline} alt="Btnline" className='position-absolute btn_img' />
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col data-aos="fade-left" lg={4} md={6} className='col-12 mt-lg-0 mt-4'>
                        <div className='position-relative img_hover1 shadow_hover cur_pointer'>
                            <div className='black_layer position-relative br_8'>
                                <img src={Bettingimg} alt="Bettingimg" className='w-100 br_8' />
                            </div>
                            <div className='position-absolute btn_none top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center'>
                                <div className='position-relative btn_white'>
                                    <button className='btn_acceso ff_inter fs_sm fw-bold lh_160 text-white'>Reproducir ahora</button>
                                    <img src={Btnline} alt="Btnline" className='position-absolute btn_img' />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Potenciando