import React from "react";

const IntakeForm = () => {
  return (
    <div className="formbold-main-wrapper">
      <div className="formbold-form-wrapper">
        <img src="https://i.ibb.co/fCgBD3r/work-risk-free.png" />
        <form action="https://api.web3forms.com/submit" method="POST">
          <input
            type="hidden"
            name="access_key"
            value="bc4098ae-065a-492c-ac83-1354724249a4"
          />
          <input
            type="hidden"
            name="subject"
            value="New Submission KleverBPO"
          ></input>
          {/* Full Name Question */}
          <div className="formbold-input-group">
            <label for="name" className="formbold-form-label">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="formbold-form-input"
              required
            />
          </div>
          {/* Email Question */}
          <div className="formbold-input-group">
            <label for="email" className="formbold-form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="formbold-form-input"
              required
            />
          </div>
          {/* Phone Number Question */}
          <div className="formbold-input-group">
            <label for="number" className="formbold-form-label">
              Phone Number
            </label>
            <input
              type="text"
              name="Phone Number"
              id="Phone Number"
              placeholder="Enter your phone number"
              className="formbold-form-input"
              required
            />
          </div>
          {/* Full Company Question */}
          <div className="formbold-input-group">
            <label for="name" className="formbold-form-label">
              Company Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your company name"
              className="formbold-form-input"
            />
          </div>
          {/* Budget Question */}
          <div className="formbold-input-group">
            <label className="formbold-form-label">
              What is your estimated budget?
            </label>

            <select
              className="formbold-form-select"
              name="budget"
              id="budget"
              type="text"
              required
            >
              <option value="Below $5,000">Below $5,000</option>
              <option value="$10,000 - $20,000">$10,000 - $20,000</option>
              <option value="$20,000 - $40,000">$20,000 - $40,000</option>
              <option value="$40,000 - $80,000">$40,000 - $80,000</option>
              <option value="Enterprise">Enterprise</option>
            </select>
          </div>
          {/* Project Description */}
          <div>
            <label for="message" className="formbold-form-label">
              What this project is about?
            </label>
            <textarea
              rows="6"
              name="text"
              id="text"
              placeholder="Type here..."
              className="formbold-form-input"
              required
            ></textarea>
          </div>
          {/* Domain Question */}
          <div className="formbold-input-group">
            <label for="name" className="formbold-form-label">
              What is your current or intended website address?
            </label>
            <input
              type="text"
              name="Website"
              id="Website"
              placeholder="Enter url"
              className="formbold-form-input"
            />
          </div>
          {/* How Many Pages */}
          <div className="formbold-input-group">
            <label for="name" className="formbold-form-label">
              Approximately how many pages/sections will your website have?
            </label>
            <input
              type="text"
              name="Pages"
              id="Pages"
              placeholder="Example 5 pages"
              className="formbold-form-input"
            />
          </div>
          {/* Hosting Question */}
          <div className="formbold-input-radio-wrapper">
            <label for="ans" className="formbold-form-label">
              Do you need hosting?
            </label>

            <div className="formbold-radio-flex">
              <div className="formbold-radio-group">
                <label className="formbold-radio-label">
                  <input
                    className="formbold-input-radio"
                    type="radio"
                    name="Hosting"
                    id="Hosting"
                  />
                  Yes
                  <span className="formbold-radio-checkmark"></span>
                </label>
              </div>

              <div className="formbold-radio-group">
                <label className="formbold-radio-label">
                  <input
                    className="formbold-input-radio"
                    type="radio"
                    name="Hosting"
                    id="Hosting"
                  />
                  No
                  <span className="formbold-radio-checkmark"></span>
                </label>
              </div>
            </div>
          </div>
          {/* SEO Question */}
          <div className="formbold-input-group">
            <label className="formbold-form-label">
              How important is Search Engine Optimization for your website?
            </label>

            <select className="formbold-form-select" name="SEO" id="SEO">
              <option value="Not Important">Not Important</option>
              <option value="Somewhat Important">Somewhat Important</option>
              <option value="Important">Important</option>
              <option value="Very Important">Very Important</option>
            </select>
          </div>
          {/* Target Audience */}
          <div>
            <label for="message" className="formbold-form-label">
              Who is your target audience?
            </label>
            <textarea
              rows="6"
              name="Who is your target audience?"
              id="message"
              placeholder="Type here..."
              className="formbold-form-input"
            ></textarea>
          </div>
          {/* Color Scheme*/}
          <div>
            <label for="message" className="formbold-form-label">
              Do you have a color scheme?
            </label>
            <textarea
              rows="6"
              name="Do you have a color scheme?"
              id="message"
              placeholder="Type here..."
              className="formbold-form-input"
            ></textarea>
          </div>
          {/* Additional comments*/}
          <div>
            <label for="message" className="formbold-form-label">
              Additional comments
            </label>
            <textarea
              rows="6"
              name="Additional comments"
              id="message"
              placeholder="Type here..."
              className="formbold-form-input"
            ></textarea>
          </div>
          <input
            type="hidden"
            name="recaptcha_response"
            id="recaptchaResponse"
          />
          <input
            type="checkbox"
            name="botcheck"
            class="hidden"
            style={{ display: "none" }}
          ></input>
          <button className="formbold-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default IntakeForm;
