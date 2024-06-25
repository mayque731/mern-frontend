import React,{useCallback} from "react";
import './NewPlace.css';
import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators';

const NewPlace = () => {
    const titleInputHandler = useCallback((id, value, isValid) => {},[]);
    const descriptionInputHandler = useCallback((id, value, isValid) => {},[]);
    return <form className="place-form">
        <Input 
        id="title"
        element ="input" 
        type="text" 
        label="Title" v
        validators={[VALIDATOR_REQUIRE()]} 
        errorText="Input a valid title" 
        onInput={titleInputHandler}
        />
        
        <Input 
        id="description"
        element ="textarea" 
        type="text" 
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]} 
        errorText="Input a valid description"
        onInput={descriptionInputHandler}
        />
        </form>;
};

export default NewPlace;