import "../App.css";
export default function ContactUs() {
  return (
    <center>
      <div className="Contacts glass" id="contact">
        <h1>Contact</h1>
        <div className="emailCont">
          <div className="inputS">
            <p className="info">
              Name:<span className="required">*</span>
            </p>
            <input
              type="text"
              name="Name"
              id="Name"
              required="required"
              placeholder="Enter your name"
            />
          </div>
          <div className="inputS">
            <p className="info">
              Email:<span className="required">*</span>
            </p>
            <input
              type="text"
              name="Email"
              id="Email"
              required="required"
              placeholder="Email"
            />
          </div>
          <div className="inputS">
            <p className="info">Phone number:</p>
            <input
              type="number"
              maxLength={10}
              name="Phone"
              id="Phone"
              className="phnumber"
              placeholder="e.g:0555555555"
            />
          </div>
          <div className="inputS">
            <p className="info">Subject:</p>
            <input type="text" name="Subj" id="Subj" placeholder="Subject" />
          </div>
          <div className="inputS">
            <p className="info">
              Message:<span className="required">*</span>
            </p>
            <textarea
              name="desc"
              id="desc"
              required="required"
              placeholder="say somethin"
            ></textarea>
          </div>
          <button type="submit">
            <span className="btext">Send</span>
          </button>
          <div className="ourContacts">
            <p>Your can reach us in:</p>
            <br />
            <a href="#header">
              <img
                src="/img/icons8-linkedin-50 (1).png"
                alt="LinkedIn"
                className="socials"
              />
            </a>
            <a href="#header">
              <img
                src="/img/icons8-github-50 (2).png"
                alt="Github"
                className="socials"
              />
            </a>
          </div>
        </div>
      </div>
    </center>
  );
}
