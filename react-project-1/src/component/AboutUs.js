import React from "react";
import "./AboutUs.css";
import { person } from "../data-aboutus";

const socialNet = [
    {
        id: 1,
        href: "#",
        className: "sharefacebook"
    },
    {
        id: 2,
        href: "#",
        className: "sharetwitter"
    },
    {
        id: 3,
        href: "#",
        className: "sharetgoogle"
    },
    {
        id: 4,
        href: "#",
        className: "sharedrible"
    }
]

function SocialItem(props) {
    return (
        <li><a href={props.href} className={props.className}></a></li>
    );
}

function PersonItem(props) {
    return (
        <div className="roll_css6">
            <img class="post-person" src={props.src} />

            <div class="desc">
                <h3>{props.name}</h3>
                <p>{props.job}</p>
                <p>{props.desc}</p>
            </div>
        </div>

    );
}

function AboutUs() {
    const Social = socialNet.map(social => <SocialItem key={social.id} href={social.href} title={social.className} />)
    const Person = person.map(item => <PersonItem key={item.id} name={item.name} src={item.img} job={item.job} desc={item.desc} />)
    return (

        

        <div className="about" id="about">
            <div className="wrap">
                <h2>About US</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                <div className="about-grids">
                    
                <>
                    {person.map((value) =>
                <div className="grid">

                        <div className="roll_css6">
                            <div className="social">
                                <ul>

                                    {Social}

                                    <div className="clear"> </div>
                                </ul>
                            </div>

                            <img class="post-person" src={value.src} />

                            <div class="desc">
                                <h3>{value.name}</h3>
                                <p>{value.job}</p>
                                <p>{value.desc}</p>
                            </div>
                        </div>

                    </div>
                    )}
                </>
                
                </div>
                        
            </div>
        </div>

    );
}

export default AboutUs