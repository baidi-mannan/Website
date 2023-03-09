import React from "react";

import { AppBar, Tabs, Tab, makeStyles, Grid, InputBase, IconButton,Typography,Button, List, ListItem, ListItemText, FormControl, Hidden, Select, MenuItem} from "@material-ui/core";
import Slider from '@material-ui/core/Slider';
import { FormControlLabel, Checkbox,FormGroup } from "@material-ui/core";
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ViewStreamIcon from '@material-ui/icons/ViewStream';

import ProductType from "./ProductType/ProductType";

const useStyles = makeStyles((theme)=>({
    outer: {
        "& .MuiInput-input" : {
            padding:"10px 0"
        }
    },
    searchBox : {
        backgroundColor:"#BFBFBF",
        height: "fit-content",
        padding:"4vh"
    },
    priceSlider:{
        paddingTop:"50px",
        "& .MuiSlider-valueLabel" : {
            "& span" : {
                "& span" : {
                    color:"black",
                    fontWeight:"bold",
                }
            }
        }
    },
    mobRoot :{
        "& .MuiSelect-icon" : {
            display:"none"
        }
    },
    appbar : {
        "& .MuiTabs-scrollButtons": {
            display: "none"
        },
        "& .Mui-selected": {
            backgroundColor: "#FFE25C",
        },
    },
    disable : {
        [theme.breakpoints.down("xs")]: {
            display: "none"
        }
    },
    themeColor : {
        backgroundColor:"#FFE25C",
    },
}));

