import React from 'react';

function Feed(){
    return(
        <div className = "feed">
            <div className = "feed-top">
                <div className = "top-row1">
                    <a href = "#"><img src = "SidebarProfileImage.JPEG" alt = "Profile Picture SideBar" /></a>
                    <form>
                        <input type = "text" name = "post" placeholder = "Start a post" />
                    </form>
                </div>

                <div className = "top-row2">
                    <div className = "row2-item1">
                        <img src = "icons8-gallery-40.png" alt = "Photo Icon" />
                        <p>Photo</p>
                    </div>

                    <div className = "row2-item2">
                        <img src = "icons8-youtube-50.png" alt = "Video Icon" />
                        <p>Video</p>
                    </div>

                    <div className = "row2-item3">
                        <img src = "icons8-tear-off-calendar-80.png" alt = "Event Icon" />
                        <p>Event</p>
                    </div>

                    <div className = "row2-item4">
                        <img src = "icons8-news-48.png" alt = "Write Icon" />
                        <p>Write Icon</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feed;