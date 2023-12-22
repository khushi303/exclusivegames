import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Silverimg from '../assets/images/png/SilverImg.png';
import { Greentick } from './Iconimg';
import Btnline from '../assets/images/png/btn-line.png';
import Btnemzor from '../assets/images/png/btn-emzor.png';
import Dice from '../assets/images/png/red-dice.png';
import HeartACard from '../assets/images/png/heart-A-card.png';
import Greencoin from '../assets/images/png/Greencoin.png';
import Diamondacard from '../assets/images/png/diamond-a-card.png';
import Ludoimg from '../assets/images/png/ludobar.png';
import Blacklayer from '../assets/images/png/black-layer.png';

const Nuestras = () => {
    return (
        <div id='Ofertas' className='position-relative ofertas_ellipse1'>
            <Container className='position-relative z-2'>
                <h3 data-aos="fade-down" className='ff_anton fs_xl fw-normal text-white lh_120 text-center'>Nuestras ofertas</h3>
                <p data-aos="fade-down" className='mb-0 ff_inter fs_sm fw-medium text-white lh_160 text-center'>Te ofrecemos las mejores experiencias de juegos para tus clientes.</p>
                <div className='silver_box px-lg-0 px-3 mt-sm-5 mt-4'>
                    <Row className='align-items-center'>
                        <Col data-aos="zoom-in-down" lg={6} className='silver_ellipse position-relative'>
                            <img src={Silverimg} alt="Silverimg" className='w-100 px-4 position-relative z-2' />
                            <img src={Blacklayer} alt="Black_layer" className='shadow_black position-absolute start-0 end-0' />
                        </Col>
                        <Col lg={6} className='mt-lg-0 mt-4 pe-lg-4'>
                            <h3 data-aos="fade-down" className='mb-0 ff_anton fs_lg fw-normal lh_120 text-white'>Silver</h3>
                            <p data-aos="fade-down" className='mb-0 ff_inter fs_sm fw-medium lh_160 text-white op_08 mt-3'>Diseño predeterminado, atractivo y fácil de navegar, tecnología HTLM5.</p>
                            <h3 data-aos="fade-down" className='mb-0 ff_anton fs_xl fw-normal lh_160 text-white mt-3 pt-1'>$5000</h3>
                            <div data-aos="fade-down" className='d-flex gap-2 pt-3'>
                                <div>
                                    <Greentick />
                                </div>
                                <p className='mb-0 ff_inter fs_sm fw-medium lh_160 text-white op_08'>Disponibles Payku, Pix, Depósitos en Euros, Criptomonedas, Cargas manuales</p>
                            </div>
                            <div data-aos="fade-down" className='d-flex gap-2 pt-2'>
                                <div>
                                    <Greentick />
                                </div>
                                <p className='mb-0 ff_inter fs_sm fw-medium lh_160 text-white op_08'>Control de RTP (controlás qué porcentaje pagar)</p>
                            </div>
                            <div data-aos="fade-down" className='d-flex gap-2 pt-2'>
                                <div>
                                    <Greentick />
                                </div>
                                <p className='mb-0 ff_inter fs_sm fw-medium lh_160 text-white op_08'>Bonos Editables, Happy Hours, Jackpots, Códigos Promocionales Regalo</p>
                            </div>
                            <div data-aos="fade-down" className='d-flex gap-2 pt-2'>
                                <div>
                                    <Greentick />
                                </div>
                                <p className='mb-0 ff_inter fs_sm fw-medium lh_160 text-white op_08'>Aplicación para Android y Windows de regalo.</p>
                            </div>
                            <div data-aos="fade-down" className='d-flex gap-2 pt-2'>
                                <div>
                                    <Greentick />
                                </div>
                                <p className='mb-0 ff_inter fs_sm fw-medium lh_160 text-white op_08'>Tiempo de creación 2 a 3 semanas</p>
                            </div>
                            <div data-aos="fade-down">
                                <div className='position-relative mt-4 pt-2 btn_white'>
                                    <button className='btn_acceso ff_inter fs_sm fw-bold lh_160 text-white'>Comprar ahora</button>
                                    <img src={Btnline} alt="Btnline" className='position-absolute btn_img' />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='silver_box1 mt-5'>
                    <div className='bg_luxury px-3 d-flex align-items-center justify-content-center position-relative'>
                        <div className='mw_419'>
                            <h2 data-aos="fade-down" className='mb-0 ff_anton fs_lg fw-normal text-white lh_120 text-center'>Luxury</h2>
                            <p data-aos="fade-down" className='mb-0 ff_inter fs_sm fw-medium text-white lh_160 text-center mt-3'>lleva tu experiencia de juego al siguiente nivel. Con todas las características de la versión Silver y la potencia adicional de la tecnología React.</p>
                            <h3 data-aos="fade-down" className='mb-0 ff_anton fs_xl fw-normal text-white lh_160 text-center mt-4 mb-3'>$9000</h3>
                            <div data-aos="fade-down" className='d-flex gap-2 mb-2'>
                                <div>
                                    <Greentick />
                                </div>
                                <div className='w-100 d-flex align-items-center justify-content-center'>
                                    <p className='mb-0 ff_inter fs_sm fw-medium text-white op_08 text-center mw_388'>Disponibles Payku, Pix, Depósitos en Euros, Criptomonedas, Cargas manuales</p>
                                </div>
                            </div>
                            <div data-aos="fade-down" className='d-flex gap-2 mb-2'>
                                <div>
                                    <Greentick />
                                </div>
                                <div className='w-100 d-flex align-items-center justify-content-center'>
                                    <p className='mb-0 ff_inter fs_sm fw-medium text-white op_08 text-center mw_388'>Control de RTP (controlás qué porcentaje pagar)</p>
                                </div>
                            </div>
                            <div data-aos="fade-down" className='d-flex gap-2 mb-2'>
                                <div>
                                    <Greentick />
                                </div>
                                <div className='w-100 d-flex align-items-center justify-content-center'>
                                    <p className='mb-0 ff_inter fs_sm fw-medium text-white op_08 text-center mw_388'>Bonos Editables, Happy Hours, Jackpots, Códigos Promocionales Regalo</p>
                                </div>
                            </div>
                            <div data-aos="fade-down" className='d-flex gap-2 mb-2'>
                                <div>
                                    <Greentick />
                                </div>
                                <div className='w-100 d-flex align-items-center justify-content-center'>
                                    <p className='mb-0 ff_inter fs_sm fw-medium text-white op_08 text-center mw_388'>Aplicación para Android y Windows de regalo.</p>
                                </div>
                            </div>
                            <div data-aos="fade-down" className='d-flex gap-2 mb-2'>
                                <div>
                                    <Greentick />
                                </div>
                                <div className='d-flex align-items-center justify-content-center w-100'>
                                    <p className='mb-0 ff_inter fs_sm fw-medium text-white op_08 text-center mw_388'>Tiempo de creación 2 a 3 semanas</p>
                                </div>
                            </div>
                            <div data-aos="fade-down" className='d-flex align-items-center justify-content-center mt-4'>
                                <div className='position-relative btn_lime'>
                                    <button className='btn_empezar ff_inter fs_sm fw-bold'>Comprar ahora</button>
                                    <img src={Btnemzor} alt="Btnemzor" className='position-absolute btn_emzorimg' />
                                </div>
                            </div>
                        </div>
                        <img data-aos="fade-up-left" src={Dice} alt="Dice" className='position-absolute red_dice d-lg-block d-none' />
                        <img data-aos="fade-up-left" src={HeartACard} alt="HeartACard" className='position-absolute heart_a_card d-lg-block d-none' />
                        <img data-aos="fade-down-right" src={Greencoin} alt="Greencoin" className='position-absolute green_coin d-lg-block d-none' />
                        <img data-aos="fade-down-right" src={Diamondacard} alt="Diamondacard" className='position-absolute diamond_a_card d-lg-block d-none' />
                    </div>
                </div>
                <div className='silver_box mt-5 mb-5'>
                    <Row className='align-items-center'>
                        <Col lg={5} className='d-flex justify-content-lg-center align-items-center'>
                            <div className='px-xl-0 px-4'>
                                <h3 data-aos="fade-down" className='mb-0 ff_anton fs_lg fw-normal lh_120 text-white'>Platinum</h3>
                                <p data-aos="fade-down" className='mb-0 ff_inter fs_sm fw-medium lh_160 text-white op_08 mw_lg_364 mt-2 pt-1'>Diseño totalmente personalizado. Contáctanos para un presupuesto.</p>
                                <h3 data-aos="fade-down" className='mb-0 ff_anton fs_xl fw-normal lh_120 text-white mt-4'>Consultar precio</h3>
                                <div data-aos="fade-down" className='d-flex gap-1 mt-2 pt-1'>
                                    <Greentick />
                                    <p className='mb-0 ff_inter fs_sm fw-normal fw-medium lh_160 text-white op_08'>Personalizable</p>
                                </div>
                                <div data-aos="fade-down">
                                    <div className='position-relative mt-4 pt-2 btn_white'>
                                        <button className='btn_acceso ff_inter fs_sm fw-bold lh_160 text-white'>Comprar ahora</button>
                                        <img src={Btnline} alt="Btnline" className='position-absolute btn_img' />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={7} data-aos="zoom-out-up" className='mt-lg-0 mt-4 pt-lg-0 pt-3 position-relative silver_ellipse1'>
                            <img src={Ludoimg} alt="Ludoimg" className='w-100 px-4 position-relative z-2' />
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default Nuestras;