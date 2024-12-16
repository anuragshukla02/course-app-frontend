import { BrowserRouter as Router ,Routes, Route } from "react-router-dom"

import Appbar from "./components/Appbar"
import Landing from "./components/Landing"
import Signup from "./components/Signup"
import Login from "./components/Login"
import AddCourse from "./components/AddCourse"
import Home from "./components/Home"
import { useEffect, useState } from "react"
import axios from "axios"
import UpdateCoursePage from "./components/UpdateCoursePage"

function App() {
  const [isAuthenticated,setIsAuthenticated] = useState(false);
  const [username,setUsername] = useState("");

  
    
    useEffect(() => {
      const fetchUser = async () => {
        const token = localStorage.getItem("token");
        if (token) {
          try {
            const response = await axios.get("http://localhost:3005/admin/me", {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
          
            setUsername(response.data.username);
            setIsAuthenticated(true);
          } catch (error) {
            console.error("Error fetching user details:", error);
            setIsAuthenticated(false); // Handle error case
            setUsername(""); // Optionally clear username
          }
        } else {
          setIsAuthenticated(false); // No token found, user is not authenticated
          setUsername(""); // Clear username
        }
      };
    
      fetchUser(); // Call fetchUser immediately when component mounts
    
    }, []); // Empty dependency array to run only once on component mount
    
  



  const handleLogin = (token,username)=>{
    localStorage.setItem("token",token)
    setUsername(username)
    setIsAuthenticated(true)
  }

  const handleLogout = ()=>{
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setUsername("");
  }

  return <div 
          style={{
            width:"100vw",
            height:"100vh",
            backgroundColor:"#eeeeee"
          }}>

           <Router>
                    <Appbar isAuthenticated={isAuthenticated} username= {username} onLogout = {handleLogout}/> 
                    <Routes>
                            <Route path="/" element={<Landing/>}></Route>
                            <Route path="/signup" element={<Signup onLogin={handleLogin}/>}  />
                            <Route path="/login" element={<Login onLogin={handleLogin}/>}  />
                            <Route path="/addcourse" element={<AddCourse/>}/>
                            <Route path="/admin/home" element={<Home isAuthenticated={isAuthenticated}/>}/>
                            <Route path = "/updatecourse/:id" element={<UpdateCoursePage/>} />
                            
                    </Routes>
            </Router>
          
          
          
        
        </div>

  
}

export default App
