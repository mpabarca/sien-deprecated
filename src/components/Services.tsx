import Image from 'next/image'

const Services = () => {
    return (
        <section className="services container px-4 py-5" id="featured-3">
            <div className="d-flex flex-column">
                <div className="feature-group d-flex justify-content-center flex-wrap">
                    <div className='feature d-flex flex-row align-items-center justify-content-between mx-auto'>
                        <Image 
                            src={'/parking-animation-light.svg'}
                            alt='principal logo Sien services'
                            width={400}
                            height={200}
                            className='col-4'
                        />
                        <p className='col-6'>Servicio de Administración de Estacionamientos</p>
                    </div>
                    <div className='feature d-flex flex-row align-items-center justify-content-between mx-auto'>
                        <Image 
                            src={'/computer-chart-animation.svg'}
                            alt='principal logo Sien services'
                            width={400}
                            height={200}
                            className='col-4'
                        />
                        <p className='col-6'>Servicio de Registro de Clientes e información de demanda</p>
                    </div>
                    <div className='feature d-flex flex-row align-items-center justify-content-between mx-auto'>
                        <Image 
                            src={'/mobile-chart-animation.svg'}
                            alt='principal logo Sien services'
                            width={400}
                            height={200}
                            className='col-4'
                        />
                        <p className='col-6'>Impulso del negocio mediante promociones dirigidas</p>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Services;