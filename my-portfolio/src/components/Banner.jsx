import React from 'react';

export default function Banner() {
  const downloadcv = () => {
    const pdfUrl = "/path/to/your/oroubAjarmeh-Full Stack Web Developer.pdf"; // Make sure to use a relative path or public path
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "oroubAjarmeh-Full Stack Web Developer.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="main" id="home">
      <div className="main-inner">
        <h1 className="main-title">Hello!</h1>
        <h1 className="main-title about-color">I'm Oroub Ajarmeh!</h1>
        <p className="main-p">
          Passionate full-stack web developer with expertise in creating dynamic,
          <br />
          user-friendly applications. Skilled in both front-end and back-end
          technologies,
          <br />I bring ideas to life through clean code and innovative design.
        </p>
        <div>
          <button
            onClick={downloadcv}
            className="btn-color"
            style={{
              padding: '10px 20px',
              borderRadius: '5px',
              border: 'none',
              cursor: 'pointer',
              backgroundColor: '#A16FEC',
              color: '#fff',
            }}
          >
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
}