// utils
function a11yProps(index) {
    return {
      id: `scrollable-force-tab-${index}`,
      'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}
const tabNameToIndex = {
    acdb: 0,
    dcdb: 1,
    solarInverter: 2,
    solarPanel: 3,
  };

const productTypes = {
    "ACDB" : "acdb",
    "DCDB" : "dcdb",
    "SOLAR INVERTER" : "solarInverter",
    "SOLAR PANEL" : "solarPanel"
  };

const ProductPage = (props) => {
    
    // const { match } = props;
    // const { params } = match;
    // const { page } = params;

    const [category, setCategory] = React.useState([]);
    const [view, setView] = React.useState("single");
    const [sortBy, setSortBy] = React.useState('');
    const [brand, setBrand] = React.useState([]);
    const [priceRange, setPriceRange] = React.useState([0,5000]);
    const [discount, setDiscount] = React.useState({
        ten: false,
        twenty: false,
        thirty: false,
        forty: false,
        fifty: false,
      });
    const { ten, twenty, thirty, forty, fifty } = discount;
    const handleChangeDiscount = (event) => {
        setDiscount({ ...discount, [event.target.name]: event.target.checked });
    };

    const handleChangeCategory = (event) => {
        if(category.indexOf(event.target.innerText)=== -1){
            setCategory([...category, event.target.innerText]);
        }else{
            setCategory(category.filter(el => el !== event.target.innerText));
        }
    }

    const handleChangePrice = (event, newValue) => {
        setPriceRange(newValue);
      };

    const handleClickBrand = (event) => {
        let set = event.target.value!==undefined ? event.target.value : event.target.innerText;
        brand.indexOf(set)===-1 ? 
        setBrand([...brand,set])
        :
        setBrand(brand.filter(br => br!==set))
    }

    const handleChangeSortBy = (event) => {
        setSortBy(event.target.value);
    };

    const ResetFilter = () => {
        setCategory([]);
        setBrand([]);
        setSortBy('');
        setPriceRange([0,5000]);
        setDiscount({
            ten: false,
            twenty: false,
            thirty: false,
            forty: false,
            fifty: false,
          });
    }
    const classes = useStyles();
    return(
        <>
        <div className={classes.outer} style={{backgroundColor:"white"}}>
            <div className={classes.searchBox}>
                <Grid container xs="12" alignItems="center" style={{height:"100%"}}>
                    <Grid item md="6">
                        <div className={classes.disable}>
                            <Typography style={{textAlign:"end", paddingRight:"10px", fontSize:"2rem"}}>
                            Search in our 17,150 Products
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} md="6" container style={{margin:"auto"}}>
                        <Grid item xs="9" md="7">
                            <div>
                                <InputBase 
                                    placeholder={window.innerWidth<590 ? "Search in our 17,150 Products" : "Search here"}
                                    style={{ backgroundColor : "white", height:"100%",width:"100%", padding:"5px 10px", borderRadius:"8px 0px 0px 8px"}}
                                />
                            </div>
                        </Grid>
                        <Grid item xs="3" md="2">
                            <div style={{width:"100%",height:"100%"}}>
                                <Button className={classes.themeColor} style={{width:"100%", height:"100%", borderRadius:"0px 8px 8px 0px"}}>
                                    <strong>Search</strong>
                                </Button>
                            </div>
                        </Grid>
                        <Grid item md="3"/>
                    </Grid>
                </Grid>
            </div>
            {/* Mobile view */}
            <Hidden only={["md","lg","xl"]}>
            <Grid className={classes.mobRoot} container xs="12" spacing={1} style={{padding:"10px"}}>
                <Grid item xs="3" container alignItems="center">
                    <Typography align="center"><strong>FILTER</strong></Typography>
                </Grid>
                <Grid item xs="4">
                    <FormControl className={classes.formControl} style={{display:"block",width:"100%",padding:0}}>
                        <Select
                        value={sortBy}
                        onChange={handleChangeSortBy}
                        displayEmpty
                        className={classes.selectEmpty}
                        inputProps={{ 'aria-label': 'Without label' }}
                        style={{backgroundColor:"#D9D9D9",width:"100%",display:"block",margin:"auto",padding:"2px", textAlign:"center"}}
                        >
                            <MenuItem value={""}>Sort By</MenuItem>
                            <MenuItem value={"relevance"}>Relevance</MenuItem>
                            <MenuItem value={"priceHTL"}>Price High to Low</MenuItem>
                            <MenuItem value={"priceLTH"}>Price Low to High</MenuItem>
                            <MenuItem value={"rating"}>Rating</MenuItem>
                            <MenuItem value={"availability"}>Availability</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                
                <Grid item xs="4">
                    <FormControl className={classes.formControl} style={{display:"block",width:"100%",padding:0,borderRadius:"2px"}}>
                        <Select
                        value={""}
                        onChange={handleClickBrand}
                        displayEmpty
                        className={classes.selectEmpty}
                        inputProps={{ 'aria-label': 'Without label' }}
                        style={{backgroundColor:"#D9D9D9",width:"100%",display:"block",margin:"auto",padding:"2px", textAlign:"center"}}
                        >
                        <MenuItem value={""} disabled>Brand</MenuItem>
                        {["IDIS INDIA","EPC Solar","TRINA SOLAR","JINKO SOLAR"].map(brandName => {
                            return(
                                brand.indexOf(brandName)===-1 ?
                                <MenuItem value={brandName}>{brandName}</MenuItem>
                                :
                                <MenuItem value={brandName} style={{backgroundColor:"#FFE25C"}}>{brandName}</MenuItem>
                            )
                        })}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs="1">
                    {/* add new filter here */}
                </Grid>
            </Grid>
            <AppBar position="static" color="default" className={classes.appbar}>
                <Tabs
                    value={tabNameToIndex[productTypes[category[0]]]}
                    onChange={handleChangeCategory}
                    indicatorColor="primary"
                    textColor="black"
                    variant="scrollable"
                    scrollButtons="on"
                    aria-label="scrollable auto tabs example"
                >
                {["ACDB","DCDB","SOLAR INVERTER","SOLAR PANEL"].map((categoryItm, ind)=> 
                    category.indexOf(categoryItm)===-1 ?
                    <Tab label={categoryItm} {...a11yProps(ind)} style={{width:"25vw", border:"1px solid #BFBFBF"}} />
                    :
                    <Tab label={categoryItm} {...a11yProps(ind)} style={{backgroundColor:"#FFE25C" ,width:"25vw", border:"1px solid #BFBFBF"}} />
                )
                }
                </Tabs>
            </AppBar>
            </Hidden>
            
            <Grid container xs="12" style={{width:"100%",minHeight:"40vh",height:"fit-content",backgroundColor:"#F2F2F2"}}>
            {/* WEB VIEW */}
            <Hidden smDown >
                <Grid item container xs="12" md="3" style={{width:"100%",height:"100%",border:"1px solid #B2B2B2",borderTop:"none"}}>
                    <Grid item md="12" style={{height:"fit-content", backgroundColor:"white", padding:"20px 50px"}}>
                        <Typography variant="h5" align="center" style={{color:"black"}}>CATEGORIES</Typography>
                        <List>
                        {["ACDB","DCDB","SOLAR INVERTER","SOLAR PANEL"].map(categoryItm => {
                            return  category.indexOf(categoryItm)===-1?
                            <ListItem button onClick={handleChangeCategory} style={{backgroundColor:"white", border:"1px solid #BFBFBF"}}>
                                <ListItemText align="center" primary={categoryItm}/>
                            </ListItem>
                            :
                            <ListItem button onClick={handleChangeCategory} style={{backgroundColor:"#FFE25C", border:"1px solid #BFBFBF"}}>
                                <ListItemText align="center" primary={categoryItm}/>
                            </ListItem>
                        })}
                        </List>
                    </Grid>
                    <Grid item md="12" style={{backgroundColor:"#D9D9D9",height:"fit-content", padding:"10px"}}>
                        <Typography variant="h6" align="center" style={{paddingBottom:10}}>Sort By</Typography>
                        <FormControl className={classes.formControl} style={{display:"block",width:"100%"}}>
                            <Select
                            value={sortBy}
                            onChange={handleChangeSortBy}
                            displayEmpty
                            className={classes.selectEmpty}
                            inputProps={{ 'aria-label': 'Without label' }}
                            style={{backgroundColor:"white",minWidth:"fit-content",width:"70%",display:"block",margin:"auto",padding:"5px"}}
                            >
                                <MenuItem value={""}>Relevance</MenuItem>
                                <MenuItem value={"priceHTL"}>Price High to Low</MenuItem>
                                <MenuItem value={"priceLTH"}>Price Low to High</MenuItem>
                                {/* <MenuItem value={"rating"}>Rating</MenuItem>
                                <MenuItem value={"availability"}>Availability</MenuItem> */}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item md="12" style={{backgroundColor:"white",height:"fit-content", padding:"10px 20px",border:"1px solid #F2F2F2"}}>
                        <Typography variant="h6" align="center" style={{paddingBottom:10}}>Price Range</Typography>
                        <Slider
                            className={classes.priceSlider}
                            value={priceRange}
                            onChange={handleChangePrice}
                            valueLabelDisplay="on"
                            aria-labelledby="range-slider"
                            getAriaValueText={(value)=>`₹${value}`}
                            max={5000}
                            step={100}
                        />
                    </Grid>
                    <Grid item md="12" style={{backgroundColor:"white",height:"fit-content", padding:"20px",border:"1px solid #F2F2F2"}}>
                        <div style={{width:"fit-content",display:"block",margin:"auto"}}>
                        <FormControl component="fieldset" className={classes.formControl}>
                            <Typography variant="h6" align="center" style={{paddingBottom:10}}>Discount</Typography>
                            <FormGroup>
                            <FormControlLabel
                                control={<Checkbox checked={ten} onChange={handleChangeDiscount} name="ten" />}
                                label="10% off or More"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={twenty} onChange={handleChangeDiscount} name="twenty" />}
                                label="20% off or More"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={thirty} onChange={handleChangeDiscount} name="thirty" />}
                                label="30% off or More"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={forty} onChange={handleChangeDiscount} name="forty" />}
                                label="40% off or More"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={fifty} onChange={handleChangeDiscount} name="fifty" />}
                                label="50% off or More"
                            />
                            </FormGroup>
                        </FormControl>
                        </div>
                    </Grid>
                    <Grid item md="12" style={{height:"fit-content", backgroundColor:"#D9D9D9", padding:"20px 50px",border:"1px solid #F2F2F2"}}>
                        <Typography variant="h6" align="center" style={{paddingBottom:10}}>Brands</Typography>
                        <List>
                        {["IDIS INDIA","EPC SOLAR","TRINA SOLAR","JINKO SOLAR"].map(brandName => {
                            return brand.indexOf(brandName)=== -1 ?
                            <ListItem button onClick={handleClickBrand} style={{backgroundColor:"white", border:"1px solid #F2F2F2"}}>
                                <ListItemText align="center" primary={brandName}/>
                            </ListItem>
                            :
                            <ListItem button onClick={handleClickBrand} style={{backgroundColor:"#FFE25C", border:"1px solid #F2F2F2"}}>
                                <ListItemText align="center" primary={brandName}/>
                            </ListItem>
                        })}
                        </List>
                    </Grid>
                </Grid>
                </Hidden>
                {/* Products display */}
                <Grid item container xs="12" md="9" style={{width:"100%",height:"100%",backgroundColor:"#F2F2F2"}}>
                    <Grid container xs="12" style={{height:"50px"}}>
                    <Grid item container xs="6" sm="3" lg="2" alignItems="center">
                        <Button onClick={ResetFilter} color="primary" variant="contained" style={{height:"fit-content", color:"black", marginLeft:"10px"}}>Reset filters</Button>
                    </Grid>    
                    <Grid item xs="3" sm="7" lg="9"/>
                        <Grid item container xs="3" sm="2" lg="1" style={{height:"100%",padding:"10px"}}>
                        {view==="multiple"?
                            (<><Grid xs="6" item container justify="flex-end" >
                                <IconButton color="primary" onClick={()=>setView("multiple")} aria-label="multiple view" component="span" style={{ padding:"5px",backgroundColor:"black",width:"fit-content",height:"fit-content" }}>
                                    <ViewModuleIcon />
                                </IconButton>
                            </Grid>    
                            <Grid xs="6" item container justify="flex-end" >
                                <IconButton color="primary" onClick={()=>setView("single")} aria-label="single view" component="span" style={{ padding:"5px", width:"fit-content",height:"fit-content" }}>
                                    <ViewStreamIcon />
                                </IconButton>
                            </Grid></>)
                            :
                            (<><Grid xs="6" item container justify="flex-end">
                                <IconButton color="primary" onClick={()=>setView("multiple")} aria-label="multiple view" component="span" style={{ padding:"5px", width:"fit-content",height:"fit-content"  }}>
                                    <ViewModuleIcon />
                                </IconButton>
                            </Grid>    
                            <Grid xs="6" item container justify="flex-end">
                                <IconButton color="primary" onClick={()=>setView("single")} aria-label="single view" component="span" style={{  padding:"5px",backgroundColor:"black",width:"fit-content",height:"fit-content" }}>
                                    <ViewStreamIcon />
                                </IconButton>
                            </Grid></>)}
                        </Grid>
                    </Grid>
                    <Grid item xs="12">
                        <ProductType category={category} view={view} sortBy={sortBy} priceRange={priceRange} brands={brand} discount={discount}
                        //  productType={page.toUpperCase()}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </div>
        </>
    )
}

export default ProductPage;