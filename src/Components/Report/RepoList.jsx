import {useState,useEffect,useContext} from "react"; 
import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import {fetcherContext } from '../../Pages/Main';
import './repolist.css';
import {default as RepoDialog} from './RepoDialog';
export default function RepoList() {
  const value = useContext(fetcherContext);
  const [openDialog,setOpenDialog]  = useState(false);
  // console.log('Dialog status ',openDialog);
  return (
    <>
    <div className="qshala-grid-view">
      <li>Repos URI </li>
      <li>Author</li>
      <li>Company name</li>
    </div>
    <div onClick={()=>setOpenDialog(val=>!val)} className="table-body">
      <li className="li">Repos URI value </li>
      <li className="li">Author value</li>
      <li className="li">Company name value</li>
    </div>

   
   <RepoDialog canOpen={openDialog}/>
    </>
  );
}
