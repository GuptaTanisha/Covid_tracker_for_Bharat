import React,{useState,useEffect} from 'react';
import styles from './StatePicker.module.css';
import {NativeSelect,FormControl,CssBaseline} from '@material-ui/core';
import { fetchStates } from '../../api';

const StatePicker = ({handleStateChange}) => {
    const [fetchedStates,setFetchedStates] = useState([]);

    const fetchAPI = async () => {
        setFetchedStates(await fetchStates());
    }
    fetchAPI();
    return (
        <CssBaseline>
       <FormControl className={styles.formControl}>
           <NativeSelect variant="outlined" default="" onChange={(e) => handleStateChange(e.target.value)}>
               <option value="">Bharat</option>
               {fetchedStates.map((state,id) => <option value={state} key={id}>{state}</option>)}
           </NativeSelect>
       </FormControl>
       </CssBaseline>
    )
}

export default StatePicker;
