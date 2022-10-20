import React, {useState} from 'react';
import './Banner.css';
import Search from './Search';

const Banner = () => {
    const [showSearch, setShowSearch] = useState(false)

    return (
        <div className='banner'>
            <div className='banner__search'>
                {showSearch && <Search />}
                <button onClick={()=> setShowSearch(!showSearch)} variant='outlined' className='banner__searchButton'>Search Dates</button>
            </div>
            <div className='banner__info'>
                <h1>Get Out and Stretch Your imagination</h1>
                <h5>
                    Plan a different kind of getaway to uncover the hidden gems near you.
                </h5>
                <button variant='outlined'>Explore Nearby</button>
            </div>
        </div>
    )
}

export default Banner