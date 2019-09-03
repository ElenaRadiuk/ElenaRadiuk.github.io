import React from "react"

function Header(props) {
    return (
        <header>
        This is the header

        <div>
            <span>{props.menu}</span>
        </div>

        </header>
)
}

export default Header