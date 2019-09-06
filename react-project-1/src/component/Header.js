import React from "react"
import images from '../images/logo.png';

const headerItems = [
    {
        id: 1,
        title: "Home",
        href: "#home",
        className: "menu-item"
    },
    {
        id: 2,
        title: "Portfolio",
        href: "#portfolio",
        className: "menu-item"
    },
    {
        id: 3,
        title: "About",
        href: "#about",
        className: "menu-item"
    },
    {
        id: 4,
        title: "Contact",
        href: "#contact",
        className: "menu-item"
    }
]

function Logo(props) {
    return (
        <img className="logo"
            src={props.src}
            alt={props.alt} />
    );
}

function Nav(props) {
    return (
        <li><a>{props.title}</a></li>
    ); 
}

function Header(props) {
    // const HeaderI = headerItems.map(itemM => <Nav key={itemM.id} title={itemM.title}/>)
    // const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)
    // console.log(HeaderI)
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

                    <Logo src={images} />
        
        <div className="nav">
                        <ul>
                        
                            {this.props.list.map(itemM => <li key={itemM.id}> title={itemM.title}</li>)}
                            {/* {HeaderI} */}
                            <div className="clear"></div> 
                        </ul>
        </div>
       

        <div className="clear"></div>
                    <span>{props.menu}</span>
        </div>
        </div>
        </div>
)
}

export default Header