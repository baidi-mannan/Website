import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      padding: "5px"
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
  }));

const Order = ({order, key}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  var mob = order.mobile;
  if (mob.length > 13) {
    mob = mob.slice(3);
    mob = `+${mob}`;
  }

  return (
    <div className={classes.root}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Order ID</Typography>
          <Typography className={classes.secondaryHeading}>{order.orderId}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <Typography variant="h6">
              Email : <span style={{color:"#5e5e5e"}}>{order.email}</span>
            </Typography>
            <Typography variant="h6">
              Mobile : <span style={{color:"#5e5e5e"}}>{mob}</span>
            </Typography>
            <Typography variant="h6">
              Amount : <span style={{color:"#5e5e5e"}}>₹ {order.amount}</span>
            </Typography>
            <Typography variant="h6">
              Address : <span style={{color:"#5e5e5e"}}>{order.address}</span>
            </Typography>
            <Typography variant="h6">
              PinCode : <span style={{color:"#5e5e5e"}}>{order.pinCode}</span>
            </Typography>
            {order.paymentStatus
            ?(
              <Typography variant="h6">
              <img src="/Assets/Seller/checked.svg" style={{height:"20px", width:"20px"}} alt="checked" />
              <span style={{color:"#5e5e5e"}}>Payment Received</span>
              </Typography>
            )
            :(
            <Typography variant="h6">
            <img src="/Assets/Seller/cancel.svg" style={{height:"17px", width:"17px"}} alt="cancel" />
            &nbsp;&nbsp;<span style={{color:"#5e5e5e"}}>Payment Not Received</span>
            </Typography>
            )}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Order;