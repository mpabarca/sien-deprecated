import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'

const Quote = () => {
    return (
        <section className='first-phrase container d-flex justify-content-center align-items-center mx-auto col-8'>
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
        </section>
    );
};

export default Quote;