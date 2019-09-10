import React, { Component } from 'react';
import Gallery from "react-photo-gallery";
import "./MyGallery.css";
import { photos } from "../data-gallery";

function MyGallery() {
    const BasicRows = () => <Gallery photos={photos} />;
    return (
        <div className="gallery">
            <div className="clear"> </div>
            <div className="container">
                <h2>Portfolio</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                {/* <BasicRows /> */}
                <Gallery photos={photos} direction={"column"} />
            </div>
        </div>
    );
}

export default MyGallery;