import "./aboutus.css";
import facebook from "../assests/facebook.svg";
import instagram from "../assests/instagram.svg";
import linkedin from "../assests/linkedin.svg";
const Aboutus = ()=>{
    return (
        <>
        <div className="aboutus-container">
            <div className="aboutus-first-span">
            <p className="aboutus-main-text">About us</p>
            <p className="aboutus-data">Doorstep Wash & Dryclean Service</p>
            </div>
            <div className="aboutus-first-span">
            <span className="aboutus-span-home">Home</span>
            <span className="aboutus-span-Pricing">Pricing</span>
            <span className="aboutus-span-Career">Career</span>
            <span className="aboutus-span-Contact">Contact</span>
            </div>
            <div className="abouts-second-span">
            <span className="aboutus-span-signin">Sign In</span>
            <span className="aboutus-span-Blogs">Blogs</span>
            </div>
            <div className="aboutus-third-span">
            <span className="aboutus-span-register">Register</span>
            <span className="aboutus-span-create">Create</span>
            </div>
            <p className="aboutus-socialmedia">SOCIAL MEDIA</p>
            <div className="aboutus-images">
            <img src={facebook} alt="err" className="aboutus-facebook"/>
            <img src={instagram} alt="err" className="aboutus-instagram"/>
            <img src={linkedin} alt="err" className="aboutus-linkedin"/>

            </div>


        </div>
        </>
    )
}

export default Aboutus;