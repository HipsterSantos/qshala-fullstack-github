import {useState,useEffect,useContext} from "react"; 
import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import {fetcherContext } from '../../Pages/Main';
import './repolist.css';

export default function RepoList() {
  const value = useContext(fetcherContext);
  return (
    <div className="qshala-grid-view" style={{height: 400}}>
      <li>Repos URI </li>
      <li>Author</li>
      <li>Company name</li>
    </div>
  );
}
