import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Logo from '../assets/images/png/logo.png';
import Btnline from '../assets/images/png/btn-line.png';
import Btnemzor from '../assets/images/png/btn-emzor.png';

const Header = () => {
    const [show, setshow] = useState(true)
    if (show === false) {
        document.body.classList.add("overflow_hidden")
    } else {
        document.body.classList.remove("overflow_hidden")
    }
    return (
        <div className='bg_header min_lg_100vh d-flex flex-column'>
            <nav className='py-3 bg_dark position-relative z-3'>
                <Container>
                    <div className='d-flex align-items-center justify-content-between'>
                        <img src={Logo} alt="Logo" className='mw_210 w-100' />
                        <ul className={`${show ? 'mb-0 list-unstyled left_100' : 'mb-0 list-unstyled left_0'} nav_bar`}>
                            <li onClick={() => setshow(!show)}><a href="#hogar" className='ff_inter fs_sm fw-normal text-white op_08 link_hov lh_160 position-relative footer_link'>Hogar</a></li>
                            <li onClick={() => setshow(!show)}><a href="#Misión" className='ff_inter fs_sm fw-normal text-white op_08 link_hov lh_160 position-relative footer_link'>Misión</a></li>
                            <li onClick={() => setshow(!show)}><a href="#Tragamonedas" className='ff_inter fs_sm fw-normal text-white op_08 link_hov lh_160 position-relative footer_link'>Tragamonedas</a></li>
                            <li onClick={() => setshow(!show)}><a href="#Por" className='ff_inter fs_sm fw-normal text-white op_08 link_hov lh_160 position-relative footer_link'>Por qué elegirnos</a></li>
                            <li onClick={() => setshow(!show)}><a href="#Ofertas" className='ff_inter fs_sm fw-normal text-white op_08 link_hov lh_160 position-relative footer_link'>Ofertas</a></li>
                            <li className='position-relative d-lg-none d-block'>
                                <button className='btn_acceso ff_inter fs_sm fw-bold lh_160 text-white'>Acceso</button>
                                <img src={Btnline} alt="Btnline" className='position-absolute btn_img' />
                            </li>                            </ul>
                        <div className='position-relative btn_white cur_pointer d-lg-block d-none'>
                            <button className='btn_acceso ff_inter fs_sm fw-bold lh_160 text-white'>Acceso</button>
                            <img src={Btnline} alt="Btnline" className='position-absolute btn_img' />
                        </div>
                        <div onClick={() => setshow(!show)} className={`${show ? "" : "cross"} navicon`}>
                            <span className='crl-1'></span>
                            <span className='crl-2'></span>
                            <span className='crl-3'></span>
                        </div>
                    </div>
                </Container>
            </nav>
            <Container id='hogar' className='d-flex flex-column align-items-center justify-content-center flex-grow-1 py-xl-0 py_header'>
                <h2 data-aos="fade-up" className='mb-0 ff_anton fs_2xl fw-normal text-white mw_505 text-uppercase lh_120 mb-3 text-center'>Exclusive Games. Pasión por ganar</h2>
                <p data-aos="fade-up" className='mb-0 ff_inter fs_sm fw-semibold text-white text-center lh_160 op_08 mw-727 mb-4'>
                    En Exclusive Games somos un equipo apasionado de personas dedicados al desarrollo de multiplataformas para juegos de azar. A lo largo de nuestra vida consumimos todo tipo de juegos hasta que un día decidimos crear los propios.
                </p>
                <div data-aos="fade-up" className='position-relative btn_lime'>
                    <button className='tr_linear btn_empezar ff_inter fs_sm fw-bold'>Empezar</button>
                    <img src={Btnemzor} alt="Btnemzor" className='position-absolute btn_emzorimg' />
                </div>
            </Container>
        </div>
    )
}

export default Header;