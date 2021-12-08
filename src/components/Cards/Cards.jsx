import React from 'react';
import CountUp from 'react-countup';
import styles from './Cards.module.css';
import cx from 'classnames';
import {Grid,CardContent,Typography,Card} from '@material-ui/core';
const Cards = ({data}) => {
    const infected= data.infected;
    const recoveries = data.recoveries;
    const deaths = data.deaths;
    console.log(data);
    if(!infected)return '...Loading';
    return (
     <div className={styles.container}>
        <Grid container justify="center" spacing={3}> 
            <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Infected</Typography>
                    <Typography variant="h5">
                       <CountUp start={0} end={infected} duration={2.5} separator="," />
                    </Typography>
                    <Typography color="textSecondary">{data.day}</Typography>
                    <Typography variant="body2">Number of infected people with COVID-19.</Typography>
              </CardContent>
            </Grid>
            <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Recoveries</Typography>
                    <Typography variant="h5">
                       <CountUp start={0} end={recoveries} duration={2.5} separator=","></CountUp>
                    </Typography>
                    <Typography color="textSecondary">{data.day}</Typography>
                    <Typography variant="body2">Number of people recovered from COVID-19.</Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
                 <CardContent>
                    <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                    <Typography variant="h5">
                        <CountUp start={0} end={deaths} duration={2.5} separator=","></CountUp>
                    </Typography>
                    <Typography color="textSecondary">{data.day}</Typography>
                    <Typography variant="body2">Number of deaths due to COVID-19.</Typography>
                </CardContent>
            </Grid>
        </Grid>
    </div>
    )
}

export default Cards;
