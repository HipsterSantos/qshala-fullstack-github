import React, {useState,useEffect,useContext} from 'react';
import SearchBar from '../Components/SearchBar';
import ReposList from '../Components/RepoList';
import {Spinner} from '../Components/Spiner';
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
       <h2>Welcome to github fetch user </h2>
     </fetcherContext.Provider>
     </>

    );

}
export default  Main;