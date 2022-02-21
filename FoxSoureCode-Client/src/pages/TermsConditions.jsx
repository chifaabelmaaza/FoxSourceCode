import React from "react";
import "../scss/about.scss";
import "../scss/home.scss";
import { Link } from "react-router-dom";

function TermsConditions() {
  return (
    <div className="about">
      <header
        className="bg-light text-dark text-left mb-3 mt-0 p-4 rounded-0 box-shadow"
        style={{ height: "125px" }}
      >
        <div className="overlay rounded-0 box-shadow"></div>
        <div className="container">
          <h1 className="mb-1 font-weight-light p-15">Terms & Conditions</h1>
          <div className="breadcrumbs">
            <a href="https://www.sellanycode.com" style={{ color: "#6315b8" }}>
              Buy apps
            </a>
            <i
              className="fa fa-arrow-right text-success fa-fw"
              style={{ marginRight: "5px" }}
            ></i>
            <Link to="/developer-terms-conditions">
            Developer Terms & Conditions
            <i className="fa fa-check-circle text-success fa-fw"></i></Link>
            <Link to="/buyer-terms-conditions">
            Buyer Terms & Conditions
            <i className="fa fa-check-circle text-success fa-fw"></i>
            </Link>
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
                {" "}
                <h1 className="underlined-title">
                  Developer Terms &amp; Conditions
                </h1>
                <div className="blog-post-content">
                  <h2>
                    <strong>1.&nbsp;</strong>
                    <strong>Terms and Conditions</strong>
                  </h2>
                  <p>
                    SellAnyCode may change the Terms and Conditions, partly or
                    in whole at any time and those changes will be valid on the
                    time of posting them to the site. When you use our website
                    you choose to agree to these terms.
                  </p>
                  <h2>
                    <strong>2.&nbsp;</strong>
                    <strong>Trade Marks</strong>
                  </h2>
                  <p>
                    Whoever owns the rights to the materials published on this
                    site will keep his rights on those materials.
                  </p>
                  <h2>
                    <strong>3.&nbsp;</strong>
                    <strong>Developers Terms and Conditions</strong>
                  </h2>
                  <p>
                    All uploaded materials will be visible on the web, except
                    for paid files which will become visible to buyers who
                    purchased your code. When you click ‘submit’ and upon
                    approval of your product on this site you accept the terms
                    and conditions and you are in a legal agreement between you
                    and SellAnyCode in relation to this site. If you are
                    submitting files and content on the behalf of your company
                    your declare that you have the legal authority to do so and
                    to bind your company into an agreement of the terms and
                    condition written here. you are also stating that you are at
                    least 18 years old.
                  </p>
                  <h2>
                    <strong>4.&nbsp;</strong>
                    <strong>Developers</strong>
                  </h2>
                  <p>SellAnyCode reserves full independent rights to:</p>
                  <ul>
                    <li>not grant you with a developer account;</li>
                    <li>
                      to suspend your account at any time without further
                      notice.
                    </li>
                  </ul>
                  <p>
                    SellAnyCode will not be obliged to provide reasons for the
                    decision to reject your request for an account or for the
                    suspension of your account. You are the only authorized and
                    hold the sole responsibility to every access and use of the
                    site with your username and password. In case there is any
                    unauthorized use of your login details you must notify
                    SellAnyCode immediately.
                  </p>
                  <h2>
                    <strong>5.&nbsp;</strong>
                    <strong>
                      Copyright Infringements And DMCA TAKEDOWN NOTICES
                    </strong>
                  </h2>
                  <p>
                    In case you think there had been a copyright violation of
                    your products please email this information to
                    info@sellanycode.com. Please note to add the following to
                    your email:
                  </p>
                  <ul>
                    <li>Your name, address, email</li>
                    <li>
                      In case you are a business then – business name, business
                      address
                    </li>
                    <li>
                      A link and an explanation to the located copyrighted
                      materials
                    </li>
                    <li>
                      A proof that you are the owner of the copyrighted material
                    </li>
                  </ul>
                  <p>
                    We will inquire into your report and ask for more
                    information in case needed to proceed the inquiry.
                  </p>
                  <p>
                    <strong>DMCA TAKEDOWN NOTICES</strong>
                  </p>
                  <p>
                    with each product you submit on the SellAnyCode.com
                    marketplace you are approving our terms and conditions which
                    grants us a full power of attorney to file DMCA takedown
                    notices on your behalf.&nbsp;
                  </p>
                  <p>
                    We do this when you report to us a listing / infringement of
                    your work is found on another website that you didn’t
                    approve it’s sales.
                  </p>
                  <p>
                    We will be filing these DMCA takedown notices in your behalf
                    as your Representatives.
                  </p>
                  <h2>
                    <strong>6. SellAnyCode’s</strong>
                    <strong>&nbsp;Role</strong>
                  </h2>
                  <p>
                    The developer is the only owner of the codes he/she chooses
                    to list on this site and SellAnyCode has no rights of
                    ownership or to use the uploaded codes. SellAnyCode doesn’t
                    control and will not be held responsible for the quality,
                    legality or safety of the content or codes that are sold and
                    downloaded from this site. SellAnyCode gives no guarantee
                    that any of the materials on the site do not infringe the
                    intellectual property of others. &nbsp;If you suspect a
                    copyright infringement you can submit it in accordance to
                    section 5 in this agreement.
                  </p>
                  <h2>
                    <strong>7.&nbsp;S</strong>
                    <strong>ite Usage and Maintenance</strong>
                  </h2>
                  <p>
                    SellAnyCode reserves the right to partially or fully stop
                    the access to the site for you or for a complete shutdown of
                    the site in general. From time to time and to SellAnyCode’s
                    sole discretion the site might be down for maintenance. All
                    of the stated in this section can be done without any given
                    notice. SellAnyCode will not be held liable to a loss caused
                    by one or all of the mentioned above in this section.
                  </p>
                  <h2>
                    <strong>8.&nbsp;</strong>
                    <strong>Fees and Services</strong>
                  </h2>
                  <p>
                    Registering to the site both as a buyer and as a developer
                    is free of charge. Buyers will pay for the products they
                    choose to purchase. in case a buyer is located in Europe and
                    purchases privately (buyer doesn’t purchase for a&nbsp;
                    company) VAT will be added in accordance to MOSS VAT laws.
                    As a developer you will be paid a commission for each
                    product sold on the site. Buyers can purchase using credit
                    card and PayPal. Developers gets paid via PayPal&nbsp;or
                    Payoneer The developer shall pay all fees and costs that are
                    necessary for the payout of his commissions.
                  </p>
                  <h2>
                    <strong>9.&nbsp;</strong>
                    <strong>Developers Credibility of Information</strong>
                  </h2>
                  <p>
                    By applying to become a developer on this site you declare
                    that all of the details you have stated relating to you and
                    your business are 100% correct and up to date.
                  </p>
                  <h2>
                    <strong>10.&nbsp;</strong>
                    <strong>Security and Privacy</strong>
                  </h2>
                  <p>
                    SellAnyCode doesn’t guarantee the security of your data and
                    any materials that’s uploaded onto this site. We do maintain
                    our own security mechanisms on the site to control and
                    protect all of the data on the site.
                  </p>
                  <h2>
                    <strong>11.&nbsp;</strong>
                    <strong>Payments</strong>
                  </h2>
                  <p>Payments of earnings will be done as follows:</p>
                  <ul>
                    <li>
                      There is a threshold of $30 that needs to be met in order
                      to request a payout.
                    </li>
                    <li>payouts will be made using PayPal or Bank Transfer</li>
                    <li>
                      In case of earnings that are less than $30 the payout will
                      occur after 30 days from the last purchase on the
                      developers account.
                    </li>
                    <li>
                      The developer shall pay all fees and costs that are
                      necessary for the payout of his commissions.
                    </li>
                    <li>
                      You allow SellAnyCode in case of any of the following:
                      refunds, chargeback and unauthorized transactions to
                      automatically deduct these amounts from your commissions.
                    </li>
                    <li>
                      In any case that a buyer will request a refund within a
                      period of 30 days due to the reasons: product is not as
                      described, code is broken or doesn’t run properly you
                      approve automatically to grant the buyer a full refund.
                      this will occur only if the buyer had made the claim in
                      accordance with our refund policy and his statements seem
                      valid.
                    </li>
                  </ul>
                  <p>&nbsp;</p>
                  <h2>
                    <strong>12.&nbsp;Purchasing products</strong>
                  </h2>
                  <p>
                    Orders that are made on this site cannot be cancelled. if
                    you think there is a special reason for a refund request
                    that does not meet our refund policy definitions you can
                    email your request to sales@sellanycode.com. SellAnyCode
                    reserves the right to reject your request for a refund in
                    case it doesn’t meet our refund policy.
                  </p>
                  <h2>
                    <strong>13.&nbsp;Selling Products</strong>
                  </h2>
                  <p>
                    As a developer your guarantee to SellAnyCode and buyers that
                    your products:
                  </p>
                  <ul>
                    <li>
                      All of your products are fully owned by you including the
                      intellectual property rights.
                    </li>
                    <li>
                      Your products do not infringe copyrights or intellectual
                      properties of others.
                    </li>
                    <li>Your products are not stolen.</li>
                    <li>
                      Your products are not harassing in an unlawful manner or
                      act in an unlawful manner.
                    </li>
                    <li>
                      Your products are allowed to use for age groups below 18
                      years old and do not contain pornographic or malicious
                      content.
                    </li>
                    <li>
                      Your products are free of any spyware, malware, or any
                      malicious code for any type of computer, smartphone or
                      tablet device.
                    </li>
                    <li>
                      Your products cannot lead to termination of service from
                      an ISP.
                    </li>
                    <li>Your products do not violate the laws of any state.</li>
                  </ul>
                  <p>
                    <strong>
                      13.1 Additional terms for selling your products on our
                      site
                    </strong>
                  </p>
                  <ul>
                    <li>
                      All products that are on this site are first reviewed by
                      the SellAnyCode team.
                    </li>
                    <li>
                      SellAnyCode doesn’t have to approve your product listing
                      at it’s sole discretion and will not be obliged to state
                      the reasons for rejection.
                    </li>
                    <li>
                      If one or all of the products you have uploaded to the
                      site is found to violate the terms and conditions of the
                      site, SellAnyCode can suspend your account and the money
                      earned will be returned to you only after the dispute
                      resolution is cleared. in case there is sufficient proof
                      that you have violated one or more terms in this agreement
                      SellAnyCode reserves the right to deny the stored
                      commissions on the suspended account.
                    </li>
                    <li>
                      We reserve the right to edit and change the prices and the
                      content of the listings at our own sole discretion.
                    </li>
                    <li>
                      We reserve the right to eliminate any listed item without
                      any notice and with not obligation to state the reasons
                      for removal. to remove any doubt there will be no refunds
                      of no kind for losses that will be claimed due to the
                      removal of your product/s from the site.
                    </li>
                    <li>
                      SellAnyCode will not be held responsible for the way that
                      the buyers will choose to use your products.
                    </li>
                    <li>
                      You agree that your product/s &amp; creative might be used
                      in promotional and marketing materials to promote the
                      site, this might include creative images &amp; app preview
                      videos.
                    </li>
                    <li>
                      The minimum listing time of your approved items on the
                      site is for a minimum period of 9&nbsp;months from the
                      moment it got approved.
                    </li>
                    <li>
                      During the listing period you may list your items freely
                      on any other marketplace on the web but you may
                      not&nbsp;grant exclusivity to other marketplaces on items
                      you have published during this period.
                    </li>
                    <li>
                      in case requests for removal of items due to signing
                      exclusivity with other marketplaces the agreement that
                      will be followed is your agreement with SellAnyCode.
                    </li>
                  </ul>
                  <h2>
                    <strong>14.&nbsp;Disclaimer</strong>
                  </h2>
                  <p>
                    SellAnyCode does not exclude any Non-excludable Rights but
                    does exclude all other conditions and warranties implied by
                    custom, law or statute. Except as provided for by the
                    Non-excludable Rights:
                  </p>
                  <ul>
                    <li>
                      All content, materials and products on this site are
                      provided AS IS AND WITHOUT WARRANTIES OF ANY KIND.
                    </li>
                    <li>
                      SellAnyCode does not guarantee that the site is free of
                      errors and that the server that hosts the site is free of
                      viruses or other harmful or malicious components.
                    </li>
                  </ul>
                  <p>&nbsp;</p>
                  <h2>
                    <strong>15. &nbsp;Commissions</strong>
                  </h2>
                  <ul>
                    <li>
                      You as a developer approve SellAnyCode to subtract it’s
                      commission from each sale you make.
                    </li>
                    <li>
                      Commissions might change in accordance to agreements.
                    </li>
                    <li>
                      As a developer you are eligible to receive a commission of
                      80% for each code you sell.
                    </li>
                    <li>
                      Developers are eligible to receive commissions only from
                      selling their source codes. any other services provided by
                      SellAnyCode in addition to the sale of your product
                      including but not limited to: reskin jobs, graphic
                      designs, audio packs, meta data/aso etc and all the income
                      deriving from it belong solely to SellMyApp and when
                      becoming a developer on our site you agree to these terms.
                    </li>
                    <li>
                      There are commission fees that will be charged for each
                      sold product. these fees are determined by SellAnyCode and
                      at it’s sole discretion and might change from time to
                      time.
                    </li>
                  </ul>
                  <p>&nbsp;</p>
                  <h2>
                    <strong>16. &nbsp;Prohibited Conduct</strong>
                  </h2>
                  <p>
                    You warrant that when using the site and it’s services you
                    will not:
                  </p>
                  <ul>
                    <li>Use a false email address or data;</li>
                    <li>
                      Insert your own or a third party’s advertising and use the
                      service for any further commercial or promotional
                      purposes.
                    </li>
                    <li>
                      Engage in spamming, flooding, harvesting of e-mail
                      addresses or other personal information, spidering,
                      “screen scraping,” “database scraping,” or any other
                      activity with the purpose of obtaining lists of users or
                      other information, or send chain letters or pyramid
                      schemes via the Site; or attempt to gain unauthorized
                      access to other computer systems through the Site. You
                      agree that you will not use the Site in any manner that
                      could damage, disable, overburden, or impair the Site or
                      interfere with any other party’s use and enjoyment of the
                      Site.
                    </li>
                  </ul>
                  <p>
                    SellAnyCode reserves full right to determine at it’s sole
                    discretion if there was a breach in these terms and suspend
                    your account without any notice or explanation.
                  </p>
                  <h2>
                    <strong>17.&nbsp;Forums</strong>
                  </h2>
                  <p>
                    You are responsible for any of the materials that you post
                    on the site. we reserve rights but are not obliged to edit,
                    review and modify the materials that you have posted on
                    site.&nbsp; SellAnyCode at it’s sole discretion reserves the
                    right to block and delete content that will be found to
                    violate our terms or content that will use violent or
                    offensive terminology.
                  </p>
                  <h2>
                    <strong>18.&nbsp;Indemnification</strong>
                  </h2>
                  <p>
                    You will be held liable and responsible solely for any
                    direct and indirect claims and expenses (including any legal
                    fees) that arise from the following matters:
                  </p>
                  <ul>
                    <li>any product you have uploaded to the site.</li>
                    <li>your usage of the site.</li>
                    <li>
                      any content, graphic materials or files you have uploaded
                      to the site.
                    </li>
                    <li>
                      any breach of the terms and conditions in this agreement.
                    </li>
                  </ul>
                  <h2>
                    <strong>19. Definitions</strong>
                  </h2>
                  <p>In these Terms and Conditions:</p>
                  <ul>
                    <li>
                      Developer is a person who applied to become a developer on
                      SellAnyCode and had filled a form with his details and
                      agreed to the terms and conditions
                    </li>
                    <li>
                      Buyers means a person or a company that bought a product
                      or service on this site
                    </li>
                    <li>We or us means SellAnyCode</li>
                    <li>Our site and this site means SellAnyCode</li>
                    <li>You or your means developer or buyer</li>
                    <li>&nbsp;</li>
                  </ul>
                  <h2>
                    <strong>20. SellAnyCode.com</strong>
                    <strong> Role - Marketplace</strong>
                  </h2>
                  <p>
                    The developer is the only owner of the codes he/she chooses
                    to list on this site and SellAnyCode has no rights of
                    ownership or to use the uploaded codes. SellAnyCode doesn’t
                    control and will not be held responsible for the quality,
                    legality or safety of the content or codes that are sold and
                    downloaded from this site. SellAnyCode gives no guarantee
                    that any of the materials on the site do not infringe the
                    intellectual property of others. &nbsp;If you suspect a
                    copyright infringement you can submit it in accordance to
                    section 5 in this agreement.
                  </p>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <section
        style={{ border: "none", marginTop: "30px", marginBottom: "20px" }}
      >
        <div className="row">
          <div
            className="large-12 columns align-center text-center gap-half"
            style={{ marginBottom: "30px !important", marginTop: "40px" }}
          >
            <h3 className="gap-half mb-4" style={{ fontSize: "30px" }}>
              Make Great Money with your Apps & Codes. Start Selling your Source
              Code.
            </h3>
            <Link to="/sell-your-code">
              <div className="mb-3">
                <button
                  type="submit"
                  className="btn btn-primary btn-sm px-3  button cta large extrawide tall "
                  style={{
                    borderRadius: "5px",
                    marginRight: "20px",
                    fontSize: "20px",
                  }}
                >
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

export default TermsConditions;
