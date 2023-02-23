import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

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

                </div>
            </header>
        </div>
    );
}

export default Header;