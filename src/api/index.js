import axios from 'axios';

const url = "https://api.rootnet.in/covid19-in/stats/history"

export const fetchData = async (givenState) => {
    const {data : {data} }= await axios.get(url);
    if(givenState!==""){
      const day= data[data.length - 1].day;
      const stateData = data[data.length -1].regional.filter((state) => state.loc==givenState);
      const infected= stateData[0].confirmedCasesForeign + stateData[0].confirmedCasesIndian;
      const recoveries= stateData[0].discharged;
      const deaths= stateData[0].deaths;
      const modifiedData={
        day,infected,recoveries,deaths
      }
      return (modifiedData);
    }
    else {
      const day = data[data.length - 1].day;
    const infected = data[data.length -1 ].summary.confirmedCasesIndian +  data[data.length -1 ].summary.confirmedCasesForeign;
    const recoveries = data[data.length -1].summary.discharged;
    const deaths = data[data.length - 1].summary.deaths;
    const modifiedData = {
             day,
             infected,
             recoveries,
             deaths
    }
   return modifiedData;}
}

export const fetchStateDailyData = async (stateOfBharat) => {
  if(stateOfBharat===""){
    const {data: {data}} = await axios.get(url);
    const day = data.map((state) => state.day);
    const infected = data.map((state) => (state.summary.confirmedCasesIndian));
    const recoveries = data.map((state) => state.summary.discharged);
    const deaths = data.map((state) => state.summary.deaths);
    const modifiedData={
      day,infected,recoveries,deaths
    }
    return modifiedData;
  }
  else{const {data: {data}} = await axios.get(url);
  const states= data.map((stateData) => (stateData.regional));
  const reqData= states.map((stateData) => (stateData.filter((state) => (state.loc == stateOfBharat))));
  const day = data.map((state) => (state.day));
  const infected = reqData.map((state) => state[0]?(state[0].totalConfirmed):0);
  const recoveries = reqData.map((state) => state[0]?(state[0].discharged):0);
  const deaths= reqData.map((state) => state[0]?(state[0].deaths):0);
  const modifiedData = {
    day,infected,recoveries,deaths
  }
  return modifiedData;
}
}

export const fetchStates = async () => {
  const {data : {data}} = await axios.get(url);
  const reqData= data[data.length - 1];
 const states = reqData.regional.map((state) => (state.loc));
   return (states);
}