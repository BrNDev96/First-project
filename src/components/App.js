import React, { useState, useEffect } from "react";
import Users from "./users";
import API from "../api";

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        API.users.fetchAll().then((data) => setUsers(data));
    }, []);

    const handleDelete = (userId) => {
        setUsers((prevState) =>
            prevState.filter((position) => position._id !== userId)
        );
    };

    const handleToggleBookMark = (id) => {
        setUsers((prev) =>
            prev.map((user) =>
                user._id === id ? { ...user, bookmark: !user.bookmark } : user
            )
        );
    };

    return (
        <div>
            {users && (
                <Users
                users={users}
                onToggleBookmark={handleToggleBookMark}
                onDelete={handleDelete}
            />)}
        </div>
    );
}

export default App;
