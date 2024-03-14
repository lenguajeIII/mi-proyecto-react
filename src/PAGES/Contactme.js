import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../components/Particle";


function Contactme() {
  return (
    <Container fluid className="contactme-section">
      <Particle />
        
      <html lang="en" dir="ltr">
         
        <div class="container">
            <div class="item">
                
                <h2 class="item"><i class='bx bxs-building'></i>Contáctanos</h2>
                
            </div>
            </div>


        <div class="container">
            <div class="item">
    
                <div class="container">
                        <div class="title">Registration</div>
                        <div class="content">
                    </div>
                    <form action="#">
                    <div class="user-details">
                        <div class="input-box">
                        <span class="details">Full Name</span>
                        <input type="text" placeholder="Enter your name" required>
                        </input> 
                        </div>
                        <div class="input-box">
                        <span class="details">Username</span>
                        <input type="text" placeholder="Enter your username" required> 
                        </input> 
                        </div>
                        </div>
                        <div class="input-box">
                        <span class="details">Email</span>
                        <input type="text" placeholder="Enter your email" required>
                        </input> 
                        </div>
                        <div class="input-box">
                        <span class="details">Phone Number</span>
                        <input type="text" placeholder="Enter your number" required>
                        </input> 
                        </div>
                        <div class="input-box">
                        <span class="details">Password</span>
                        <input type="text" placeholder="Enter your password" required>
                        </input> 
                        </div>
                        <div class="input-box">
                        <span class="details">Confirm Password</span>
                        <input type="text" placeholder="Confirm your password" required>
                        </input> 
                        </div>




                    <div class="button">
                        <input type="submit" value="Register">
                        </input> 
                    </div>
                    </form>
                </div>

            </div>
            </div>


      </html>   
    </Container>  
  );
}

export default Contactme;