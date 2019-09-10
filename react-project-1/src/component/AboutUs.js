import React from "react";
import "./AboutUs.css";
import { person } from "../data-aboutus";

const socialNet = [
    {
        id: 1,
        href: "#",
        classI: "sharefacebook"
    },
    {
        id: 2,
        href: "#",
        classI: "sharetwitter"
    },
    {
        id: 3,
        href: "#",
        classI: "sharetgoogle"
    },
    {
        id: 4,
        href: "#",
        classI: "sharedrible"
    }
]


function AboutUs() {

    return (
        <div className="about" id="about">
            <div className="wrap">
                <h2>About US</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                <div className="about-grids">
                <>
                    {person.map((value) =>
                    <div className="grid" key={value.id}>
                        <div className="dc_zoom_css">
                        <span className="roll_css6">
                            <div className="social">
                                <ul>
                                    {socialNet.map(social => <li key={social.id}><a href={social.href} className={social.classI}></a></li>)}
                                    <div className="clear"> </div>
                                </ul>
                            </div>
                        </span>
                        <img className="post-person" src={value.img} />
                        </div>
                        <div className="desc">
                            <h3>{value.name}</h3>
                            <p>{value.job}</p>
                            <p>{value.desc}</p>
                        </div>
                    </div>
                    )}
                </>
                <div className="clear"> </div>
                </div>           
            </div>
        </div>
    );
}

export default AboutUs