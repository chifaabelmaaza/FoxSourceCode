import React from "react";
import "../scss/about.scss";
import "../scss/home.scss";
import { Link } from 'react-router-dom';


function PrivacyPolicy() {
  return (
    <div className="about">
      <header
        className="bg-light text-dark text-left mb-3 mt-0 p-4 rounded-0 box-shadow"
        style={{ height: "125px" }}
      >
        <div className="overlay rounded-0 box-shadow"></div>
        <div className="container">
          <h1 className="mb-1 font-weight-light p-15">Privacy Policy</h1>
          <div className="breadcrumbs">
            <a href="https://www.sellanycode.com" style={{ color: "#6315b8" }}>
              Buy apps
            </a>
            <i
              className="fa fa-arrow-right text-success fa-fw"
              style={{ marginRight: "5px" }}
            ></i>
            Privacy Policy
            <i className="fa fa-check-circle text-success fa-fw"></i>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="row p-15">
          <div
            className="col-sm-12"
            style={{ padding: "0px", marginBottom: "50px" }}
          >
            <div className="card mt-3 box-shadow">
              <div className="card-body">
              <h1 className="underlined-title">Privacy Policy</h1>
              <div className="blog-post-content">
              <p>SellAnyCode has established this privacy policy to explain to you how your information is protected, collected and used, which may be updated by SellAnyCode from time to time. We will provide notice of materially significant changes to this privacy policy by posting notice on this site.</p>
              <h2>1. Protecting your privacy.</h2>
              <p>Account information is password-protected. Keep your password safe.</p>
              <p>SellAnyCode.com, or people who post on SellAnyCode.com, may provide links to third party websites, which may have different privacy practices. We are not responsible for, nor have any control over, the privacy policies of those third party websites, and encourage all users to read the privacy policies of each and every website visited.</p>
              <h2>2. Data we collect</h2>
              <p>We sometimes collect your email address, for purposes such as sending self-publishing and confirmation emails, authenticating user accounts, providing subscription email services, registering for forums, etc.</p>
              <p>SellAnyCode does not store credit card information. Credit card transactions are transmitted to a financial gateway, and we endeavor to protect the security of your payment information during transmission by using Secure Sockets Layer (SSL) technology.</p>
              <p>Our web logs collect standard web log entries for each page served, including your IP address, page URL, and timestamp. Web logs help us to diagnose problems with our server, to administer the SellAnyCode.com website, and to otherwise provide our service to you.</p>
              <h2>3. Data we store</h2>
              <p>All postings are stored in our database, even after “deletion,” and may be archived elsewhere.</p>
              <p>Our web logs and other records are stored indefinitely.</p>
              <p>Although we make good faith efforts to store the information in a secure operating environment that is not available to the public, we cannot guarantee complete security.</p>
              <h2>4. Circumstances in which SellAnyCode may release information</h2>
              <p>SellAnyCode.com may disclose information about its users if required to do so by law or in the good faith belief that such disclosure is reasonably necessary to respond to subpoenas, court orders, or other legal process.</p>
              <p>SellAnyCode.com may also disclose information about its users to law enforcement officers or others, in the good faith belief that such disclosure is reasonably necessary to: enforce our Terms of Use; respond to claims that any posting or other content violates the rights of third-parties; or protect the rights, property, or personal safety of SellAnyCode.com, its users or the general public.</p>
              <h2>5. International users</h2>
              <p>By visiting our web site and providing us with data, you acknowledge and agree that due to the international dimension of SellAnyCode.com we may use the data collected in the course of our relationship for the purposes identified in this policy or in our other communications with you, including the transmission of information outside your resident jurisdiction. In addition, please understand that such data may be stored on servers located in the United States. By providing us with your data, you consent to the transfer of such data.</p>
              
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section style={{border:"none",marginTop:"30px",marginBottom:"20px"}}>
       <div className="row">
       <div className="large-12 columns align-center text-center gap-half" style={{marginBottom:"30px !important", marginTop:"40px"}}>
           <h3 className="gap-half mb-4" style={{fontSize:"30px"}}>
           Make Great Money with your Apps & Codes. Start Selling your Source Code.  
           </h3> 
           <Link to="/sell-your-code">
              <div className="mb-3">
                <button type="submit" className="btn btn-primary btn-sm px-3  button cta large extrawide tall " style={{ borderRadius: "5px",marginRight:"20px", fontSize:"20px" }}>                       
                Become seller!
              </button>  
              </div>
            </Link> 
       </div>
      
       </div>
      </section>
    </div>
  );
}

export default PrivacyPolicy;
