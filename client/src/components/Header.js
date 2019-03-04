import React from "react";
import heroImage from "../images/book.jpeg";

const headerStyle = {
    "backgroundImage": `url(${heroImage})`,
    "maxWidth": "100%",
    "backgroundSize": "cover",
    position: "relative"
}

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Google Books Search</h1>
        </header>
    );
}

export default Header;