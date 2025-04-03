import { use } from "react";

async function fetchUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return response.json();
}

export default function Users() {
    const users = use(fetchUsers());

    return (
        <div>
            {users.map(user => (
                <h1 key={user.id}>{user.name}</h1>
            ))}
        </div>
    );
}
