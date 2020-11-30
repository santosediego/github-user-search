import React from 'react';
import ImageLoader from '../ImageLoader';
import InfoLoader from '../InfoLoader';
import './styles.css';

const Loading = () => {
    return (
        <div className="box-padding-image" >
            <div className="box-padding-content">
                <div>
                    <ImageLoader />
                </div>
                <div className="info-loader">
                    <InfoLoader />
                </div>
            </div>

        </div>
    );
}

export default Loading;