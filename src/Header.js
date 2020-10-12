import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from "./StateProvider";

function Header() {

    const [ {user} , dispatch ]= useStateValue();
    return (
        <div className="header">

        <div className="headerLeft">
            <img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png" alt="" />

            <div className="headerInput">
                <SearchIcon />
                <input placeholder="Search Facebook" type="text" />
            </div>

        </div>
        <div className="headerCenter">
            <div className="headerOption headerOptionActive">
            <HomeIcon fontSize="large" />
             </div>
             <div className="headerOption">
            <FlagIcon fontSize="large" />
             </div>
             <div className="headerOption">
            <SubscriptionsOutlinedIcon fontSize="large" />
             </div>
             <div className="headerOption">
            <StorefrontOutlinedIcon fontSize="large" />
             </div>
             <div className="headerOption">
            <SupervisedUserCircleIcon fontSize="large" />
             </div>
                
        </div>
        <div className="headerRight">
                <div className="headerInfo">
                <Avatar src={user.photoURL} />
                <h4>{user.displayName}</h4>
                </div>

                <IconButton>
                    <AddIcon />
                 </IconButton>
                 <IconButton>
                    <ForumIcon />
                 </IconButton>
                 <IconButton>
                    <NotificationsActiveIcon />
                 </IconButton>
                 <IconButton>
                    <ExpandMoreIcon />
                 </IconButton>
                
                    
                    

        </div>
    
            
        </div>
    )
}


export default Header;
