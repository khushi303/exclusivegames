import React from 'react'
import { Container } from 'react-bootstrap'

const Preguntas = () => {
    return (
        <div className='pt-lg-5 position-relative accordian_ellipse1'>
            <Container className='mt-4 position-relative z-2'>
                <h3 data-aos="fade-down" className='mb-0 ff_anton fs_xl fw-normal text-white text-uppercase text-center lh_120 mb-lg-5 mb-4'>Preguntas más frecuentes</h3>
                <div className="accordion d-flex align-items-center justify-content-center flex-column" id="accordionExample">
                    <div data-aos="fade-down" className="accordion-item w-100">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <p className='mb-0 ff_anton fs_md fw-normal text-white lh_130'>¿Cuáles son las ventajas de elegir Juegos Exclusivos para mis plataformas de juegos?</p>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p className='mb-0 ff_inter fs_sm fw-medium lh_160 text-white op_08 mw_880'>
                                    En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-down" className="accordion-item w-100">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <p className='mb-0 ff_anton fs_md fw-normal text-white lh_130'>¿Cómo garantizan la seguridad de las operaciones en sus juegos?</p>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p className='mb-0 ff_inter fs_sm fw-medium lh_160 text-white op_08 mw_880'>
                                    En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-down" className="accordion-item w-100">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <p className='mb-0 ff_anton fs_md fw-normal text-white lh_130'>¿Cómo garantizan la seguridad de las operaciones en sus juegos?</p>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p className='mb-0 ff_inter fs_sm fw-medium lh_160 text-white op_08 mw_880'>
                                    En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-down" className="accordion-item w-100">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                <p className='mb-0 ff_anton fs_md fw-normal text-white lh_130'>¿Cómo garantizan la seguridad de las operaciones en sus juegos?</p>
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p className='mb-0 ff_inter fs_sm fw-medium lh_160 text-white op_08 mw_880'>
                                    En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-down" className="accordion-item w-100">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                <p className='mb-0 ff_anton fs_md fw-normal text-white lh_130'>¿Qué métodos de pago aceptan?</p>


                            </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p className='mb-0 ff_inter fs_sm fw-medium lh_160 text-white op_08 mw_880'>
                                    En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-down" className="accordion-item w-100">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                <p className='mb-0 ff_anton fs_md fw-normal text-white lh_130'>¿Puedo probar sus juegos antes de comprometerme?</p>
                            </button>
                        </h2>
                        <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p className='mb-0 ff_inter fs_sm fw-medium lh_160 text-white op_08 mw_880'>
                                    En Exclusive Games, ofrecemos experiencias únicas y personalizadas, respaldadas por más de 15 años de dedicación al desarrollo de multiplataformas para juegos de azar.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Preguntas