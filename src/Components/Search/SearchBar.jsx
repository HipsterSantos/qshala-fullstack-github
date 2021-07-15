import react,{ useState, useEffect,useRef} from 'react'; 
import './SearchBar.css';
const SearchBar = ({sendingToMain})=> { 
    const [toSearch,setToSearch] = useState('');
    const makeFetch = ()=>{
        sendingToMain(toSearch)
    }
    return (<>
    <div>
        <div className="embeded-search">
            <input onChange={e=>setToSearch(e.target.value)}type="text" placeholder="Find out public repos of specific user ..."/>
            <button onClick={makeFetch} type="button">Search</button>
        </div>
    </div>
    </> );
}

export  default SearchBar ; 