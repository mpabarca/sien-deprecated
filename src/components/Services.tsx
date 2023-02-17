import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

const Services = () => {
    return (
        <section className="container px-4 py-5" id="featured-3">
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                <div className="feature col">
                    <Image 
                        src={'/parking-animation-light.svg'}
                        alt='principal logo Sien services'
                        width={400}
                        height={200}
                    />
                </div>
                <div className="feature col">
                    <Image 
                        src={'/computer-chart-animation.svg'}
                        alt='principal logo Sien services'
                        width={400}
                        height={200}
                    />
                </div>
                <div className="feature col">
                    <Image 
                        src={'/mobile-chart-animation.svg'}
                        alt='principal logo Sien services'
                        width={400}
                        height={200}
                    />
                </div>
            </div>
        </section>
    )
};

export default Services;