// import { React } from 'react';
import React from 'react';
import useFetch from '../../hooks/useFetch';
import './featuredProperty.css';

const FeaturedProperty = () => {
    const {data, loading, error} = useFetch("/hotels/countByType");
    const images = [
        require('../../photos/image5.jpg'),require('../../photos/image6.jpg'),require('../../photos/image7.jpg'),require('../../photos/image8.jpg'),require('../../photos/image9.jpg')
    ]
    return ( 
        <React.Fragment>
            <div className="featuredProperty">
                { loading ? ("loading") :
                (<>
                {
                    data && images.map((img,i) => (
                        <div className="featuredPropertyItem" key={i}>
                             <img src={img} alt="" className='featuredPropertyImg' />
                             <div className="featuredPropertyDescription">
                                <h2>{data[i]?.type}</h2>
                                <h4>{data[i]?.count} {data[i]?.type}</h4>
                            </div>
                        </div>
                    ))
                }
                </>
                )

                }
            </div>

        </React.Fragment>   
     );
}
 
export default FeaturedProperty;