import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
    const USERS = [
        {
        id: 'u1', 
        name: 'Mayque', 
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5lyt81GNq5rMgriq91ABvsnVnxZ5KHOKhNA&s', 
        places: 1
        },
        {
        id: 'u2', 
        name: 'Thomas', 
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR4EkVbzlo__6nUlW8ZYfUxCe_HGjFmh3nEA&s',
        places: 2
        }
];
    return <UsersList items={USERS}/>;
};

export default Users;