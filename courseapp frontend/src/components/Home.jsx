import { Typography,Button, Grid,Container} from "@mui/material"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Course from "./Course";

export default function Home({isAuthenticated}){

    const navigate = useNavigate();

    const [courses,setCourses] = useState([]);

    useEffect( ()=>{
    const fetchCourses = async() =>{

        try {

            const response = await axios.get('http://localhost:3005/admin/courses',{
                headers:
                {
                    "Authorization":"Bearer " + localStorage.getItem("token")
                }
            })

            setCourses(response.data)
            
            
        } catch (error) {
            console.error("Error encountered fetching courses",error)
            setCourses([])
        }
    }

            fetchCourses();
    },[])


    if(!isAuthenticated){

        return (
            <div  style={{ textAlign: 'center', marginTop: '20%' }}>
                <Typography variant="h4">You are not Logged In</Typography>
                <Button variant="contained"
                onClick={()=>{
                    navigate('/login')
                }}
                >
                Go to Login
                </Button>
            </div>
        )
    }

    return (
        <div>

         
            
            <div style={{display:"flex",
                justifyContent:"center"
            }}>
            <Typography variant="h4">Welcome Admin</Typography>

            </div>
            
            <div>
                <Typography>Want to add new course</Typography>
                <Button onClick={()=>{
                    navigate('/addcourse')
                }}>Add Course</Button>
            </div>
            
            <Container>
            <Grid container spacing={4}>
            {
                courses.map(course =>(
                    <Grid item key={course._id} xs={12} sm={6} md={4}>
                <Course key = {course._id} course={course}/>
                </Grid>
            ) )
            }
            </Grid>
            </Container> 

            
            
        
            
            
        
            
            
        </div>
    )
}