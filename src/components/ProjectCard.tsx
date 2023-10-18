import Image from 'next/image'
import React from 'react'

export default function ProjectCard() {
  return (
    <div 
    className="react-reveal singleProject"
    style={{
        backgroundColor: "#081c50",
        animationFillMode: "both",
        animationDuration: "1000ms",
        animationDelay: "0ms",
        animationIterationCount: 1,
        opacity: 1,
        animationName: "react-reveal-757828734500941-1",
    }}
>
    <div className="projectContent">
        <h2 id="ayla-networks" style={{ color: "rgb(239, 243, 244)" }}>
            Ayla Networks
        </h2>
        <Image width={240} height={189}                      
            src="https://abusaid.netlify.app/static/media/eight.055ac6c9fb5bcc42527cc3860cc42d9a.svg"
            alt="Ayla Networks"
        />
        <div className="project--showcaseBtn">
            <a
                href="https://www.aylanetworks.com/"
                target="_blank"
                rel="noreferrer"
                className="jss85"
                aria-labelledby="ayla-networks ayla-networks-demo"
            >
                <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 448 512"
                    id="ayla-networks-demo"
                    className="jss86"
                    aria-label="Demo"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
                </svg>
            </a>
            <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="jss85"
                aria-labelledby="ayla-networks ayla-networks-code"
            >
                <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 640 512"
                    id="ayla-networks-code"
                    className="jss86"
                    aria-label="Code"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z" />
                </svg>
            </a>
        </div>
    </div>
    <p
        className="project--desc"
        style={{
            background: "rgb(15, 12, 65)",
            color: "rgb(239, 243, 244)",
        }}
    >
        This project about Simplifying the Development of Smart Home &amp;
        IoT Solutions.
    </p>
    <div
        className="project--lang"
        style={{
            background: "rgb(15, 12, 65)",
            color: "rgb(239, 243, 244)",
        }}
    >
        <span>React</span>
        <span>SAAS</span>
        <span>React Bootstrap</span>
    </div>
</div>
  )
}
