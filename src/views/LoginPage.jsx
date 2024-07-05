import { Card, Typography, CardContent, Divider, Button, Link } from "@mui/material";
import { CssBaseline,Icon } from "@mui/material";
import TextInput from "../components/UI/TextInput";
import './LoginPage.css';
import GoogleIcon from '@mui/icons-material/Google';
import { MobileFriendly } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LoginPage() {
    const navigate = useNavigate();
    const [loginData,setLoginData] = useState({
        userId:'',
        password:'',
    })
    function changeLoginInput(event){
        setLoginData((prev)=>({
            ...prev,
            [event.target.name]:event.target.value,
        }))
    }
    function submitLoginForm(event){
        event.preventDefault();
        const fd = new FormData(event.target);
        for(const [key,value] of fd){
            console.log(key,value);
        }
        navigate('/form')
    }
    return (
        <>
            <CssBaseline />
            <Card className="loginContainer" align='center'>
                    <Typography className="BoldText" variant="subtitle2" gutterBottom>
                        Welcome! Sign in to your account
                    </Typography>
                <CardContent>
                    <form onSubmit={submitLoginForm}>
                        <TextInput changeLoginInput={changeLoginInput} placeholder="Enter User Id" name="userId" value={loginData.userId}></TextInput>
                        <TextInput changeLoginInput ={changeLoginInput} placeholder="Enter Password" name="password" value={loginData.password}></TextInput>
                        <Button type="submit" color="orangish" sx={{ color:"white" }} className="btn" variant="contained">Continue</Button>
                        <Typography variant="body2">Reset Password?<Link className="reset-link" href="#">Click Here</Link></Typography>
                    </form >
                    <Divider><Typography className="BoldText" variant="body2">Or</Typography></Divider>
                    <Button className="btn"><GoogleIcon/>Sign in with Google</Button>
                    <Button className="btn"><MobileFriendly/>Sign in with OTP</Button>
                </CardContent>
            </Card>
        </>
    );
}