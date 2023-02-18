import Image from 'next/image'

const Services = () => {
    return (
        <section className="services container px-1 py-5 col-xxl-12" id="featured-3">
            <div className="feature-group d-flex flex-row justify-content-between flex-wrap">
                <div className='feature d-flex flex-column align-items-center justify-content-between col-3'>
                    <Image 
                        src={'/parking-animation-light.svg'}
                        alt='parking of cars and a locator above a car'
                        width={400}
                        height={200}
                        className='col-8'
                    />
                    <p>Servicio de Administración de Estacionamientos</p>
                </div>
                <div className='feature d-flex flex-column align-items-center justify-content-between col-3'>
                    <Image 
                        src={'/computer-chart-animation.svg'}
                        alt='woman analyse charts and data'
                        width={400}
                        height={200}
                        className='col-8'
                    />
                    <p>Servicio de Registro de Clientes e información de demanda</p>
                </div>
                <div className='feature d-flex flex-column align-items-center justify-content-between col-3'>
                    <Image 
                        src={'/mobile-chart-animation.svg'}
                        alt='man shouting or social medias'
                        width={400}
                        height={200}
                        className='col-8'
                    />
                    <p>Impulso del negocio mediante promociones dirigidas</p>
                </div>
            </div>
        </section>
    )
};

export default Services;