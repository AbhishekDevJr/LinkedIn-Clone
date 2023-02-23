import React from 'react';
import HeaderOptions from './HeaderOptions';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header(){
    return(
        <div className = "headerClass">
            <header>
                <div className = "header-left">
                    <img src = "icons8-linkedin-48.png" alt = "LinkedIn Icon" />
                    <div className = "search-input">
                        <SearchIcon />
                        <input placeholder = "Search" type = "text" name = "search" />
                    </div>
                 </div>

                <div className = "header-right">
                    <HeaderOptions icon = {HomeIcon} title = {'Home'} />
                    <HeaderOptions icon = {SupervisorAccountIcon} title = {'My Network'} />
                    <HeaderOptions icon = {BusinessCenterIcon} title = {'Jobs'} />
                    <HeaderOptions icon = {MessageIcon} title = {'Messaging'} />
                    <HeaderOptions icon = {NotificationsIcon} title = {'Notifications'} />
                    <div className = "profile-avatar">
                        <img src = "B0A74F60-BDD0-4C44-8D06-A3CC680DD264 (1).JPEG" alt = "Profile Picture" />
                        <p>Me</p>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;