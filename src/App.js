import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header.js";
import UserList from "./components/UserList.js";
import { formatUserCount } from "./utils.js";

function App() {
    const users = [
        { id: 1, name: "Alice", role: "Developer" },
        { id: 2, name: "Bob", role: "Designer" },
        { id: 3, name: "Charlie", role: "Product Manager" }
    ];

    const loadReports = async () => {
        const module = await import("./Reports.js");
        const reportsElement = React.createElement(module.default);
        const container = document.getElementById("reports-container");
        container.replaceChildren();
        const root = createRoot(container);
        root.render(reportsElement);
    };

    return React.createElement(
        "div",
        { className: "app" },
        React.createElement(Header),
        React.createElement(
            "main",
            { className: "content" },
            React.createElement("h2", null, "Webpack Lab Cache added"),
            React.createElement(
                "p",
                null,
                formatUserCount(users.length)
            ),
            React.createElement(UserList, { users }),
                        React.createElement(
                "button",
                { onClick: loadReports },
                "Load Reports"
            ),
            React.createElement(
                "div",
                { id: "reports-container" }
            )
        )
    );
}

export default App;
