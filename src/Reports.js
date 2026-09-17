import React from "react";

function Reports() {
    return React.createElement(
        "div",
        { className: "reports" },
        React.createElement("h2", null, "Reports"),
        React.createElement(
            "p",
            null,
            "This module was loaded lazily."
        )
    );
}

export default Reports;