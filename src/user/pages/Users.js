import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
    const USERS = [{
        id: 'u1', 
        name: 'Max', 
        image: 'https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png', 
        places: 3}];
    return <UsersList items={USERS}/>;
};

export default Users;