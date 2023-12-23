import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Razonesimg from '../assets/images/png/razonesimg.png';
import { Bulbimg, Profileimg } from './Iconimg'

const Razones = () => {
    return (
        <div className='razons_padding razon_ellipse1 position-relative'>
            <Container className='position-relative z-2'>
                <Row className='flex-lg-row flex-column-reverse'>
                    <Col lg={6} data-aos="fade-right" className='mt-lg-0 mt-4 br_16 pt-lg-0 pt-2 d-flex justify-content-center justify-content-lg-start'>
                        <img src={Razonesimg} alt="Razonesimg" className='w-100 br_16 object-fit-cover img_hov' />
                    </Col>
                    <Col lg={6} className='d-lg-flex flex-column justify-content-between align-items-start ps-lg-4'>
                        <h3 data-aos="fade-down" className='mb-0 ff_anton fs_xl fw-normal lh_120 text-white mb-4'>Más razones para elegirnos</h3>
                        <div data-aos="fade-down" className='razon_box cur_pointer'>
                            <div className='razon_padding_box d-flex'>
                                <Bulbimg />
                                <div>
                                    <h3 className='mb-0 ff_anton fs_lg fw-normal lh_130 text-white'>200</h3>
                                    <p className='mb-0 ff_inter fs_sm fw-medium lh_160 text-white'>Páginas creadas</p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-down" className='razon_box cur_pointer mt-4 mt-lg-2'>
                            <div className='razon_padding_box d-flex'>
                                <Profileimg />
                                <div>
                                    <h3 className='mb-0 ff_anton fs_lg fw-normal lh_130 text-white'>98%</h3>
                                    <p className='mb-0 ff_inter fs_sm fw-medium lh_160 text-white'>Clientes Satisfechas</p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-down" className='razon_box cur_pointer mt-4 mt-lg-2'>
                            <div className='razon_padding_box d-flex'>
                                <Bulbimg />
                                <div>
                                    <h3 className='mb-0 ff_anton fs_lg fw-normal lh_130 text-white'>200</h3>
                                    <p className='mb-0 ff_inter fs_sm fw-medium lh_160 text-white'>Divisas Disponibles</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Razones;