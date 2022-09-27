import './Contact.css'
import {FaInstagram} from 'react-icons/fa';
import { FaPeriscope } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import {FaFacebook} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import Untitled from "../assets/Untitled.png";

const Contact = () => {
    return (  
        <div className="cont">
            <form action="" className='main'>
                <h2 style={{color: "#000957"}}>Let's Talk</h2>
                <p>Contact us here by leaving a direct message and we will get back to you promptly</p>
                    <label htmlFor="nam">Your Name</label><br />
                    <input type="text" name="nam" /><br />
                    <label htmlFor="nam">Your Email</label><br />
                    <input type="email" name="nam" /><br />
                    <label htmlFor="msg">Your message</label><br />
                    <textarea name="mdg" id="" cols="26" rows="6"></textarea><br />
                    <button className="send">Send message</button>
            </form>
            <div className="icon">
                <img src={Untitled} alt="" />
               <div className="info">
                <div className="adrs"><FaPeriscope style={{color: "black"}}/>  E-Learning Centre VSSUT, Burla</div>
                <div className="phn"><FaPhoneAlt style={{color: "black"}}/>  98611 22806</div>
                <div className="mail"><FaEnvelope style={{color: "black"}}/>  contact@vssutinnobuzz.com</div>
                <div className="social"><FaFacebook style={{color: "black"}}/>&emsp;&emsp;&emsp;<FaInstagram style={{color: "black"}}/>&emsp;&emsp;&emsp;<FaTwitter style={{color: "black"}}/></div>
                </div> 
            </div>
        </div>
    );
}
 
export default Contact;
