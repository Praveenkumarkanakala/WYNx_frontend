import React from "react";
import "./awardregister.css";
import Footer from "../footer/footer";
import Navbar from "../Navbar/navbar";

const AwardRegistration = () => {
  return (
    <div>
      <Navbar />
      <div className="background-registration">
        <div className="overlay-registration">
          <h1>AWARDS REGISTRATION</h1>
          <p>Home / Awards Registration</p>
        </div>
      </div>

      <div className="form-container">
        <form className="organization-form">
          <div className="form-group">
            <label>Name of the Organization:</label>
            <input type="text" placeholder="Enter Organization" />
          </div>

          <div className="form-group">
            <label>Name of the Promoter:</label>
            <input type="text" placeholder="Enter Promoter" />
          </div>

          <div className="form-group">
            <label>Year of Establishment:</label>
            <input type="text" placeholder="Enter Establishment Year" />
          </div>

          <div className="form-group">
            <label>Ownership Pattern:</label>
            <div className="ownership-options">
              {["Proprietary", "Partnership", "Pvt Limited", "Public Limited"].map((option) => (
                <label key={option}>
                  <input type="radio" name="ownership" value={option} /> {option}
                </label>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>Address of Correspondence:</label>
            <textarea placeholder="Enter Address"></textarea>
          </div>

          <div className="form-group">
            <label>Mobile Number:</label>
            <input type="text" placeholder="Enter Mobile Number" />
          </div>

          <div className="form-group">
            <label>Email ID:</label>
            <input type="email" placeholder="Enter Email" />
          </div>

          <div className="form-group">
            <label>State:</label>
            <select>
              <option>Select State</option>
              <option>State 1</option>
              <option>State 2</option>
            </select>
          </div>

          <div className="form-group">
            <label>City:</label>
            <select>
              <option>Select City</option>
              <option>City 1</option>
              <option>City 2</option>
            </select>
          </div>

          <div className="form-group">
            <label>GST:</label>
            <input type="text" placeholder="Enter GST Number" />
          </div>

          <div className="form-group">
            <label>Website URL:</label>
            <input type="url" placeholder="Enter Website URL" />
          </div>

          <div className="form-group">
            <label>Company Turnover:</label>
            <input type="text" placeholder="Enter Turnover" />
          </div>

          <div className="form-group">
            <label>Number of Employees:</label>
            <input type="number" placeholder="Enter No. of Employees" />
          </div>

          <div className="form-group">
            <label>LinkedIn Handle of the Company:</label>
            <input type="text" placeholder="Enter Company LinkedIn Handle" />
          </div>

          <div className="form-group">
            <label>LinkedIn Handle of the Promoter:</label>
            <input type="text" placeholder="Enter Promoter LinkedIn Handle" />
          </div>

          <button className="submit-button">Become A Sponsor</button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default AwardRegistration;
