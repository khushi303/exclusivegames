import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Logo from '../assets/images/png/logo.png';
import { Insta, Facebook, Linkdin, Mail, Phone } from './Iconimg';

const Footer = () => {
    return (
        <div className='bg-black pt-5 position-relative ellipse_footer1 overflow-hidden'>
            <Container className='pb-5 position-relative z-2'>
                <Row>
                    <Col lg={4} className=''>
                        <img src={Logo} alt="Logo" className='mw_210 w-100 cur_pointer' />
                        <p className='mb-0 ff_inter fs_sm fw-medium text-white op_08 lh_160 mw_369 mt-3'>En Exclusive Games somos un equipo apasionado de personas dedicadas al desarrollo de multiplataformas para juegos de azar</p>
                        <div className='pt-4 d-flex gap-2 align-items-center'>
                            <Insta />
                            <Facebook />
                            <Linkdin />
                        </div>
                    </Col>
                    <Col lg={8} className='mt-lg-0 mt-4 pt-lg-0 pt-2'>
                        <Row>
                            <Col lg={4} sm={6} className='col-12'>
                                <ul className='mb-0 list-unstyled'>
                                    <li className='ff_inter fs_sm fw-bold text-white lh_160 pb-2 mb-1'>Menú principal</li>
                                    <li className='mb-2'><a href="" className='ff_inter fs_sm fw-medium text-white op_08 lh_120 footer_link position-relative'>Hogar</a></li>
                                    <li className='mb-2'><a href="" className='ff_inter fs_sm fw-medium text-white op_08 lh_120 footer_link position-relative'>Misión</a></li>
                                    <li className='mb-2'><a href="" className='ff_inter fs_sm fw-medium text-white op_08 lh_120 footer_link position-relative'>Tragamonedas</a></li>
                                    <li className='mb-2'><a href="" className='ff_inter fs_sm fw-medium text-white op_08 lh_120 footer_link position-relative'>Por qué elegirnos</a></li>
                                    <li><a href="" className='ff_inter fs_sm fw-medium text-white op_08 lh_120 footer_link position-relative'>Ofertas</a></li>
                                </ul>
                            </Col>
                            <Col lg={4} sm={6} className='col-12 pt-sm-0 pt-4'>
                                <ul className='mb-0 list-unstyled'>
                                    <li className='ff_inter fs_sm fw-bold text-white lh_160 pb-2 mb-1'>Atención al cliente</li>
                                    <li className='mb-2'><a href="" className='ff_inter fs_sm fw-medium text-white op_08 lh_120 footer_link position-relative'>¿Necesitas ayuda?</a></li>
                                    <li className='mb-2'><a href="" className='ff_inter fs_sm fw-medium text-white op_08 lh_120 footer_link position-relative'>política de privacidad</a></li>
                                    <li className='mb-2'><a href="" className='ff_inter fs_sm fw-medium text-white op_08 lh_120 footer_link position-relative'>Términos de servicios</a></li>
                                </ul>
                            </Col>
                            <Col lg={4} sm={6} className='col-12 pt-lg-0 pt-4'>
                                <ul className='mb-0 list-unstyled'>
                                    <li className='ff_inter fs_sm fw-bold text-white lh_160 pb-2 mb-1'>Ponerse en contacto</li>
                                    <li className='mb-2'><Mail /> <a href="" className='ff_inter fs_sm fw-medium text-white op_08 lh_120 text-nowrap footer_link position-relative'>juegosexclusivos@gmail.com</a></li>
                                    <li className='mb-2'><Phone /> <a href="" className='ff_inter fs_sm fw-medium text-white op_08 lh_120 footer_link position-relative'>(101)342-7873</a></li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <div className='border_footer py-3'>
                <p className='mb-0 ff_inter fs_sm fw-medium lh_160 text-white opacity-50 text-center'>© Juegos exclusivos - Todos los derechos reservados 2023</p>
            </div>
        </div>
    )
}

export default Footer