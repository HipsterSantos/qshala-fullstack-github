import React, {useState,useEffect,useContext} from 'react';
import SearchBar from '../Components/Search/SearchBar';
import ReposList from '../Components/Report/RepoDialog';
import {Spinner} from '../Components/Spiner';
import './main.css';
const fetcherContext = React.createContext({ })
const Main = ()=>{
    const [loading,setLoading]  = useState();
    return (
     <>
     <fetcherContext.Provider value={""}>
         <div className="main-content">
             <SearchBar/>
             {loading?<ReposList/>:
             <Spinner/>}
         </div>
     </fetcherContext.Provider>
     </>

    );

}
export default  Main;