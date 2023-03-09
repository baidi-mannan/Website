import React, { useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'
import { Button, Hidden } from '@material-ui/core';
import Drawer from "@material-ui/core/Drawer";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { List, ListItem, ListItemText, Divider, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const drawerWidth = '100%';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        backgroundColor: "#4D4D4D"
    },
    drawer: {
        [theme.breakpoints.up("sm")]: {
            width: drawerWidth,
            flexShrink: 0,
            display: "none"
        }
    },
    appBar: {
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: "#FFD05B",
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    },
    list: {
        '& .MuiTypography-colorPrimary': {
            color: '#4D4D4D',
        },
        '& .MuiTypography-body1': {
            fontSize: "large",
        },
    },
}));

export const Header = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [loggedIn, setLoggedIn] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    useEffect(() => {
        document.cookie.split(";").map((cookie) => (
            cookie.split("=").forEach((c) => {
                var name = c.replace(/\s/g, ""); // trim
                if (name === "jwtseller" || name === "idseller") {
                    setLoggedIn(true);
                }
            })
        ))
    });

    const drawer = (
        <div>
            <button onClick={handleDrawerToggle}
                style={{ cursor: 'pointer', float: 'right', margin: '20px', marginRight: '30px', backgroundColor: '#4D4D4D', color: 'white', padding: '10px' }}>X
            </button>
            <div className={classes.toolbar} />
            <Divider />
            <List className={classes.list}>
                {["ADD PRODUCT", "MY ORDERS"].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemText >
                            {index === 0 && <Link to="/seller/addproduct">{text}</Link>}
                            {index === 1 && <Link to="/seller/myorders">{text}</Link>}
                        </ListItemText>
                    </ListItem>
                ))}
            </List>
            <Divider />
        </div>
    );

    const signout = () => {
        confirmAlert({
            title: 'Confirm to SignOut',
            message: 'Are you sure to do this?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        document.cookie.split(";").map((cookie) => (
                            cookie.split("=").forEach((c) => {
                                var name = c.replace(/\s/g, ""); // trim
                                if (name === "jwtseller" || name === "idseller") {
                                    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;domain=solruf.com;path=/";
                                }
                            })
                        ))
                        window.location.reload();
                    }
                },
                {
                    label: 'No',
                    onClick: () => { }
                }
            ]
        });
    }

    return (
        <div className={classes.root}>
            <AppBar color="transparent" position="static">
                <Toolbar>
                    <Hidden smUp>
                        <IconButton color="primary" style={{ margin: '10px' }} onClick={handleDrawerToggle}>
                            <MenuIcon fontSize="large" />
                        </IconButton>
                    </Hidden>
                    <div style={{ flex: 1, margin: '10px' }}>
                        <Link to="/seller">
                            <img src="/Assets/HeaderFooter/ORIGINAL_SOLRUF_ANIMATED_LOGO_COMPLEMENTARY.gif" alt="logo" style={{ height: '5vh' }} />
                        </Link>
                    </div>
                    <Hidden only="xs">
                        <Link to="/seller">
                            <Typography color="primary" variant="h5">
                                SELLER PORTAL
                            </Typography>
                        </Link>
                        <Link to="/seller/addproduct">
                            <Button color="primary" size="large" style={{ margin: '10px' }}>Add Products</Button>
                        </Link>
                        <Link to="/seller/myorders">
                            <Button color="primary" size="large" style={{ margin: '10px' }}>My Orders</Button>
                        </Link>
                    </Hidden>
                    {loggedIn ?
                        <div className="font-icon-wrapper" onClick={signout}>
                            <IconButton color="primary" style={{ margin: '10px' }}>
                                <ExitToAppIcon fontSize="large" />
                            </IconButton>
                        </div>
                        : null}
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                <Hidden smUp implementation="css">
                    <Drawer
                        variant="temporary"
                        anchor={theme.direction === "rtl" ? "right" : "left"}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper
                        }}
                        ModalProps={{
                            keepMounted: true
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
        </div>
    );
};