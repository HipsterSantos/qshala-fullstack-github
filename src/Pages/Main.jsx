import React, {useState,useEffect,useContext} from 'react';
import SearchBar from '../Components/Search/SearchBar';
import ReposList from '../Components/Report/RepoList';
import {Spinner} from '../Components/Spiner';
import './main.css';
import {default as  useFetch} from '../services/useFetch';

export const fetcherContext = React.createContext({ })
const Main = ()=>{
    const [loading,setLoading]  = useState(true);
    const [data,setData] = useState();
    const [repos,setRepos] = useState();
    const [value,setValue] = useState('');
    const GITHUB_URI = `https://api.github.com/users/${value}`;
    useEffect(()=>{
    fetch(GITHUB_URI)
    .then(val=>val.json())
    .then((val)=>{
        // setRepos(async c=> await fetch(val.repos_ulr));
        setData(val)
        setLoading(false);
    } );
    },[value]);
    if(data){
        
        let {repos_url,followers,login} = data; 
        fetch(repos_url).then(val=>val.json()).then(val=>setRepos(val));
        console.log('all repos ', repos);
    }
    console.log('current value is ',value);
    return (
     <>
     <fetcherContext.Provider value={value}>
         <div className="main-content">
             <SearchBar sendingToMain={e=>setValue(e)}/>
             {data?<ReposList data={{data,repos}}/>:
             <Spinner/>}
         </div>
     </fetcherContext.Provider>
     </>

    );

}
export default  Main;