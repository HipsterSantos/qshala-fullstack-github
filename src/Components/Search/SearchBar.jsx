import react,{ useState, useEffect } from 'react'; 
import './SearchBar.css';
const SearchBar = ()=> { 
    return (<>
    <div>
        <div className="embeded-search">
            <input type="text" placeholder="Find out public repos of specific user ..."/>
            <button type="button">Search</button>
        </div>
    </div>
    </> );
}

export  default SearchBar ; 