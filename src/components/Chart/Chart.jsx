import React,{useState,useLayoutEffect} from 'react'
import {fetchStateDailyData} from '../../api';
import styles from './Chart.module.css';
import {Line} from 'react-chartjs-2';

const Chart = ({stateOfBharat}) => {
    const [dailyData,setDailyData] = useState(null);
    useLayoutEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchStateDailyData(stateOfBharat))
        }
        fetchAPI();
    },[stateOfBharat]);
    let lineChart=null;
    if(dailyData){
        const {day,infected,recoveries,deaths} = dailyData;
     lineChart =  (<Line
        data={{
            labels: day.map((data ) => (data)),
            datasets:[
                {
                    data:  infected.map((data) => (data)),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill: true,
                },
                {
                    data: recoveries.map((data) => (data)),
                    label: 'Recovered',
                    borderColor: '#33FF33',
                    fill: true,
                },
                {
                    data: deaths.map((data) => (data)),
                    label: 'Deaths',
                    borderColor: '#FF3333',
                    backgroundColor: 'rgba(255 , 0, 0, 0.5)',
                    fill: true,
                }
                ],
        }}
        /> 

      
    )
    }
   
    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    )
};



export default Chart
