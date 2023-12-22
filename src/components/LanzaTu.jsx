import React from 'react'
import { Container } from 'react-bootstrap';
import Btnemzor from '../assets/images/png/btn-emzor.png';
import Lanzatulayer from '../assets/images/png/lanzalayertu.png';

const LanzaTu = () => {
    return (
        <div className='py_lazatu'>
            <Container>
                <div className='lanza_tu_box px-lg-0 px-4'>
                    <div className='d-flex flex-column align-items-center justify-content-center bg_lanza '>
                        <h3 data-aos="fade-up" className='mb-0 ff_anton fs_lg fw-normal text-white lh_120 text-center z-3 position-relative'>Lanza tu propia plataforma en sólo 2 semanas</h3>
                        <div data-aos="fade-up" className='mt-4'>
                            <div className='btn_lime z-3 position-relative'>
                                <button className='btn_empezar ff_inter fs_sm fw-bold'>Leer más</button>
                                <img src={Btnemzor} alt="Btnemzor" className='position-absolute btn_emzorimg' />
                            </div>
                        </div>
                        {/* <img src={Lanzatulayer} alt="Lanzatulayer2" className='position-absolute z-1 opacity-75 w-100 top-0 h-100 start-0' /> */}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default LanzaTu