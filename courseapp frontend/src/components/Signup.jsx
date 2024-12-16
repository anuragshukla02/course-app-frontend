import { Typography,Card } from "@mui/material"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Signup({onLogin}){
    const navigate = useNavigate();
    const [email,setEmail]= useState("");
    const [password,setPassword] = useState("");
    return (
        <div>
        <div style={{
            display:"flex",
            justifyContent:"center",
            paddingTop:150,
            marginBottom:10
        }}>

        
        <Typography variant="h5">Welcome to Coursera :Signup here</Typography>
            
        </div>
            <div style={{
                display:"flex",
                justifyContent:"center"
            }}>
                <Card variant= "outlined"
                style={{width:400,padding:20}}
                >
                    <TextField
                    fullWidth = {true}
                    label= "Email"
                    variant="outlined"
                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }}
                    />
                    <br/> <br />


                    <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    onChange={(e)=>{
                        setPassword(e.target.value )
                    }}
                    />
                    <br /> <br />


                    <Button 
                    variant="contained"
                    size="large"
                    onClick={async()=>{
                        const response = await axios.post('http://localhost:3005/admin/signup',{
                            username:email,
                            password:password
                        })
                        if(response.data.token){
                        
                        // localStorage.setItem("token",response.data.token)
                            onLogin(response.data.token,email)
                            navigate("/admin/home")
                        }
                    }}
                    >
                        Signup
                    </Button>



                </Card>
                
                
            </div>
        
        </div>
    )
}
