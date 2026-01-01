import React from "react";

function AboutMe() {
  return (
    <section>
      <div  style={{display: "flex", flexDirection: 'row', alignItems: "center" }}>
      <div>
        <h2>About Me</h2>
        <div>
          <p>
            Hello! I am a passionate developer specializing in modern web technologies. 
            I love building projects that make a difference and collaborating on exciting ideas.
          </p>
        </div>
      </div>
      <img
          src={process.env.PUBLIC_URL + "/Profile.png"}
          alt="Profile"
          className="about-profile-img"
          style={{
            width: "200px",
            height: "120px",
            borderRadius: "50%",
            marginRight: "2rem",
            objectFit: "cover",
            boxShadow: "0 2px 8px rgba(0,0,0,0.13)"
          }}
        />
        </div>
    </section>
  );
}

export default AboutMe;
