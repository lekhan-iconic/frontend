import "./App.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Student from "./pages/Student";
import Login from "./pages/Login";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const navigate = useNavigate();

  // const handleLogin = () => {
  //   // Perform login logic here

  //   // Assuming successful login, set isLoggedIn to true
  //   setIsLoggedIn(true);

  //   // Navigate to the desired route
  //   navigate("/Admin"); // Example: Navigate to the Admin page after login
  // };

  return (
    <>
      {/* <Login /> */}
      <BrowserRouter>
        {/* <Login onLogin={handleLogin} /> */}

        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Admin" element={<Admin />}></Route>
          <Route path="/Student" element={<Student />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
