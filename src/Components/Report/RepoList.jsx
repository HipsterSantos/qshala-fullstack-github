import {useState,useEffect,useContext} from "react"; 
import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import {fetcherContext } from '../../Pages/Main';
import './repolist.css';
import {default as RepoDialog} from './RepoDialog';
export default function RepoList(props) {
  let {repos,data} = props.data;
  console.log('all repos all data',repos,data);
  const value = useContext(fetcherContext);
  const [openDialog,setOpenDialog]  = useState(false);
  // console.log('Dialog status ',openDialog);
  const collection= [1,23,3,4,54,5];
  return (
    <>
    <div className="qshala-grid-view">
      <li>Number of repos</li>
      <li>Author</li>
      <li>Fallowers</li>
    </div>
    {collection.map(val=>(
    <div onClick={()=>setOpenDialog(val=>!val)} className="table-body">
      <li className="li">Repos URI value </li>
      <li className="li">Author value</li>
      <li className="li">Company name value</li>
    </div>
    
    )
    )}
   <RepoDialog singleData="" canOpen={openDialog}/>
    </>
  );
}
