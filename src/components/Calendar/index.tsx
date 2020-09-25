import React, {useState} from 'react';
import classnames from 'classnames';
import styles from './index.module.css'
import {useDispatch} from "react-redux";

import * as calendar from './calendar';
import {IconButton} from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIcon from '@material-ui/icons/ArrowForwardIos';
import {setSelectedDate, setShowModal} from "../../redux/homePageReducer";


interface CalendarProps {
    monthNames: string[]
}

const weekDayNames = ['M', 'T', 'W', 'T' , 'F', 'S', 'S'];

export const Calendar:React.FC<CalendarProps> = ({monthNames}) => {

    const dispatch = useDispatch();

    const currentDate = new Date();

    const [date, setDate] = useState(currentDate);



    const getYear = () => {
        return date.getFullYear();
    };

    const getMonth = () => {
        return date.getMonth();
    };

    const handlePrevMonthButtonClick = () => {
        const date = new Date(getYear(), getMonth() - 1);

       setDate(date);
    };

    const handleNextMonthButtonClick = () => {
        const date = new Date(getYear(), getMonth() + 1);

        setDate(date);
    };


    const handleDayClick = (date:Date) => {
        dispatch(setSelectedDate(date));
        dispatch(setShowModal(true));

    };


    const monthData = calendar.getMonthData(getYear(), getMonth());


    return (
            <div className={styles.calendar}>
                <header>
                    <IconButton style={{color: 'white'}}  onClick={handlePrevMonthButtonClick}><ArrowBackIcon/></IconButton>
                    <div>
                        <span>{monthNames[getMonth()]}</span>
                        <span>{getYear()}</span>
                    </div>
                    <IconButton style={{color: 'white'}} onClick={handleNextMonthButtonClick}><ArrowForwardIcon/></IconButton>
                </header>

                <table>


                    <tbody>
                    {monthData.map((week:{date: Date, isDisabled: Boolean} [], index:number) =>
                        <tr key={index} className="week">
                            {week.map((day:{date: Date, isDisabled: Boolean}, index:number) => !day.isDisabled ?
                                <td
                                    key={index}
                                    className={classnames(styles.day, {
                                        [styles.today]: calendar.areEqual(day.date, currentDate),
                                    })}
                                    onClick={() => handleDayClick(day.date)}
                                >{day.date.getDate()}</td>
                                :
                                <td
                                    key={index}
                                    className={classnames(styles.day, styles.disabledDay)}
                                >{day.date.getDate()}</td>
                            )}
                        </tr>
                    )}
                    </tbody>
                </table>
                <footer className={styles.weekdays}>
                    {weekDayNames.map((name:any, index) =>
                        <span key={index}>{name}</span>
                    )}
                </footer>
            </div>
        );
}