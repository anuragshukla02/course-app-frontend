import { Typography , Button,Grid} from "@mui/material"
import { useNavigate } from "react-router-dom"
export default function Landing(){

    const navigate = useNavigate()
    return <div style={{
        paddingTop:150,
        display:"flex",
        
    }}>
        <Grid container spacing={2}> 
            <Grid item xs ={6}>
        <div style={{
            padding:50
        }}>
            <Typography variant="h3">Welcome to Coursera</Typography>
            <Button onClick={()=>{
                navigate('/signup')
            }}>Signup</Button>


            <Button onClick={()=>{
                navigate('/login')
            }}>Login</Button>
        </div>
        </Grid>

        <Grid item xs ={6}>
        <div>
        <img width={600} src="https://media1.thehungryjpeg.com/thumbs2/ori_3505925_2278be914890f19f824e8d9aada73a2f5cb4d44d_young-female-teacher-on-lesson-at-blackboard-in-classroom.jpg" alt="" />
        </div>
        </Grid>
        </Grid>
    </div>
}