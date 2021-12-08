import React,{useEffect,useState} from 'react';
import {Cards,Chart,StatePicker} from './components';
import styles from './App.module.css';
import { fetchData} from './api';

function App(){
    
    const [data,setData] = useState({});
    const [stateOfBharat,setStateOfBharat] = useState("");

    const handleChange = async (stateOfBharat) => {
        const fetchedData = await fetchData(stateOfBharat);
        setData(fetchedData);
        setStateOfBharat(stateOfBharat)
    }
    useEffect(async() => {
        const fetchedData = await fetchData("");
        setData(fetchedData);
    },[])
    return (
            <div className={styles.container}>
                 <Cards data={data}/>
                <StatePicker handleStateChange={handleChange} />
               <Chart stateOfBharat={stateOfBharat} /> 
            </div>
    );
}

export default App;

