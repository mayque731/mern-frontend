import React from "react";
import PlaceList from "../components/PlaceList";
import {useParams} from "react-router-dom";

const DUMMY_PLACES = [
    {
        id:'p1',
        title:'Empire State Building',
        description:'One of the most famous sky scrapers in the world!',
        imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWLuDLtxxlSNoSMCTtJN1Y41Vu9JkrouFe_w&s',
        address:'20 W 34th St, New York, NY 10118, United States',
        coordinates:{
            lat:40.7484405,
            lng:-73.9878531
        },
        creator:'u1'
    },
    {
        id:'p2',
        title:'Empire State Building',
        description:'One of the most famous sky scrapers in the world!',
        imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWLuDLtxxlSNoSMCTtJN1Y41Vu9JkrouFe_w&s',
        address:'20 W 34th St, New York, NY 10118, United States',
        coordinates:{
            lat:40.7484405,
            lng:-73.9878531
        },
        creator:'u2'
    }
];

const UserPlaces = () => {
    const userId = useParams().userId;
    const loaddedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
    return <PlaceList items={loaddedPlaces}/>
};

export default UserPlaces;