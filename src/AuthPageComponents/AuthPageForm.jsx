import React from "react";

import TextField from '@mui/material/TextField';

import './AuthPageForm.css'

export default function AuthPageForm() {
    return (
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
            <article className="formContainer">
                <TextField variant="outlined" label="Your email"/>
                <TextField variant="outlined" label="Your password"/>
            </article>
        </div>
    )
}