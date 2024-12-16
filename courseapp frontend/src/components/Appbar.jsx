import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom"


export default function Appbar({username,isAuthenticated,onLogout}){
    
    const navigate = useNavigate()


 

    return <div style={{
        display: "flex",
        justifyContent: "space-between",
        padding: 4
    }}>
        
        <div>
            <Typography variant={"h6"}>Coursera</Typography>
        </div>

        { isAuthenticated ? (

            <div style={{display:"flex"}}>

                <Typography variant='h6' style={{marginRight:5}}>{username}</Typography>
                <Button
                size='large'
                variant='contained'
                onClick={onLogout}
                >Logout</Button>
            </div>

        )
            
            
          : ( <div style={{
            display:"flex"
        }}>

            <div style={{
                marginRight:"10px"
            }}>
                <Button variant='contained'
                onClick={()=>{
                    navigate('/signup')
                }}
                >Signup</Button>
            </div>

            <div>
                <Button variant='contained'
                onClick={()=>{
                    navigate('/login')
                }}>Login</Button>
            </div>

        </div> )
        
            }
        
    </div> 
    
}