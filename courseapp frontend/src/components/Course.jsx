import { Card,Button,CardMedia,CardContent,Typography} from "@mui/material";
import { useNavigate } from "react-router-dom";

function Course({course}){

    const navigate = useNavigate()

    const handleUpdate = ()=>{
        navigate(`/updatecourse/${course._id}`)
    } 

    return (
        <>
        <Card sx={{ maxWidth:350,maxHeight:250 }}>
      <CardMedia
        component="img"
        height="100"
        image={course.imageLink}
        alt={course.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {course.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {course.description}
        </Typography>
        <Button 
            onClick={handleUpdate}
        variant="contained" color="primary" sx={{ mt: 2 }}>
          Update
        </Button>
      </CardContent>
    </Card>
          
        </>
    )
}

export default Course;