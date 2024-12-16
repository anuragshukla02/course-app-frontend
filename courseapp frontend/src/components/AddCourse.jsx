import { Typography,Card,TextField,Button} from "@mui/material"
import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function AddCourse(){
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const navigate = useNavigate();
   
    return (
        <div>
            <div style={{
                display:"flex",
                justifyContent:"center",
                marginTop:"150px"
            
            }}>
                <Typography variant="h5">Add Course</Typography>
            </div>

            <div style={{display:"flex",
                justifyContent:"center"
            }}>
                <Card  variant="outlined" style={{width:400,padding:20}}>

                    <TextField 
                        fullWidth = {true}
                        label = "Title"
                        variant="outlined"
                        onChange={(e)=>{
                                setTitle(e.target.value)
                        }}
                    />


                    <TextField
                        variant="outlined"
                        fullWidth
                        label= "Description"
                        onChange={(e)=>{
                            setDescription(e.target.value)
                        }}
                    
                    />

                        <Button
                        variant = "contained"
                        size="large"
                        onClick={async()=>{
                           
                           try {
                            const response = await axios.post('http://localhost:3005/admin/courses',{
                                title:title,
                                description:description,
                                price:100,
                                imageLink:"",
                                published:true
                                },  
                            
                                {
                                headers:
                                {
                                    "Authorization": "Bearer " + localStorage.getItem("token")
                                }
                    
                                }
                            )

                            if(response.data.message==="course created successfully"){
                                navigate('/admin/home')
                            }
                            
                                } 
                                catch (error){
                                console.error("error is ",error)
                                }


                        }}
                        >
                        Add Course
                        </Button>
                
                </Card>


            </div>
        </div>
    )
}