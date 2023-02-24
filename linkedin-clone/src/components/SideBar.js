import React from 'react';

function SideBar(){
    return(
        <div className = "sidbar">
            <div className = "sidebar-top">
                <img src = "CoverImage.png" alt = "Cover Image" />
                <div className = "profile-avatar-sidebar">
                        <img id = "SidebarProfileImage" src = "SidebarProfileImage.JPEG" alt = "Profile Picture SideBar" />
                        <a href = "#"><p>ABHISHEK CHOUDHARI</p></a>
                        <p id = "profile-info">Pursuing MCA from IGNOU || Building Front-end Web Apps || Ex-Programmer Analyst (EAS-Salesforce) at Cognizant || Completed internship at Essar Steel Ind Ltd.</p>
                </div>

                <div className = "stats-connections">
                    <p id = "stat-view">Connections</p>
                    <p id = "stat-count">110</p>
                </div>
                <p>Grow your network</p>
                
                <div className = "stats-profile-visits">
                    <p>Who's viewed your profile</p>
                    <p>15</p>
                </div>

                <div className = "sidebar-top-tools">
                    <p>Access exclusive tools and insights</p>
                    <div className = "premium-offer">
                        <img src = "icons8-maximize-button-48.png" alt = "Offer Icon" />
                        <a href = "#">Try Premium for free</a> 
                    </div>
                </div>

                <div className = "items">
                    <img src = "icons8-bookmark-48.png" alt = "Bookmark Icon" />
                    <p>My items</p>
                </div>
            </div>

            <div className = "sidebar-bottom">

            </div>
        </div>
    );
}

export default SideBar;