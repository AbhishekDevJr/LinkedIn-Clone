import React from 'react';

function SideBar(){


    function hashTagRowBuilder(hashtagName){
        return(
            <>
                <p id = "hashC">&#35;</p>
                <p id = "hashP">{hashtagName}</p>
            </>
        );
    }


    return(
        <div className = "sidbar">
            <div className = "sidebar-top">
                <img src = "CoverImage.png" alt = "Cover Image" />
                <div className = "profile-avatar-sidebar">
                        <img id = "SidebarProfileImage" src = "SidebarProfileImage.JPEG" alt = "Profile Picture SideBar" />
                        <a href = "#"><p>ABHISHEK CHOUDHARI</p></a>
                        <p id = "profile-info">Pursuing MCA from IGNOU || Building Front-end Web Apps || Ex-Programmer Analyst (EAS-Salesforce) at Cognizant || Completed internship at Essar Steel Ind Ltd.</p>
                </div>
                <div className = "stats-hover">
                <div className = "stats-connections">
                    <p id = "stat-view">Connections</p>
                    <p id = "stat-count">110</p>
                </div>
                <p id = "stats-info">Grow your network</p>
                </div>
                
                <div className = "stats-profile-visits">
                    <p>Who's viewed your profile</p>
                    <p id = "stats-view">15</p>
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
                <div className = "sidebar-bottom-1">
                    <p>Recent</p>
                </div>

                <div className = "hashtags-container">
                    <div className = "hashtag-row1">
                        {hashTagRowBuilder("india")}
                    </div>

                    <div className = "hashtag-row2">
                        {hashTagRowBuilder("WebDevelopment")}
                    </div>

                    <div className = "hashtag-row3">
                        {hashTagRowBuilder("FrontEndDevelopment")}
                    </div>

                    <div className = "hashtag-row4">
                        {hashTagRowBuilder("ReactDevelopment")}
                    </div>

                    <div className = "hashtag-row5">
                        {hashTagRowBuilder("StateManagement")}
                    </div>
                </div>

                <div className = "sidebar-bottom-links">
                    <div className = "link1">
                        <a href = "#">Groups</a>
                    </div>

                    <div className = "link2">
                        <a href = "#">Events</a>
                    </div>

                    <div className = "link3">
                        <a href = "#">Followed Hashtags</a>
                    </div>
                </div>

                <div className = "hashtag-row6">
                        {hashTagRowBuilder("india")}
                </div>

                <div className = "hashtag-row7">
                    <p>See all</p>
                </div>

                <div className = "more">
                    <p>Discover More</p>
                </div>
            </div>
        </div>
    );
}

export default SideBar;