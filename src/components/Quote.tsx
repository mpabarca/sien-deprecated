import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'

const Quote = () => {
    return (
        <section className='quote'>
            <div className="container d-flex justify-content-center align-items-center col-xxl-12 px-1">
                <FontAwesomeIcon
                    icon={faQuoteLeft}
                    style={{ fontSize: 80 }}
                    className='align-self-start'
                />
                <span>
                    Aumenta tu capacidad de estacionamiento, entrega mayor seguridad a tus clientes e impulsa tu negocio mediante nuestro servicio de estacionamiento.
                </span>
                <FontAwesomeIcon
                    icon={faQuoteRight}
                    style={{ fontSize: 80 }}
                    className='align-self-end'
                />
            </div>
        </section>
    );
};

export default Quote;