import React, {useState,useEffect,useContext} from 'react';
import SearchBar from '../Components/SearchBar';
import ReposList from '../Components/RepoList';
const fetcherContext = React.createContext({ })
const Main = ()=>{
    return (
     <>
     <fetcherContext.Provider value={""}>
         <div className="main-content">
             <SearchBar/>
             <ReposList/>
         </div>
       <h2>Welcome to github fetch user </h2>
     </fetcherContext.Provider>
     </>

    );

}
export default  Main;