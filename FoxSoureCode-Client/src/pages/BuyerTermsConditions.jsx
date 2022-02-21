import React from "react";
import "../scss/about.scss";
import "../scss/home.scss";
import { Link } from "react-router-dom";

function BuyerTerms() {
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
              <i className="fa fa-check-circle text-success fa-fw"></i>
            </Link>
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
                  Buyer Terms &amp; Conditions
                </h1>
                <div className="blog-post-content">
                  <h2>
                    <strong>1. Terms and Conditions</strong>
                  </h2>
                  <p>
                    SellAnyCode may change the Terms and Conditions, partly or
                    in whole at any time and those changes will be valid on the
                    time of posting them to the site. When you use our website
                    you choose to agree to these terms.
                  </p>
                  <h2>
                    <strong>2. Trade Marks</strong>
                  </h2>
                  <p>
                    Whoever owns the rights to the materials published on this
                    site will keep his rights on those materials.
                  </p>
                  <h2>
                    <strong>3. Buyers Terms and Conditions</strong>
                  </h2>
                  <p>
                    All uploaded materials will be visible on the web, except
                    for paid files which will become visible to buyers who
                    purchased your code. when you click ‘submit’ and upon
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
                    <strong>4. Buyers</strong>
                  </h2>
                  <p>SellAnyCode reserves full independent rights to:</p>
                  <ul>
                    <li>not grant you with a Buyer account</li>
                    <li>
                      to suspend your account at any time without further notice
                    </li>
                  </ul>
                  <p>
                    SellAnyCode will not be obliged to provide reasons for the
                    decision to reject your request for an account or for the
                    suspension of your account. you are the only authorized and
                    hold the sole responsibility to every access and use of the
                    site with your username and password. in case there is any
                    unauthorized use of your login details you must notify
                    SellAnyCode immediately.
                  </p>
                  <h2>
                    <strong>5. Copyright Infringements</strong>
                  </h2>
                  <p>
                    In case you think there had been a copyright violation of
                    your products please email this information to
                    copy@sellanycode.com. Please note to add the following to
                    your email:
                  </p>
                  <ul>
                    <li>Your name, address, email;</li>
                    <li>
                      In case you are a business then – business name, business
                      address;
                    </li>
                    <li>
                      A link and an explanation to the located copyrighted
                      materials;
                    </li>
                    <li>
                      A detailed report that explains about the infringement.
                    </li>
                  </ul>
                  <p>
                    We will inquire into your report and ask for more
                    information in case needed to proceed the inquiry.
                  </p>
                  <h2>
                    <strong>6. SellAnyCode’s Role</strong>
                  </h2>
                  <p>
                    The developer is the only owner of the codes he/she chooses
                    to list on this site and SellAnyCode has no rights of
                    ownership or to use the uploaded codes. SellAnyCode doesn’t
                    control and will not be held responsible for the quality,
                    legality or safety of the codes that are sold and downloaded
                    from this site. SellAnyCode gives no guarantee that any of
                    the materials on the site do not infringe the intellectual
                    property of others. if you suspect a copyright infringement
                    you can submit it in accordance to section 5 in this
                    agreement.
                  </p>
                  <h2>
                    <strong>7. Site Usage and Maintenance</strong>
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
                    <strong>8. Fees and Services</strong>
                  </h2>
                  <p>
                    Registering to the site both as a buyer and as a developer
                    is free of charge. Buyers will pay for the products and
                    services they choose to purchase. in case a buyer is located
                    in Europe and purchases privately (buyer doesn’t purchase
                    for a company) VAT will be added in accordance to&nbsp;
                    <a href="https://www.gov.uk/government/publications/vat-supplying-digital-services-to-private-consumers/vat-businesses-supplying-digital-services-to-private-consumers">
                      EU VAT laws
                    </a>
                    . If you are buying for a company you will need to state
                    it’s full details in order for the VAT to be excluded. As a
                    buyer you are fully responsible to pay all fees and charges
                    including withholding tax, good and services and VAT that is
                    associated with the usage of this site wherever you are
                    levied. Buyers are responsible for any currency conversion
                    costs from their currency to USD. Buyers can purchase using
                    credit card and PayPal.
                  </p>
                  <h2>
                    <strong>9. Buyer Credibility of Information</strong>
                  </h2>
                  <p>
                    By applying to become a developer on this site you declare
                    that all of the details you have stated relating to you and
                    your business are 100% correct and up to date.
                  </p>
                  <h2>
                    <strong>10. Security and Privacy</strong>
                  </h2>
                  <p>
                    SellAnyCode doesn’t guarantee the security of your data and
                    any materials that’s uploaded onto this site. We do maintain
                    our own security mechanisms on the site to control and
                    protect all of the data on the site.
                  </p>
                  <h2>
                    <strong>11. Purchasing products</strong>
                  </h2>
                  <p>
                    Buying a product on SellAnyCode means “getting access to
                    digital goods and obtain the purchased license to it”. When
                    you buy a product on the site as defined above you
                    acknowledge that you have read and accepted the privileges
                    and restrictions of the license type you have purchased and
                    you oblige not to make usages that breach the license type
                    you have purchased. The license types are stated below:{" "}
                    <strong>Single App License&nbsp;</strong>With the Single App
                    License you can make use of the purchased product for
                    personal or commercial uses with no need to pay extra fees
                    or charges except for the initial purchase price. You are
                    allowed to use the product for one project of your own or on
                    behalf of your customer (personal, commercial, non profit).
                    You or your client cannot resale the purchased item again
                    not on its own neither as a part of a project. The purchased
                    items under this license type must not be resold or
                    redistributed “AS IS” or as a part of a bundle of
                    files.&nbsp;<strong>You can use this license for:</strong>
                  </p>
                  <ul>
                    <li>integrate the product in one app</li>
                    <li>
                      you can distribute the product only as binary
                      (distributing the source code is forbidden)
                    </li>
                    <li>you can make a commercial use of the product</li>
                    <li>you can further develop or edit the code</li>
                  </ul>
                  <p>
                    <strong>Multiple App License&nbsp;</strong>The multiple app
                    license allows you to make a personal and commercial use for
                    a project that will be sold with no need to pay extra fees
                    or charges except for the initial purchase price. The
                    purchased items under this license type must not be resold
                    or redistributed “AS IS”.&nbsp;
                    <strong>You can use this license for:</strong>
                  </p>
                  <ul>
                    <li>
                      You can integrate the product in an unlimited number of
                      projects
                    </li>
                    <li>You can redistribute or sublicense it in a project</li>
                    <li>You can further develop and edit the code</li>
                  </ul>
                  <p>
                    Orders that are made on this site and do not qualify to our
                    refund policy cannot be cancelled. If you think there is a
                    special reason for a refund request that does not meet our
                    refund policy definitions you can email your request to
                    sales@sellanycode.com. SellAnyCode reserves the right to
                    reject your request for a refund in case it doesn’t meet our
                    refund policy terms.
                  </p>
                  <p>
                    <strong>
                      IMPORTANT – in all cases when you purchase a source code
                      on sell my app you cannot use the original package and
                      publish it AS IS without reskinning it. meaning you will
                      need to change the graphics of the game / app you
                      purchased before you publish it.
                    </strong>
                  </p>
                  <p>
                    <strong>
                      the licenses grant you the option to use the source code
                      and benefit from a ready game or app but not from using
                      the original graphics that come with the package.
                    </strong>
                  </p>
                  <h2>
                    <strong>
                      12. Refund Policy – (fourteen days money back guarantee)
                    </strong>
                  </h2>
                  <p>
                    We offer buyer protection for cases in which the product
                    doesn’t work as advertised in the product description page.
                    In case there are problems or differences the author who
                    sold the code will provide support in order to address and
                    correct the issue. In case the author doesn’t act to provide
                    support on the issue a full refund will be granted. Terms to
                    request a refund:
                  </p>
                  <ul>
                    <li>
                      You must request the refund no longer than 14 days of the
                      original purchase date
                    </li>
                    <li>
                      You must request the refund by addressing to our support
                      only at sales@sellanycode.com
                    </li>
                    <li>
                      The product doesn’t work as advertised on the listing page
                    </li>
                    <li>
                      You must detail the issues experienced using the comments
                      tab on the product page
                    </li>
                    <li>
                      The author didn’t reply to your message in the inbox
                      within your dashboard within 48 hours
                    </li>
                  </ul>
                  <p>
                    The refund policy doesn’t apply for purchasing upgrades
                    (section 12). the terms &amp; conditions of purchasing
                    Reskin services or other optional services on the
                    marketplace&nbsp;
                    <a href="https://www.sellmyapp.com/reskin-terms-conditions/">
                      can be found in this link
                    </a>
                    . &nbsp;
                  </p>
                  <h2>
                    <strong>13. Disclaimer</strong>
                  </h2>
                  <p>
                    SellAnyCode does not exclude any Non-excludable Rights but
                    does exclude all other conditions and warranties implied by
                    custom, law or statute. Except as provided for by the
                    Non-excludable Rights:
                  </p>
                  <ul>
                    <li>
                      all content , materials and products on this site are
                      provided AS IS AND WITHOUT WARRANTIES OF ANY KIND
                    </li>
                    <li>
                      sellanycode does not guarantee that the site is free of
                      errors and that the server that hosts the site is free of
                      viruses or other harmful or malicious components
                    </li>
                  </ul>
                  <p>&nbsp;</p>
                  <h2>
                    <strong>14. Prohibited Conduct</strong>
                  </h2>
                  <p>
                    You warrant that when using the site and it’s services you
                    will not:
                  </p>
                  <ul>
                    <li>use a false email address or data;</li>
                    <li>
                      insert your own or a third party’s advertising and use the
                      service for any further commercial or promotional
                      purposes.
                    </li>
                    <li>
                      engage in spamming, flooding, harvesting of e-mail
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
                    <strong>15. Forums</strong>
                  </h2>
                  <p>
                    You are responsible for any of the materials that you post
                    on the site. we reserve rights but are not obliged to edit,
                    review and modify the materials that you have posted on
                    site. SellAnyCode at it’s sole discretion reserves the right
                    to block and delete content that will be found to violate
                    our terms or content that will use violent or offensive
                    terminology.
                  </p>
                  <h2>
                    <strong>16. Indemnification</strong>
                  </h2>
                  <p>
                    You will be held liable and responsible solely for any
                    direct and indirect claims and expenses (including any legal
                    fees) that arise from the following matters:
                  </p>
                  <ul>
                    <li>any product you have uploaded to the site</li>
                    <li>your usage of the site</li>
                    <li>
                      any content, graphic materials or files you have uploaded
                      to the site
                    </li>
                    <li>
                      any breach of the terms and conditions in this agreement
                    </li>
                  </ul>
                  <h2>
                    <strong>17. </strong>
                    <strong>Definitions</strong>
                  </h2>
                  <p>In these Terms and Conditions:</p>
                  <ul>
                    <li>
                      Developer is a person who applied to become a developer on
                      SellAnyCode and had filled a form with his details and
                      agreed to the terms and conditions.
                    </li>
                    <li>
                      Buyers means a person or a company that bought a product
                      or service on this site.
                    </li>
                    <li>We or us means SellAnyCode.</li>
                    <li>Our site and this site means SellAnyCode.</li>
                    <li>You or your means developer or buyer.</li>
                  </ul>
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

export default BuyerTerms;
