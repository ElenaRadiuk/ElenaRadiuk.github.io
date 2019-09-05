import React from "react"

function Logo(props) {
    return (
        <img className="logo"
            src={props.src}
            alt={props.alt} />
    );
}

function Nav(props) {
    return (
        <div class="nav">
            <ul>
                {props.children}
                <div className="clear"></div> 
            </ul>
        </div>
    ); 
}

function Header(props) {
    return (
        // <header>
        // This is the header
        //
        // <div>
            // <span>{props.menu}</span>
        // </div>

        // </header>
        <div className="header_bg">
        <div className="wrap">
        <div className="header">

        <Logo></Logo>
        <Nav></Nav>
       

        <div className="clear"></div>
        </div>
        </div>
        </div>
)
}

export default Header