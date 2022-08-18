import React from 'react';
import useFetch from '../../hooks/useFetch';
import './propertylist.css';

const PropertyList = () => {
    const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");
    return ( 
        <React.Fragment>
            <div className="propertyList">
                {loading ? ("loading is....") : (
                    <>
                        {data.map((item) => (
                            <div className="propertyListItem">
                                {/* <img src={item.photos[0]} alt="" className='propertyListImage'/>     */}
                                <img src={require('../../photos/image9.jpg')} alt="" className='propertyListImage'/>
                                <div className="propertyListDescription">
                                        <span className="name">{item.name}</span>
                                        <span className="city">{item.city}</span>
                                        <span className="price">starting From ${item.cheapestPrice}</span>
                                        {item.rating &&
                                            <div className="rating">
                                                <button className='button'>{item.rating}</button>
                                                <span>Excellent</span>
                                            </div>
                                         }    
                                </div>
                            </div>
                        ))}
                    </>
                )}
            </div>
        </React.Fragment>
     );
}
 
export default PropertyList;
