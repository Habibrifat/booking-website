import { faCaretSquareRight, faHandRock, faMoon, faSquareCheck } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './service.css';

const Service = () => {
    return ( 
        <React.Fragment>
            <section className='services sec-width' id = "services">
                <div className="ServiceTitle">
                    <h2>services</h2>
                </div>
                <div className="services-container">
                    <article className='service'>
                        <div className="service-icon">
                            <FontAwesomeIcon icon={faMoon} />
                        </div>
                        <div className = "service-content">
                            <h2>Food Service/ Food Runner</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias blanditiis tempore officia accusamus asperiores. Illum maxime eligendi necessitatibus laudantium iste nisi pariatur doloremque ut illo similique voluptatum enim distinctio perferendis, ad ipsam aspernatur omnis rem autem ex, reiciendis corporis suscipit!</p>
                        <button type = "button" className = "btn">Know More</button>
                    </div>
                    </article>
                    <article className='service'>
                        <div className="service-icon">
                            <FontAwesomeIcon icon={faHandRock} />
                        </div>
                        <div className = "service-content">
                            <h2>Refreshment</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias blanditiis tempore officia accusamus asperiores. Illum maxime eligendi necessitatibus laudantium iste nisi pariatur doloremque ut illo similique voluptatum enim distinctio perferendis, ad ipsam aspernatur omnis rem autem ex, reiciendis corporis suscipit!</p>
                        <button type = "button" className = "btn">Know More</button>
                    </div>
                    </article>
                    <article className='service'>
                        <div className="service-icon">
                                <FontAwesomeIcon icon={faCaretSquareRight}/>
                        </div>
                        <div className = "service-content">
                            <h2>customers</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias blanditiis tempore officia accusamus asperiores. Illum maxime eligendi necessitatibus laudantium iste nisi pariatur doloremque ut illo similique voluptatum enim distinctio perferendis, ad ipsam aspernatur omnis rem autem ex, reiciendis corporis suscipit!</p>
                        <button type = "button" className = "btn">Know More</button>
                    </div>
                    </article>
                    <article className='service'>
                        <div className="service-icon">
                            <FontAwesomeIcon icon={faSquareCheck} />
                        </div>
                        <div className = "service-content">
                            <h2>Room Security</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias blanditiis tempore officia accusamus asperiores. Illum maxime eligendi necessitatibus laudantium iste nisi pariatur doloremque ut illo similique voluptatum enim distinctio perferendis, ad ipsam aspernatur omnis rem autem ex, reiciendis corporis suscipit!</p>
                        <button type = "button" className = "btn">Know More</button>
                    </div>
                    </article>
                </div>
            </section>
        </React.Fragment>
     );
}
 
export default Service;