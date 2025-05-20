import { useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2"; // Import SweetAlert

export default function Contact() {
  const [captchaValue, setCaptchaValue] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Handle CAPTCHA change
  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Email format validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailPattern)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Check if CAPTCHA is completed (you can enable it when required)
    // if (!captchaValue) {
    //   setError('Please complete the CAPTCHA.');
    //   return;
    // }

    // Clear any previous errors
    setError("");

    // EmailJS send call
    const templateParams = {
      name: name,
      email: email,
      message: message,
    };

    emailjs
      .send(
        "service_or66nvs",
        "template_byn78oh",
        {
          name,
          email,
          message,
        },
        "-rJ_ERf_0tM3hodn8"
      )
      .then(
        (response) => {
          console.log("Message sent successfully", response);
          // Clear the form after successful submission
          setName("");
          setEmail("");
          setMessage("");
          setCaptchaValue("");
          // Show SweetAlert success message
          Swal.fire({
            title: "Success!",
            text: "Your message has been sent successfully!",
            icon: "success",
            confirmButtonText: "Okay",
          });
        },
        (error) => {
          console.error("Error sending message", error);
          // Show SweetAlert error message
          Swal.fire({
            title: "Error!",
            text: "Something went wrong. Please try again later.",
            icon: "error",
            confirmButtonText: "Okay",
          });
        }
      );
  };

  return (
    <div
      className="contact-me container col-lg-12"
      id="connect"
      style={{ padding: "20px", borderRadius: "8px" }}
    >
      <div className="row">
        <div className="col-lg-12 col-md-7 mb-4">
          <div
            className="small about-color"
            id="about"
            style={{
              fontWeight: "bold",
              marginBottom: "10px",
              color: "#A16FEC",
            }}
          >
            CONTACT
          </div>
          <h2
            style={{ fontSize: "1.8rem", color: "#333", marginBottom: "20px" }}
          >
            Getting In Touch With Me
          </h2>
          <p style={{ color: "#555", lineHeight: "1.6" }}>
            Thank you for visiting my website! I am happy to help answer any
            questions you may have. Please fill out the form below and I will
            get back to you as soon as possible.
          </p>
          {error && <p style={{ color: "red", fontSize: "1rem" }}>{error}</p>}
          <form
            className="frm"
            onSubmit={handleSubmit}
            style={{ marginTop: "20px" }}
          >
            <div className="contact-info">
              <div className="row mb-3">
                <div className="col-lg-6 col-md-12 mb-3">
                  <label className="form-label" style={{ color: "#333" }}>
                    Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="col-lg-6 col-md-12 mb-3">
                  <label className="form-label" style={{ color: "#333" }}>
                    Email:
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <textarea
                  placeholder="Write your message here..."
                  className="form-control"
                  style={{ height: "150px" }}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Google reCAPTCHA */}
            {/* <div className="captcha mb-3">
    <ReCAPTCHA sitekey="YOUR_SITE_KEY" onChange={handleCaptchaChange} />
  </div> */}

            <button
              type="submit"
              className="btn btn-primary"
              style={{ backgroundColor: "#A16FEC", color: "#fff" }}
            >
              Send Message
            </button>
          </form>
        </div>
        {/* <div className="col-lg-4 col-md-5">
          <div className="h-100 d-flex flex-column align-items-center justify-content-center" style={{ padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
            <h4>Contact Information</h4>
            <p style={{ fontSize: '1rem', color: '#777', marginTop: '20px', textAlign: 'center' }}>
              Feel free to reach out to me for any inquiries or questions.
            </p>
            <p style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <span style={{ width: '30px', height: '30px', backgroundColor: '#A16FEC', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '10px' }}>
                <i className="fas fa-phone-alt" style={{ color: '#fff' }}></i>
              </span>
              +962790647508
            </p>
            <p style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ width: '30px', height: '30px', backgroundColor: '#A16FEC', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '10px' }}>
                <i className="fas fa-envelope" style={{ color: '#fff' }}></i>
              </span>
              ajarmehoroub12@gmail.com
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
}
