import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

import { Badge, Button, Hidden, Menu, MenuItem } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles, useTheme, fade } from "@material-ui/core/styles";
import { List, ListItem, ListItemIcon, ListItemText, Divider } from "@material-ui/core";
import { Link, NavLink } from "react-router-dom";

import { connect } from "react-redux";

const drawerWidth = "100%";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "black",
    "& .MuiButton-root:selected": {
      color: "yellow",
    },
    // color: "white"
    "& .MuiButton-root": {
      color: "white",
    },
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
      display: "none",
    },
  },
  appBar: {},
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#FFD05B",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  list: {
    "& .MuiTypography-colorPrimary": {
      color: "#4D4D4D",
    },
    "& .MuiTypography-body1": {
      fontSize: "large",
    },
  },
  search: {
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    [theme.breakpoints.up("sm")]: {
      marginRight: theme.spacing(3),
      width: "auto",
    },
    border: "none",
    color: "white",
    padding: "0px 20px",
    textAlign: "center",
    textDecoration: "none",
    margin: "4px 2px",
    cursor: "pointer",
    borderRadius: "16px",
    background: "linear-gradient(90deg, #00000000 80%, #FFD05B 20%)",
    [theme.breakpoints.down("xs")]: {
      background: "linear-gradient(90deg, #00000000 80%, #4D4D4D 20%)",
      width: "80%",
      marginLeft: 56,
      marginTop: "10px",
      backgroundColor: fade(theme.palette.common.black, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.black, 0.25),
      },
      color: "black",
    },
  },
  searchIcon: {
    padding: theme.spacing(0.5, 2),
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  blogMenu: {
    "& .MuiPaper-root": {
      borderTopLeftRadius: "0px",
      borderTopRightRadius: "0px",
      boxShadow: "none",
    },
    "& .MuiMenuItem-root": {
      borderBottom: "1px solid #ffd05b",
      "&:last-child": {
        borderColor: "black",
      },
    },
    "& .MuiList-root": {
      backgroundColor: "black",
    },
    "& .MuiList-padding": {
      padding: "3px 0px",
    },
    "& .MuiListItem-gutters": {
      paddingLeft: "10px",
      paddingRight: "10px",
    },
    "& .MuiButtonBase-root": {
      padding: "5px 10px",
    },
  },
  blogMenuMobile: {
    "& .MuiPaper-root": {
      borderRadius: "0px",
      boxShadow: "none",
    },
    "& .MuiButtonBase-root": {
      padding: "5px 10px",
    },
    "& .MuiList-root": {
      backgroundColor: "black",
    },
    "& .MuiList-padding": {
      padding: "3px 0px",
    },
    "& .MuiListItem-gutters": {
      paddingLeft: "10px",
      paddingRight: "10px",
    },
  },
}));

