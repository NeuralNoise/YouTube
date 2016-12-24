/**
 * Created by Chris-Campbell on 12/20/2016.
 */
import React from 'react';

const VideoList = (props) => {
    const videos = props.videos;
    return (
        <ul className="col-md-4 list-group">
            {props.videos.length}
        </ul>
    );
};

export default VideoList;