import { format } from 'date-fns';
import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import { useLocation } from 'react-router';
import Header from './../../components/header/Header';
import Navbar from './../../components/navbar/Navbar';
import SearchItem from './../../components/searchItem/SearchItem';
import useFetch from './../../hooks/useFetch';
import './list.css';



const List = () => {

  const location = useLocation();
  // const [destination, setDestination] = useState(location.state.destination);
  // const [date, setDate] = useState(location.state.dates);
  // const [openDate, setOpenDate] = useState(false);
  // const [options, setOptions] = useState(location.state.options);
  // const [min, setMin] = useState(undefined);
  // const [max, setMax] = useState(undefined);

  


    // const location = useLocation();
    // problem in location value
    const [destination,setDestination] = useState(location.state.destination);
    const [date,setDate] = useState(location.state.date);
    // const [date,setDate] = useState([
    //     {
    //       startDate: new Date(),
    //       endDate: new Date(),
    //       key: 'selection'
    //     }
    //   ]);
    const [openDate,setOpenDate] = useState(false);
    // const [options,setOptions] = useState({adult: 1,children: 0, room: 1,}); 
    const [options, setOptions] = useState(location.state.options);
    const [min, setMin] = useState(undefined);
    const [max, setMax] = useState(undefined);

    const { data, loading, error, reFetch } = useFetch(`/hotels?city=${destination}&min=${min || 0 }&max=${max || 999}`);

    
    const handleClick = () => {
      reFetch();
    };

    // console.log(location);

    return ( 
        <React.Fragment>
            <Navbar/>
            <Header />
            <div className="listContainer">
                <div className="listWrapper">
                    {/* <div className="listSearch">
                        <h2 className="">Search</h2>
                        <div className="item">
                            <label>Destination</label>
                            <input type="text" placeholder={destination} />
                        </div>
                        <div className="item">
                            <label>Check-in Date</label>
                        
                            <span className="headerSearchText" onClick={() => setOpenDate(!openDate)}>
                            {`${format(date[0].startDate, "dd/MM/yyyy")}`} to ${`${format(date[0].endDate, "dd/MM/yyyy")}`}
                             </span>
                            {openDate && (
                             <DateRange
                                editableDateInputs={true}
                                onChange={item => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                className="date"
                                minDate={new Date()}
                            />
                            )}
                        </div>
                        <div className="item">
                            <label htmlFor="">Options</label>
                            <div className="options">
                                <div className="optionItem">
                                    <span>Min price <small>per night</small></span>
                                    <input type="number" className='optionItemInput' />
                                </div>
                                <div className="optionItem">
                                    <span>Max price <small>per night</small></span>
                                    <input type="number" className='optionItemInput' />
                                </div>
                                <div className="optionItem">
                                    <span className='optionItemText'>Adult</span>
                                    <input type="number" className='optionItemInput' min={1} placeholder={options.adult} />
                                </div>
                                <div className="optionItem">
                                    <span className='optionItemText'>Children</span>
                                    <input type="number" className='optionItemInput' min={0} placeholder={options.children} />
                                </div>
                                <div className="optionItem">
                                    <span className='optionItemText'>Room</span>
                                    <input type="number" className='optionItemInput' min={1} placeholder={options.room} />
                                </div>
                            </div>
                        </div>
                        <button className="button">Search</button>
                    </div> */}

                    {/* copy list search */}
                    
                {/* <div className="listSearch">
                  <h1 className="lsTitle">Search</h1>
                  <div className="lsItem">
                    <label>Destination</label>
                    <input placeholder={destination} type="text" />
                  </div>
                  <div className="lsItem">
                    <label>Check-in Date</label>
                    <span onClick={() => setOpenDate(!openDate)}>{`${format(
                      date[0].startDate,
                      "MM/dd/yyyy"
                    )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                    {openDate && (
                      <DateRange
                        onChange={(item) => setDate([item.selection])}
                        minDate={new Date()}
                        ranges={date}
                      />
                    )}
                  </div>
                  <div className="lsItem">
                    <label>Options</label>
                    <div className="lsOptions">
                      <div className="lsOptionItem">
                        <span className="lsOptionText">
                          Min price <small>per night</small>
                        </span>
                        <input type="number" onChange={(e) => setMin(e.target.value)} className="lsOptionInput" />
                      </div>
                      <div className="lsOptionItem">
                        <span className="lsOptionText">
                          Max price <small>per night</small>
                        </span>
                        <input type="number" onChange={(e) => setMax(e.target.value)} className="lsOptionInput" />
                      </div>
                      <div className="lsOptionItem">
                        <span className="lsOptionText">Adult</span>
                        <input
                          type="number"
                          min={1}
                          className="lsOptionInput"
                          placeholder={options.adult}
                        />
                      </div>
                      <div className="lsOptionItem">
                        <span className="lsOptionText">Children</span>
                        <input
                          type="number"
                          min={0}
                          className="lsOptionInput"
                          placeholder={options.children}
                        />
                      </div>
                      <div className="lsOptionItem">
                        <span className="lsOptionText">Room</span>
                        <input
                          type="number"
                          min={1}
                          className="lsOptionInput"
                          placeholder={options.room}
                        />
                      </div>
                    </div>
                  </div>
                  <button onClick={handleClick}>Search</button>
                </div>
                <div className="listResult">
                    {loading ? (
                        "loading"
                      ) : (
                        <>
                          {data.map((item) => (
                            <SearchItem item={item} key={item._id} />
                          ))}
                        </>
                      )}
                </div>  */}

            <div className="listSearch">
              <h1 className="lsTitle">Search</h1>
              <div className="lsItem">
                <label>Destination</label>
                <input placeholder={destination} type="text" />
              </div>
              <div className="lsItem">
                <label>Check-in Date</label>
                <span onClick={() => setOpenDate(!openDate)}>{`${format(
                  date[0].startDate,
                  "MM/dd/yyyy"
                )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                {openDate && (
                  <DateRange
                    onChange={(item) => setDate([item.selection])}
                    minDate={new Date()}
                    ranges={date}
                  />
                )}
              </div>
              <div className="lsItem">
                <label>Options</label>
                <div className="lsOptions">
                  <div className="lsOptionItem">
                    <span className="lsOptionText">
                      Min price <small>per night</small>
                    </span>
                    <input
                      type="number"
                      onChange={(e) => setMin(e.target.value)}
                      className="lsOptionInput"
                    />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">
                      Max price <small>per night</small>
                    </span>
                    <input
                      type="number"
                      onChange={(e) => setMax(e.target.value)}
                      className="lsOptionInput"
                    />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Adult</span>
                    <input
                      type="number"
                      min={1}
                      className="lsOptionInput"
                      placeholder={options.adult}
                    />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Children</span>
                    <input
                      type="number"
                      min={0}
                      className="lsOptionInput"
                      placeholder={options.children}
                    />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Room</span>
                    <input
                      type="number"
                      min={1}
                      className="lsOptionInput"
                      placeholder={options.room}
                    />
                  </div>
                </div>
              </div>
              <button onClick={handleClick}>Search</button>
            </div>
            <div className="listResult">
              {loading ? (
                "loading"
              ) : (
                <>
                  {data.map((item) => (
                    <SearchItem item={item} key={item._id} />
                  ))}
                </>
              )}
            </div>
      </div>

    </div>
        </React.Fragment>
     );
}
 
export default List;