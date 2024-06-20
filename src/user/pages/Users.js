import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
    const USERS = [
        {
        id: 'u1', 
        name: 'Mayque', 
        image: 'https://media.licdn.com/dms/image/D4D03AQFYiSkQzLVDjQ/profile-displayphoto-shrink_200_200/0/1680290466908?e=2147483647&v=beta&t=v9SEvd2t0f9QSGBO3t9Rx1IK5ePOQI4bAMDWtdKoNkY', 
        places: 1
        }
];
    return <UsersList items={USERS}/>;
};

export default Users;