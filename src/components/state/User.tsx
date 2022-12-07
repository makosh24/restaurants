import {useState} from 'react';

type AuthUser = {
    name: string;
    email: string;
}

const User = () => {
    const [user, setUser] = useState({} as AuthUser);

    const handleLogin = () => {
        setUser({
            name: "MadI",
            email: "makosh24@mail.ru",
        });
    }

    const handleLogout = () => {
        setUser({} as AuthUser);
    }

    return(
        <div>
            <button onClick={handleLogin}>login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {user.name}</div>
            <div>User email is {user.email}</div>
        </div>
    )
}

export default User;