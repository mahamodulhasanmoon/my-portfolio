import Image from "next/image";
import QualificationCard from "./QualificationCard";

export default function Experiences() {
    return (
        <div className="projects" id="projects">
            <div className="projects--header">
                <h1 style={{ color: "rgb(29, 155, 240)" }}>Experiences</h1>
            </div>
            <div className="projects--body">



            {
    Array.from({ length: 3 }).map((_, index) => (
        index  % 2 === 0 ? (
            <div
                key={index}
                className="qualification_data"
            >
                <QualificationCard />

                <div>
                    <span className="qualification_rounder"> </span>
                    <span className="qualification_line"></span>
                </div>
            </div>
        ) : (
            <div key={index} className="qualification_data">
            <div></div>

            <div>
                <span className="qualification_rounder"> </span>
                <span className="qualification_line"></span>
            </div>

            <QualificationCard />
        </div>
        )
    ))
}






            </div>
        </div>


    );
}
