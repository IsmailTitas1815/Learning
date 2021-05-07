import React from 'react';
import './Services.css';
import kuli from '../../../assets/images/kuli.png';
import call from '../../../assets/images/call.png';
import pool from '../../../assets/images/pool.png';
import khabar from '../../../assets/images/khabar.png';

const Services = props => {
    let services = null;

    switch (props.type) {
        case 'pool':
            services = <div><img src={pool} alt="pool" /> </div>
            break;
        case 'call':
            services = <div><img src={call} alt="call" /> </div>
            break;
        case 'kuli':
            services = <div><img src={kuli} alt="kuli" /> </div>
            break;
        case 'khabar':
            services = <div><img src={khabar} alt="khabar" /> </div>
            break;
        default:
            services = null;
            break;
    };

    return (
        <div className="Services">
            {services}
        </div>
    )
}


export default Services;