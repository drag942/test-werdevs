import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import styles from './Modal.module.css'

import {setShowModal} from '../../redux/homePageReducer'
import {getIsShowModal, getSelectedDate} from "../../redux/homePageSelectors";

import CloseIcon from '@material-ui/icons/Close';
import {IconButton, Slide, TextField, Modal, Grid} from "@material-ui/core";


const dayNames = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']


interface ModalProps {
    monthNames: string[]
}

const ModalBlock:React.FC<ModalProps> = ({monthNames}) => {

    const dispatch = useDispatch();
    const isShowModal = useSelector(state => getIsShowModal(state));
    const selectedDate = useSelector(state => getSelectedDate(state));

    const handleClose = ():void => {
        dispatch(setShowModal(false));
    };

    return (
        <div>

            <Modal
                open={isShowModal}
                // @ts-ignore
                onClose={handleClose}
                className={styles.modal}

            >
                <div className={styles.container}>
                    <IconButton className={styles.icon} aria-label="close"  onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                    <div>
                        <Grid spacing={2} container>

                            <Grid item xs={12} md={6}>
                                <label>
                                    <p>Month</p>
                                    <input value={`${monthNames[selectedDate.getMonth()]}`}/>
                                </label>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <label>
                                    <p>Day</p>
                                    <input value={`${selectedDate.getDate()}th ${dayNames[selectedDate.getDay()]}`}/>
                                </label>
                            </Grid>
                        </Grid>
                    </div>
                </div>

            </Modal>
        </div>
    );
};

export default ModalBlock;