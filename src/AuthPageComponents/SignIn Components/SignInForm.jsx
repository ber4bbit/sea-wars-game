import React, {useState} from "react";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import ModalWindow from "../ModalWindow/ModalWindow";
import SignUpForm from "../SighUp Components/SignUpForm";

export default function SignInForm() {
    const [ modalActive, setModalActive ] = useState(false);
    return (
        <div style={{ display: "flex", justifyContent: "center"}}>
            <form action="" className="formContainerSignIn">
                <TextField
                    variant="outlined"
                    color="success"
                    label="Your email *"
                    margin="dense"
                />
                <TextField
                    variant="outlined"
                    color="success"
                    label="Your password *"
                    margin="dense"
                />
                <Button variant="contained" color="success" style={{marginTop: "12px"}}>Sign In</Button>
                <h5>Or if you have no account yet create it</h5>
                <Button variant="outlined" color="success" onClick={() => setModalActive(true)}>Sign Up</Button>
                <ModalWindow active={ modalActive } setActive={ setModalActive }>
                    <SignUpForm/>
                </ModalWindow>
            </form>
        </div>
    )
}