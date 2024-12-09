// eslint-disable-next-line no-unused-vars
import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function About() {
  return (
    <div>
      <div className="container" >
        <h1 className="my-3 text-center">About Us</h1><br />
        <p>
          <b>TextUtils</b> - A Linguistic Playground for the Analytically Inclined. <br /><br />
          TextUtils is more than just a simple text transformation tool - it is a veritable playground for the data-driven wordsmith. Whether you are a writer, editor, or just someone who revels in the nuances of language, this intuitive application puts the power of text analysis right at your fingertips.
          <br /><br />
          With a clean, minimalist interface, TextUtils invites you to unleash your inner linguistic alchemist. Transform text from uppercase to lowercase, or vice versa, with a single click. Reverse the flow of words, Copy the desired text and also Clear the terminal using the copy and clear option simultaneously. And of course, dive deep into the metrics that matter most - word counts, character totals, and even estimated reading times.
          <br /><br />
          But TextUtils is more than just a pretty face. Beneath the sleek surface lies a robust engine fueled by the passion of its creator, <strong>Badal Kumar Nayak</strong> . This tool was built to empower users, providing valuable insights that can inform your writing, editing, or content strategy decisions.
          <br /><br />
          So why not step into the TextUtils sandbox and let your textual creativity run wild? Whether you are perfecting a poem, crafting the perfect social media post, or simply exploring the beauty of language, this application is ready to be your linguistic co-conspirator. The only limit is your imagination.
        </p>
      </div>

      <div className="container my-5">
      <h2 className="text-center mb-4">Connect with Me</h2>
      <br />
      <div className="row justify-content-center g-4">
        {/* Facebook */}
        <div className="col-6 col-md-2 text-center">
          <a
            href="https://www.facebook.com/profile.php?id=100030883747754"
            target="_blank"
            rel="noopener noreferrer"
            className="d-inline-block"
            style={{
              padding: "10px",
              borderRadius: "50%",
              backgroundColor: "#f0f0f0",
              border: "2px solid #ccc",
            }}
          >
            <i className="fab fa-facebook fa-3x text-primary"></i>
          </a>
          <p className="mt-2">Facebook</p>
        </div>

        {/* LinkedIn */}
        <div className="col-6 col-md-2 text-center">
          <a
            href="www.linkedin.com/in/badalkumarnayak10"
            target="_blank"
            rel="noopener noreferrer"
            className="d-inline-block"
            style={{
              padding: "10px",
              borderRadius: "50%",
              backgroundColor: "#f0f0f0",
              border: "2px solid #ccc",
            }}
          >
            <i className="fab fa-linkedin fa-3x text-primary"></i>
          </a>
          <p className="mt-2">LinkedIn</p>
        </div>

        {/* GitHub */}
        <div className=" col-6 col-md-2 text-center">
          <a
            href="https://github.com/Badal-10"
            target="_blank"
            rel="noopener noreferrer"
            className="d-inline-block"
            style={{
              padding: "10px",
              borderRadius: "50%",
              backgroundColor: "#f0f0f0",
              border: "2px solid #ccc",
            }}
          >
            <i className="fab fa-github fa-3x text-dark"></i>
          </a>
          <p className="mt-2">GitHub</p>
        </div>

        {/* Instagram */}
        <div className="col-6 col-md-2 text-center">
          <a
            href="https://www.instagram.com/badalkumar_010"
            target="_blank"
            rel="noopener noreferrer"
            className="d-inline-block"
            style={{
              padding: "10px",
              borderRadius: "50%",
              backgroundColor: "#f0f0f0",
              border: "2px solid #ccc",
            }}
          >
            <i className="fab fa-instagram fa-3x text-danger"></i>
          </a>
          <p className="mt-2">Instagram</p>
        </div>

        {/* Email */}
        <div className="col-6 col-md-2 text-center">
          <a
            href="nayakbadal757@gmail.com"
            className="d-inline-block"
            style={{
              padding: "10px",
              borderRadius: "50%",
              backgroundColor: "#f0f0f0",
              border: "2px solid #ccc",
            }}
          >
            <i className="fas fa-envelope fa-3x text-warning"></i>
          </a>
          <p className="mt-2">Email</p>
        </div>
      </div>
    </div>

    </div>
  )
}
