import Image from "next/image";

export default function BlogCard() {
  return (
    <div>
      <a
        className="react-reveal singleBlog"
        href="https://dev.to/said7388/top-20-reactjs-interview-questions-3a0m"
        target="_blank"
        rel="noreferrer"
        style={{
            backgroundColor: "#black",
          animationFillMode: "both",
          animationDuration: "1000ms",
          animationDelay: "0ms",
          animationIterationCount: 1,
          opacity: 1,
          animationName: "react-reveal-896616389888317-1",
        }}
      >
        <div
          className="singleBlog--image"
          style={{ backgroundColor: "rgb(15, 12, 65)" }}
        >
          <Image 
          width={320}
          height={208}
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--0aHXJwv9--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/aynueyx9eqj4sr13e3ct.jpg"
            alt="Top 20 React.JS interview questions."
          />
        </div>
        <div className="singleBlog--body">
          <div className="blog-card-header">
            <p style={{ color: "rgb(29, 155, 240)" }}>8 months ago</p>
            <div className="public-reaction">
              <p
                className="blog-card-reaction"
                style={{ color: "rgb(29, 155, 240)" }}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                  />
                </svg>
                <span>103</span>
              </p>
              <p
                className="blog-card-reaction"
                style={{ color: "rgb(29, 155, 240)" }}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 9.8 11.2 15.5 19.1 9.7L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64z" />
                </svg>
                <span>6</span>
              </p>
            </div>
          </div>
          <p style={{ color: "rgb(29, 155, 240)" }}>3 Min Read</p>
          <h3 style={{ color: "rgb(239, 243, 244)", fontWeight: 500 }}>
            Top 20 React.JS interview questions.
          </h3>
          <h6 style={{ color: "rgb(239, 243, 244)" }}>
            As a React developer, it is important to have a solid understanding
            of the frameworks key concepts...
          </h6>
        </div>
      </a>
    </div>
  );
}
