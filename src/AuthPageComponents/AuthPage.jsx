import React from "react";

import AuthPageForm from "./AuthPageForm";

export default function AuthPage() {
    return (
        <div style={{display: "flex", justifyContent: "center", textAlign: "center", flexDirection: "column"}}>
            <h1>This is authentication page!</h1>
            <AuthPageForm/>
        </div>
    )
}