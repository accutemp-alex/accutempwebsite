import { NavLink } from "react-router-dom";

function Home(){
    return(
        <div>
            <h1>Welcome to Accu-Temp Cooling & Heating Systems Inc.</h1> 
            <p>At Accu-Temp, we revolutionize the way you experience your built environment. Our cutting-edge building automation systems empower you to control and optimize every aspect of your space, from energy efficiency to comfort, security, and beyond</p>
            <div className="flex-container">
                <div>
                    <img></img>
                    <NavLink to="/BuildingAutomation" class="clickable"> 
                        <p>Building Automation</p>
                    </NavLink>
                    <NavLink to="/SystemsIntegration" class="clickable"> 
                        <p>Systems Integration</p>
                    </NavLink>
                </div>
            </div>
        </div>
     
    )
}

export default Home;