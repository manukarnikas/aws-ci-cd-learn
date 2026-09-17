import React from "react";
import { getUserLabel } from "../utils.js";

function UserList({ users }) {
    return React.createElement(
        "ul",
        { className: "user-list" },
        users.map((user) =>
            React.createElement(
                "li",
                { key: user.id },
                React.createElement(
                    "strong",
                    null,
                    getUserLabel(user)
                ),
                React.createElement(
                    "span",
                    null,
                    user.role
                )
            )
        )
    );
}

export default UserList;
