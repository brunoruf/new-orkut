import Tab from "../Tab/Tab";
import TextField from "../TextField/TextField";
import { StyledNewAction } from "./StyledNewAction";
import { useState } from "react";
import Button from "../Button/Button";
        

const NewAction = ({newCommunity}) => {
    
    const [newCommunityName, setnewCommunityName] = useState('')
    const [newCommunityUrl, setnewCommunityUrl] = useState('')

    const handlenewCommunityName = (e) => {
        setnewCommunityName(e.target.value)
    }
    
    const handlenewCommunityUrl = (e) => {
        setnewCommunityUrl(e.target.value)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        newCommunity({title: newCommunityName, imageUrl:newCommunityUrl})  
    }


    return (
        <StyledNewAction>
                <h2>What do you wanna do today?</h2>
                <div className="split-line"></div>
                <div className="tabs">
                    <Tab 
                        name="Create a Community"
                        active="active"
                    />
                    <Tab
                        name="New Testimonial"
                    />
                    <Tab
                        name="New Scrap"
                    />
                </div>
                <form label="dawdwa" onSubmit={e => handleFormSubmit(e)}>
                    <TextField
                        name="new-community"
                        placeholder="Give a name to you new community"
                        required={true}
                        label="Nome"
                        onChange = {e => handlenewCommunityName(e)}
                        value= {newCommunityName}
                    />
                        <TextField
                        name="new-community-url"
                        placeholder="Cover image URL"
                        required={true}
                        label="Cover Image"
                        onChange = {e => handlenewCommunityUrl(e)}
                        value= {newCommunityUrl}
                    />
                    <Button text="Create" />
                </form>
        </StyledNewAction>
    )
}

export default NewAction;
