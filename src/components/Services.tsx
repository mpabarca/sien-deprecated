import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

const Services = () => {
    return (
        <section className="container px-4 py-5" id="featured-3">
            <div className="d-flex flex-column justify-content-center">
                <div className="feature d-flex flex-row align-items-center justify-content-between m-auto">
                    <Image 
                        src={'/parking-animation-light.svg'}
                        alt='principal logo Sien services'
                        width={400}
                        height={200}
                        className='col-4'
                    />
                    <p className='col-6'>Servicio de Administración de Estacionamientos</p>
                </div>
                <div className="feature d-flex flex-row align-items-center justify-content-between m-auto">
                    <Image 
                        src={'/computer-chart-animation.svg'}
                        alt='principal logo Sien services'
                        width={400}
                        height={200}
                        className='col-4'
                    />
                    <p className='col-6'>Servicio de Registro de Clientes e información de demanda</p>
                </div>
                <div className="feature d-flex flex-row align-items-center justify-content-between m-auto">
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
        </section>
    )
};

export default Services;