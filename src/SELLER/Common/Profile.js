import React from 'react';
import { Typography } from '@material-ui/core';



const Profile = ({user}) => {
    
    return (
        <>
        <div style={{margin:"10px"}}>
        <Typography variant="h6" align="center" color="secondary">
            <img src="/Assets/Seller/seller.svg" alt="sellerIcon" style={{height: "250px", width: "250px"}} />
                <br />
                <strong>{user.seller}</strong>
                <br />
                {user.mobile}
                <br />
                {user.email}
                <br />
                {user.address}
                <br />
        </Typography>
        </div>
        </>
    )
}

export default Profile;
