import React from 'react';
import styles from './index.module.css'
import {Grid} from "@material-ui/core";
import {Calendar} from "../../components/Calendar";
import Modal from "../../components/Modal/Modal";

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'Jule', 'August', 'September', 'October', 'November', 'December'];

const Home:React.FC = ():React.ReactElement => {
    return (
        <div className={styles.wrapper}>
            <Grid container style={{height: '100%'}}>
                <Grid  item xs={12} md={12} lg={7} xl={7}>
                    <div className={styles.leftSide}>
                        <div className={styles.textBlock}>
                            <h1>
                                Choose the day for the meeting
                            </h1>
                            <p>
                                We encourage you to book your appointment online. <br/>This will save you time.
                            </p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={12} lg={5} xl={5}>
                    <div className={styles.rightSide}>
                        <div className={styles.calendar}>
                            <Calendar monthNames={monthNames}/>
                        </div>
                    </div>
                </Grid>
            </Grid>
            <Modal monthNames={monthNames}/>
        </div>
    );
};

export default Home;