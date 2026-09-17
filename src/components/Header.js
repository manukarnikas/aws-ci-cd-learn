import React from "react";

function Header() {
    return React.createElement(
        "header",
        { className: "header" },
        React.createElement("h1", null, "No-Webpack Baseline"),
        React.createElement(
            "span",
            { className: "badge" },
            "Baseline"
        )
    );
}

export default Header;
