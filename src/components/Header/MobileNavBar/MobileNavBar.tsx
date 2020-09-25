import React from 'react';


import logo from '../../../assets/logo.svg'
import styles from './MobileNavBar.module.css'

import MenuIcon from '@material-ui/icons/Menu';
import {Link , Divider, ListItem, List, IconButton, SwipeableDrawer} from "@material-ui/core";


const MobileNavBar = () =>  {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (open:any) => (event:any) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setOpen(open);
    };



    return (
        <div className={styles.container}>
            <IconButton  onClick={toggleDrawer(true)}><MenuIcon color={'primary'}/></IconButton>
            <SwipeableDrawer anchor={'left'} open={open} onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)}  >
                <List  onKeyDown={toggleDrawer(false)} onClick={toggleDrawer(false)}>
                    <ListItem><img className={styles.logo} alt={'logo'} src={logo}/></ListItem>
                    <Divider/>
                    <div>
                         <ListItem>
                                <Link

                                    color='inherit'
                                >
                                    {'Home'}
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link

                                    color='inherit'
                                >
                                    {'About Us'}
                                </Link>
                            </ListItem>
                    </div>

                </List>
            </SwipeableDrawer>
        </div>
    );
};

export default MobileNavBar;