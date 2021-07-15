import React, {useState,useEffect,useContext} from 'react';
import SearchBar from '../Components/Search/SearchBar';
import ReposList from '../Components/Report/RepoList';
import {Spinner} from '../Components/Spiner';
import './main.css';
export const fetcherContext = React.createContext({ })
const Main = ()=>{
    const [loading,setLoading]  = useState(true);
    const [value,setValue] = useState();
    console.log('current value is ',value);
    return (
     <>
     <fetcherContext.Provider value={value}>
         <div className="main-content">
             <SearchBar sendingToMain={e=>setValue(e)}/>
             {loading?<ReposList/>:
             <Spinner/>}
         </div>
     </fetcherContext.Provider>
     </>

    );

}
export default  Main;