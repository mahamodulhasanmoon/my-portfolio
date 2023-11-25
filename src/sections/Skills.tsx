import React, { useContext } from 'react';
import Marquee from "react-fast-marquee";


function Skills() {

    const skillBoxStyle = {
        backgroundColor:"#081c50",
        boxShadow: `0px 0px 12px rgb(29, 155, 240)`
    }

    const skillsData =  [
        'HTML',
        'Figma',
        'Javascript',
        'CSS',
        'React',
        'Docker',
        'Next JS',
        'Node JS',
        'Bootstrap',
        'Go',
        'Typescript',
        'Figma',
        'Ubuntu',
        'MongoDB',
        'Tailwind',
        'MySQL',
        'PostgreSQL',
        'MaterialUI',
        'Firebase'
    ]

    return (
        <div className="skills">
    <div className="projects--header">
        <h1 style={{ color: "rgb(29, 155, 240)" }}>Skills</h1>
    </div>
            <div className="skillsContainer">
                <div className="skill--scroll">
                    <Marquee
                        gradient={false}
                        speed={80}
                        pauseOnHover={true}
                        pauseOnClick={true}
                        delay={0}
                        play={true}
                        direction="left"
                    >
                        {skillsData.map((skill, id) => (
                            <div className="skill--box" key={id} style={skillBoxStyle}>
                                {/* <img src={skillsImage(skill)} alt={skill} /> */}
                                <h3 style={{ color: "rgb(239, 243, 244)" }}>
                                    {skill}
                                </h3>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default Skills