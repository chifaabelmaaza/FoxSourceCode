import React from "react";
import "../scss/about.scss";
import "../scss/home.scss";
import { Link } from 'react-router-dom';


function About() {
  return (
    <div className="about">
      <header
        className="bg-light text-dark text-left mb-3 mt-0 p-4 rounded-0 box-shadow"
        style={{ height: "125px" }}
      >
        <div className="overlay rounded-0 box-shadow"></div>
        <div className="container">
          <h1 className="mb-1 font-weight-light p-15">About Foxsorcecode</h1>
          <div className="breadcrumbs">
            <a href="https://www.sellanycode.com" style={{ color: "#6315b8" }}>
              Buy apps
            </a>
            <i
              className="fa fa-arrow-right text-success fa-fw"
              style={{ marginRight: "5px" }}
            ></i>
            About Foxsorcecode
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
                <h2 className="text-dark font-bold m-b-lg ">
                  <strong>What is SellAnyCode.com?</strong>
                </h2>
                <p>
                  SellAnyCode is an online marketplace where developers and
                  designers can buy and sell various ready-to-use web
                  development assets. These include scripts, themes, templates,
                  code snippets, app source codes, plugins and more.
                  <br />
                  <br />
                  Developers &amp; designers are able to buy ready-to-use
                  components and to drastically reduce development time and cost
                  on their projects.
                  <br />
                  <br />
                  On the other side it makes it possible for developers &amp;
                  designers to generate a passive income by selling their work
                  on SellAnyCode.
                </p>
                <p>DISCLAIMER:</p>
                <p>
                  The code is in ownership each seller, SellAnyCode.com provides
                  only marketplace for buyers and seller and is not subject to
                  any legal damages. The seller is always responsible for his
                  source code. In case of any problems or legal issues, please
                  contact the seller. SellAnyCode.com only provide safe and
                  trusted marketplace for buyers and sellers their digital work
                  or assets.
                </p>
                <h2 className="text-dark font-bold m-b-lg">
                  <strong>Buying items</strong>
                </h2>
                <p>
                  You can buy items using SellAnyCode, Creditcard or Paypal.
                  Once your order is completed, you will directly be able to
                  directly download your purchase.
                </p>
                <h2 className="text-dark font-bold m-b-lg">
                  <strong>Start selling your work</strong>
                </h2>
                <p>
                  SellAnyCode offers developers &amp; designers a platform to
                  sell their work and turn it into a sustainable business. Check
                  our <Link to="/sell-apps">seller</Link>
                  page for more information.
                </p>
                <h2 className="text-dark font-bold m-b-lg">
                  <strong>Do you have any questions?</strong>
                </h2>
                <p>
                  If you need help please contact us through&nbsp;
                  <a href="mailto:info@sellanycode.com">support</a>. Just leave
                  a ticket and we will try to answer your question as soon as
                  possible.
                </p>
                <p>
                  Reach us at:
                  <a href="mailto:info@sellanycode.com">info@sellanycode.com</a>
                  &nbsp;
                </p>
                <p>We will be happy to help you!</p>
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

export default About;
