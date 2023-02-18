import Image from 'next/image'

const Description = () => {
    return (
        <>
        <section className='description-title quote'>
            <div className="container d-flex flex-row align-items-center justify-content-between col-xxl-12 px-1">
                <div className='d-flex flex-column justify-content-start align-items-start col-6'>
                    <span className='first'>
                        ¿Por qué Sien Services?
                    </span>
                    <span className='second mt-5'>
                        Más transparente, seguro y rápido
                    </span>
                    <p className='explanation mt-3'>
                        Nuestros operarios y sistemas serán el primer punto de contacto de tu negocio o evento. Guiamos a tus clientes o invitados,
                        {' '}
                        estacionamos sus vehículos, te entregaremos información sobre la llegada y salida de ellos para que puedas tomar decisiones e
                        {' '}
                        impulsaremos tu negocio con publicidad y promociones dirigidas.
                    </p>
                </div>
                <Image 
                    src={'/parking-control.svg'}
                    alt='man controlling access of a car'
                    width={900}
                    height={400}
                    className='col-5'
                />
            </div>
        </section>
        <section className='description container px-1 py-5 d-flex'>
            <div className='client-card-group d-flex flex-row flex-wrap justify-content-between col-8'>
                <div className="card col-5">
                    <Image 
                        src={'/man-front-car.svg'}
                        alt='man in front of a car smiling and saying hi'
                        width={400}
                        height={200}
                        className="col-4 card-img-top"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Soy un comercio</h5>
                        <ul>
                            <li>
                                <p>
                                    1. Contáctanos a través de nuestro WhatsApp.
                                </p>
                            </li>
                            <li>
                                <p>
                                    2. Planificamos en conjunto el servicio para tu negocio.
                                </p>
                            </li>
                            <li>
                                <p>
                                    3. Establecemos los alcances del servicio.
                                </p>
                            </li>
                            <li>
                                <p>
                                    4. Comenzamos a operar.
                                </p>
                            </li>
                            <li>
                                <p>
                                    5. Te entregamos información de la demanda la toma de decisiones.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="card col-5">
                    <Image 
                        src={'/catering-service.svg'}
                        alt='two waitress in a catering event'
                        width={400}
                        height={200}
                        className="col-4 card-img-top"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Soy un evento</h5>
                        <ul>
                            <li>
                                <p>
                                    1. Contáctanos a través de nuestro WhatsApp.
                                </p>
                            </li>
                            <li>
                                <p>
                                    2. Dinos el lugar y cantidad de invitados que recibirás en tu evento.
                                </p>
                            </li>
                            <li>
                                <p>
                                    3. Establecemos el alcance.
                                </p>
                            </li>
                            <li>
                                <p>
                                    4. Recibimos, guiamos, estacionamos y cuidamos a tus invitados y sus vehículos.
                                </p>
                            </li>
                            <li>
                                <p>
                                    5. Te entregamos un informe de todos los vehículos e invitados registrados.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Description;