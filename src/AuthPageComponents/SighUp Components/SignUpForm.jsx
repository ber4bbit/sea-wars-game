import React from "react";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import './SignUpForm.css';

export default function SignUpForm() {
    return (
        <div style={{ display: "flex", justifyContent: "center"}}>
                <form action="" className="formContainerSignUp">
                    <section style={{width: "100%", display: "flex", justifyContent: "space-between"}}>
                        <TextField
                            style={{width: "49%"}}
                            variant="outlined"
                            label="Your nickname *"
                            margin="dense"
                            color="success"
                        />
                        <TextField
                            style={{width: "49%"}}
                            variant="outlined"
                            label="Your email *"
                            margin="dense"
                            color="success"
                        />
                    </section>
                    <TextField
                        variant="outlined"
                        label="Your password *"
                        margin="dense"
                        color="success"
                    />
                    <TextField
                        variant="outlined"
                        label="Repassword *"
                        margin="dense"
                        color="success"
                    />
                    <Button variant="contained" color="success" style={{marginTop: "12px"}}>Create account</Button>
                </form>
        </div>
    )
}