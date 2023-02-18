import Image from 'next/image'
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 mt-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <Link href="/" className="d-flex align-items-center mb-3 me-2 mb-md-0 text-dark text-decoration-none">
                        <Image 
                            src={'/logo_512px.png'}
                            alt='principal logo Sien services'
                            width={100}
                            height={50}
                        />
                    </Link>
                    <span className="mb-3 mb-md-0 text-muted">&copy; 2023 Company, Inc</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3">
                        <Link href="https://www.instagram.com/sienservices_com/" className="text-muted">
                            <FontAwesomeIcon
                                icon={faInstagram}
                                style={{ fontSize: 25 }}
                                className='align-self-start'
                            />
                        </Link>
                    </li>
                    <li className="ms-3">
                        <Link href="https://www.linkedin.com/company/sien-services/" className="text-muted">
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                style={{ fontSize: 25 }}
                                className='align-self-start'
                            />
                        </Link>
                    </li>
                    <li className="ms-3">
                        <Link href="https://walink.co/af7c2b" className="text-muted">
                            <FontAwesomeIcon
                                icon={faWhatsapp}
                                style={{ fontSize: 25 }}
                                className='align-self-start'
                            />
                        </Link>
                    </li>
                </ul>
            </footer>
            <Link href="https://mpabarca.dev/" className="text-muted text-decoration-none d-flex align-items-center justify-content-center mb-5">   
                <span className="mb-3 mb-md-0 text-muted">by Maria Paz Abarca</span>
            </Link>
        </div>
    );
};

export default Footer;