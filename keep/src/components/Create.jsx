import React, { useState } from "react";

function Create(){
    const[note,setNote]=useState({
        title:"",
        content:"" 
    })

    function handleChange(event){
        const{name,value}=event.target;

        setNote(prevNote =>{
            return{
                ...prevNote,
                [name]: value
            }
        })

    }

    function submit(event){
        event.preventDefault();
    }

    return(
        <div>
            <form>
                <input name="title" onChange={handleChang} value={note.title} placeholder="Title" />
                <textarea name="content" onChange={handleChang} value={note.content} placeholder="Take a note..." rows="3" ></textarea>
                <button onClick={submit}>Add</button>
            </form>
        </div>
    )
}

export default Create;