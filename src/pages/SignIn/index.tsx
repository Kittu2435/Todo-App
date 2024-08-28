import { Card, CardActions, CardContent, Input } from "@mui/material";
import React, { useState } from "react";
import ButtonComponent from "../../atoms/Button";

const SignIn = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Email:", formData.email);
        console.log("Password:", formData.password);
        setFormData({
            email: "",
            password: "",
        });
    };
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center' }}>
            <h1> Sign In Page </h1>
            <Card style={{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center', width: '400px', height: '300px', justifyContent: 'center' }}>
                <CardContent >
                    <form style={{
                        display: 'flex', flexDirection: 'column', gap: '25px', alignItems: 'center'
                    }} onSubmit={handleSubmit}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={{ padding: '10px', fontSize: '16px' }}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            style={{ padding: '10px', fontSize: '16px' }}
                        />
                        <CardActions>
                            <button type="submit" style={{ padding: '10px', fontSize: '16px', cursor: 'pointer' }}>
                                Sign In
                            </button>
                        </CardActions>
                    </form>
                </CardContent>
            </Card>
        </div >
    )
}

export default SignIn;