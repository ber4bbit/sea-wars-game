import React from "react";

import SignInForm from "./SignIn Components/SignInForm";

export default function AuthPage() {
    return (
        <div style={{display: "flex", justifyContent: "center", textAlign: "center", flexDirection: "column", marginTop: "15%"}}>
            <h2>Please enter your credits down below</h2>
            <SignInForm/>
        </div>
    )
}