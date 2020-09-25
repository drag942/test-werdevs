import React from 'react';
import styles from './index.module.css'
import {Grid, Hidden} from "@material-ui/core";
import logo from '../../assets/logo.svg'
import MobileNavBar from "./MobileNavBar/MobileNavBar";
import {NavLink} from "react-router-dom";

const Header = ():React.ReactElement => {

    return (
        <header className={styles.header}>
            <Grid container>
                <Grid xs={6}>
                    <img alt={'logo'} className={styles.logo} src={logo}/>
                </Grid>
                <Grid xs={6}>
                    <Hidden smDown>
                        <nav className={styles.menu}>
                            <li className={styles.menuItem}>
                                <NavLink activeClassName={styles.activeLink} className={styles.link} to={'/home'}>Home</NavLink>
                            </li>
                            <li className={styles.menuItem}>
                                <NavLink activeClassName={styles.activeLink}  className={styles.link} to={'/about'}>{'About us'}</NavLink>
                            </li>
                        </nav>
                    </Hidden>
                    <Hidden mdUp>
                        <MobileNavBar/>
                    </Hidden>
                </Grid>
            </Grid>
        </header>
    );
};

export default Header;