import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";
import React from "react";

export default function Projects() {
    return (
        <div
            className="projects"
            id="projects"
           
        >
            <div className="projects--header">
                <h1 style={{ color: "rgb(29, 155, 240)" }}>Projects</h1>
            </div>
            <div className="projects--body">
                <div className="projects--bodyContainer">
                   <ProjectCard/>
                   <ProjectCard/>
                   <ProjectCard/>
                </div>
            </div>
        </div>
    );
}
