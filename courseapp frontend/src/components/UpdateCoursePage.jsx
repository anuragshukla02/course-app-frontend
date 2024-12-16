import axios from "axios";
import { useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Typography,Box,Button,Container,TextField } from "@mui/material";
export default function UpdateCoursePage(){

    const [course,setCourse] = useState({title:"",description:"",imageLink:""})

    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        const fetchCourse = async() =>{

            try {
                const response = await axios.get(`http://localhost:3005/admin/course/${id}`,
                    {
                        headers:{
                           "Authorization":"Bearer " + localStorage.getItem("token")
                        }
                    }
                )
            
                setCourse(response.data)
                
            } catch (error) {
                console.error(error)
            }
          
        }

        fetchCourse();
    },[id])


    const handleChange = (e)=>{
        const {name,value} = e.target
        setCourse({...course,[name]:value})
    }

    const handleSubmit =async (e)=>{
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3005/admin/courses/${id}`,{
                ...course , price:100 ,published:true , _id:id
            },
            {
                headers:{
                    "Authorization":"Bearer " + localStorage.getItem("token")
                }
            }
        )
            navigate('/admin/home')
            
        } catch (error) {
            console.error(error)
        }
    }

    return (
    <>
    <Container maxWidth="sm">
  <Box my={4}>
    <Typography variant="h4" gutterBottom>
      Update Course
    </Typography>
    <form onSubmit={handleSubmit}>
      <TextField
        label="Title"
        name="title"
        value={course.title ||""}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Description"
        name="description"
        value={course.description||""}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Image URL"
        name="imageLink"
        value={course.imageLink||""}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Update
      </Button>
    </form>
  </Box>
</Container>
    </>
    )
}