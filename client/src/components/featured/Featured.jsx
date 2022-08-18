import React from 'react';
import useFetch from '../../hooks/useFetch';

import './featured.css';


const Featured = () => {
    const {data, loading, error} = useFetch("/hotels/countByCity?cities=bogra,rajshahi,dhaka");
    // console.log(data);
    return ( 
        <React.Fragment>
            <div className="featured">
                {loading ? ("Loading Process......") :
                (<><div className="featuredItem">
                    <img src={require('../../photos/image1.jpg')} alt="" className='featuredImg' />                 
                    <div className="featuredTitle">
                        <h1>Bogra</h1>
                        <h2> {data[1]}Properties</h2>
                    </div>
                </div>
                <div className="featuredItem">
                    <img src={require('../../photos/image2.jpg')} alt="" className='featuredImg' />                 
                    <div className="featuredTitle">
                        <h1>Rajshahi</h1>
                        <h2>{data[2]} Properties</h2>
                    </div>
                </div>
                <div className="featuredItem">
                    <img src={require('../../photos/image3.jpg')} alt="" className='featuredImg' />                 
                    <div className="featuredTitle">
                        <h1>Dhaka</h1>
                        <h2>{data[3]} Properties</h2>
                    </div>
                </div>
                </>)}
            </div>
        </React.Fragment>
     );
}
 
export default Featured;