const Header = ({ cart }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElMobile, setAnchorElMobile] = React.useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickMobile = (event) => {
    setAnchorElMobile(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseMobile = () => {
    setAnchorElMobile(null);
  };

  const handleCloseWithDrawer = () => {
    setAnchorElMobile(null);
    setMobileOpen(false);
  };

  const drawer = (
    <div>
      <button
        onClick={handleDrawerToggle}
        style={{
          cursor: "pointer",
          float: "right",
          margin: "20px",
          marginRight: "30px",
          backgroundColor: "#4D4D4D",
          color: "white",
          padding: "10px",
        }}
      >
        X
      </button>
      <div className={classes.toolbar} />
      <Divider />

      <List className={classes.list}>
        {["PRODUCTS", "ABOUT US", "BLOG", "CONTACT US", "MY ORDERS"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {/* {index === 0 && <iconname />  }
                        {index === 1 &&  }
                        {index === 2 &&  }
                        {index === 3 &&  } */}
            </ListItemIcon>
            <ListItemText>
              {index === 0 && (
                <Link to="/products" style={{ color: "#4D4D4D" }} onClick={handleDrawerToggle}>
                  {text}
                </Link>
              )}
              {index === 1 && (
                <Link to="/aboutus" style={{ color: "#4D4D4D" }} onClick={handleDrawerToggle}>
                  {text}
                </Link>
              )}
              {/* ------blog-------- */}
              {index === 2 && (
                <>
                  <div aria-controls="simple-menu-drawer" style={{ color: "#4D4D4D" }} onClick={handleClickMobile}>
                    {text}
                  </div>
                  <Menu
                    className={classes.blogMenuMobile}
                    style={{ marginTop: "50px" }}
                    id="simple-menu-drawer"
                    anchorEl={anchorElMobile}
                    open={Boolean(anchorElMobile)}
                    onClose={handleCloseMobile}
                    keepMounted
                    disableScrollLock={true}
                  >
                    <MenuItem onClick={handleCloseWithDrawer}>
                      <Link to="/netmetering" style={{ color: "white" }}>
                        Netmetering
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleCloseWithDrawer}>
                      <Link to="/installation" style={{ color: "white" }}>
                        Solar Installation
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleCloseWithDrawer}>
                      <Link to="/design" style={{ color: "white" }}>
                        Solar Design
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleCloseWithDrawer}>
                      <Link to="/solarproducts" style={{ color: "white" }}>
                        Solar Products
                      </Link>
                    </MenuItem>
                  </Menu>
                </>
              )}
              {/* ---------------- */}
              {index === 3 && (
                <Link to="/contact" style={{ color: "#4D4D4D" }} onClick={handleDrawerToggle}>
                  {text}
                </Link>
              )}
              {index === 4 && (
                <Link to="/myorders" style={{ color: "#4D4D4D" }} onClick={handleDrawerToggle}>
                  {text}
                </Link>
              )}
            </ListItemText>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar color="transparent" position="static">
        <Toolbar>
          <Hidden smUp>
            <IconButton color="primary" style={{ margin: "10px" }} onClick={handleDrawerToggle}>
              <MenuIcon fontSize="large" />
            </IconButton>
          </Hidden>
          <div style={{ flex: 1, margin: "10px" }}>
            <Link to="/">
              <img
                src="/Assets/HeaderFooter/ORIGINAL_SOLRUF_ANIMATED_LOGO_COMPLEMENTARY.gif"
                alt="logo"
                style={{ height: "45px" }}
              />
            </Link>
          </div>
          <Hidden only="xs">
            <Button size="large" style={{ fontSize: "small" }}>
              <NavLink to="/products" className="main-nav" activeClassName="main-nav-active" style={{ color: "white" }}>
                Products
              </NavLink>
            </Button>
            <Button color="primary" size="large" style={{ fontSize: "small", color: "white" }}>
              <NavLink to="/aboutus" className="main-nav" activeClassName="main-nav-active" style={{ color: "white" }}>
                About us
              </NavLink>
            </Button>
            {/* -----------blog------------
            <div style={{ position: "relative" }}>
              <Button
                aria-controls="simple-menu"
                onClick={handleClick}
                color="primary"
                size="large"
                style={{ fontSize: "small", color: "white" }}
              >
                Blog
              </Button>
              <Menu
                className={classes.blogMenu}
                style={{ position: "absolute", left: "0px", top: "52px" }}
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                keepMounted
                onClose={handleClose}
                disableScrollLock={true}
              >
                <MenuItem onClick={handleClose}>
                  <NavLink to="/netmetering" activeClassName="main-nav-active" style={{ color: "white" }}>
                    Netmetering
                  </NavLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <NavLink to="/installation" activeClassName="main-nav-active" style={{ color: "white" }}>
                    Solar Installation
                  </NavLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <NavLink to="/design" activeClassName="main-nav-active" style={{ color: "white" }}>
                    Solar Design
                  </NavLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <NavLink to="/solarproducts" activeClassName="main-nav-active" style={{ color: "white" }}>
                    Solar Products
                  </NavLink>
                </MenuItem>
              </Menu>
            </div> */}
            {/* --------------- */}
            <Button color="primary" size="large" style={{ fontSize: "small", color: "white" }}>
              <NavLink to="/contact" className="main-nav" activeClassName="main-nav-active" style={{ color: "white" }}>
                Contact us
              </NavLink>
            </Button>
            <Button color="primary" size="large" style={{ fontSize: "small", color: "white" }}>
              <NavLink to="/myorders" className="main-nav" activeClassName="main-nav-active" style={{ color: "white" }}>
                My Orders
              </NavLink>
            </Button>
          </Hidden>
          <IconButton color="primary" style={{ color: "white" }}>
            <Badge badgeContent={cart.length}>
              <NavLink to="/cart" className="main-nav" activeClassName="main-nav-active" style={{ color: "white" }}>
                <ShoppingCartOutlinedIcon fontSize="large" />
              </NavLink>
            </Badge>
          </IconButton>
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
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.Product.cart,
  };
};

export default connect(mapStateToProps)(Header);
