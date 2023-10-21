import Image from 'next/image'
import React from 'react'

export default function QualificationCard() {
  return (
    <div
    className="react-reveal experience-card jss9"
    style={{
      animationFillMode: "both",
      animationDuration: "1000ms",
      animationDelay: "0ms",
      animationIterationCount: 1,
      opacity: 1,
      animationName: "react-reveal-10039651713026-1",
    }}
  >
    <div
      className="expcard-img"
      style={{ backgroundColor: "rgb(29, 155, 240)" }}
    >
      <Image
        width={50}
        height={50}
        src="https://abusaid.netlify.app/static/media/expImgWhite.b9923db466bf4544f6942bc67c5b4a7b.svg"
        alt="experience"
      />
    </div>
    <div className="experience-details">
  

<>

<h4 style={{ color: "rgb(239, 243, 244)" }}>Software Engineer </h4>
      <h5 style={{ color: "rgb(239, 243, 244)" }}>
        Teton Private Limited
      </h5>
      <h6 style={{ color: "rgb(29, 155, 240)",marginTop:5 }}>Jan 2022-Present</h6>

</>



    </div>
    <div className="responsibilities">
  hello
</div>
  </div>
  )
}
