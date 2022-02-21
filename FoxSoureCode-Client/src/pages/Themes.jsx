import React from "react";
import product1 from "../assets/img/Products/CasttoTVScreenMirroring_sellanycode_featured_image_1643113410.jpg";

import "../scss/biblio.scss";
import { Link } from "react-router-dom";

export default function BiblioScrCod() {
  return (
    <div className="GamBibli-page">
      <div className="bg-light text-dark text-left mt-0  rounded-0 box-shadow textarea shadow-sm p-3 mb-5 bg-body rounded">
        <div className="overlay rounded-0 box-shadow "></div>
        <div className="container ">
          <h1 className="mb-1 font-weight-light p-15 title">Themes</h1>
          <h6 className="mb-1 font-weight-light p-15">Discover themes and templates for business websites, landing pages and blogs. These themes are created in plain HTML or created for WordPress, Joomla, PrestaShop or other CMS.</h6>
        </div>
      </div>
      <div className="container">
        <div className="row p-15">
          <div className="col-lg-3 mb-3">
            <div
              className="card box-shadow"
              style={{ marginBottom: "12px", borderTop: "0px" }}
            >
              <form className="form-inline my-2 my-lg-0">
                <div
                  className="input-group mb-0"
                  style={{ width: "100%", height: "32px" }}
                >
                  <input
                    type="text"
                    className="form-control form-control-sm input-form header-search shadow-sm bg-body rounded"
                    placeholder="Search in 2152 codes..."
                    aria-label="Search in 2152 codes..."
                    minLength="3"
                    required
                    type="text"
                  />
                  <div className="input-group-append">
                    <button
                      className="btn header-searchcustombtn btn-sm btn-success"
                      style={{
                        background: "#6315b8",
                        height: "34px",
                        marginLeft: "-15px",
                        width: "40px",
                        borderRadius: "2px",
                      }}
                      type="submit"
                      id="button-addon2"
                    >
                      <i
                        className="fas fa-search text-white"
                        style={{ fontSize: "15px" }}
                      ></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div
              className="card box-shadow "
              style={{ marginBottom: "12px", borderTop: "0px" }}
            >
              <div className="card-header font-weight-bold bg-light">
                {" "}
                All Categories
              </div>
              <div className="list-group bg-light ">
                <Link
                  to="/"
                  className="list-group-item list-group-item-action menu-item"
                >
                  <span className="ml-2 font-weight-bold">
                    <i
                      className="fas fa-code"
                      style={{ paddingRight: "20px", paddinLeft: "20px" }}
                    />
                    Game Templates
                  </span>
                </Link>
                <Link
                  to="/"
                  className="list-group-item list-group-item-action menu-item"
                >
                  <span className="ml-2 font-weight-bold">
                    <i
                      className="fas fa-code"
                      style={{ paddingRight: "20px", paddinLeft: "20px" }}
                    />
                    App Templates
                  </span>
                </Link>
                <Link
                  to="/"
                  className="list-group-item list-group-item-action menu-item"
                >
                  <span className="ml-2 font-weight-bold">
                    <i
                      className="fas fa-code"
                      style={{ paddingRight: "20px", paddinLeft: "20px" }}
                    />
                    Plugins
                  </span>
                </Link>
                <Link
                  to="/"
                  className="list-group-item list-group-item-action menu-item"
                >
                  <span className="ml-2 font-weight-bold">
                    <i
                      className="fas fa-code"
                      style={{ paddingRight: "20px", paddinLeft: "20px" }}
                    />
                    Graphics
                  </span>
                </Link>
                <Link
                  to="/"
                  className="list-group-item list-group-item-action menu-item"
                >
                  <span className="ml-2 font-weight-bold">
                    <i
                      className="fas fa-code"
                      style={{ paddingRight: "20px", paddinLeft: "20px" }}
                    />
                    Themes
                  </span>
                </Link>
                <Link
                  to="/"
                  className="list-group-item list-group-item-action menu-item"
                >
                  <span className="ml-2 font-weight-bold">
                    <i
                      className="fas fa-code"
                      style={{ paddingRight: "20px", paddinLeft: "20px" }}
                    />
                    Scripts & Code
                  </span>
                </Link>
              </div>
            </div>
            <div className="card box-shadow mb-3">
              <div className="card-header font-weight-bold bg-light">
                Current Category{" "}
              </div>
              <div className="list-group bg-light">
                <Link
                  to="/"
                  className="list-group-item list-group-item-action active"
                >
                  <span className="ml-2 text-white font-weight-bold">
                    <i
                      className="fas fa-code"
                      style={{ paddingRight: "20px", paddinLeft: "20px" }}
                    />
                    Themes
                  </span>
                </Link>
                <Link to="/" className="list-group-item list-group-item-action">
                    <span className="ml-3">
                    <i
                      className="fas fa-folder-open"
                      style={{ paddingRight: "20px", paddinLeft: "20px" }}
                    />
                     WordPress Themes
                    </span>
                </Link>
                <Link to="/" className="list-group-item list-group-item-action">
                    <span className="ml-3">
                    <i
                      className="fas fa-folder-open"
                      style={{ paddingRight: "20px", paddinLeft: "20px" }}
                    />
                      Joomla Themes
                    </span>
                </Link>
                <Link to="/" className="list-group-item list-group-item-action">
                    <span className="ml-3">
                    <i
                      className="fas fa-folder-open"
                      style={{ paddingRight: "20px", paddinLeft: "20px" }}
                    />
                     Drupal Themes
                    </span>
                </Link>
                <Link to="/" className="list-group-item list-group-item-action">
                    <span className="ml-3">
                    <i
                      className="fas fa-folder-open"
                      style={{ paddingRight: "20px", paddinLeft: "20px" }}
                    />
                      OpenCart Themes
                    </span>
                </Link>
                <Link to="/" className="list-group-item list-group-item-action">
                    <span className="ml-3">
                    <i
                      className="fas fa-folder-open"
                      style={{ paddingRight: "20px", paddinLeft: "20px" }}
                    />
                      PrestaShop Themes
                    </span>
                </Link>
                <Link to="/" className="list-group-item list-group-item-action">
                    <span className="ml-3">
                    <i
                      className="fas fa-folder-open"
                      style={{ paddingRight: "20px", paddinLeft: "20px" }}
                    />
                       HTML Themes
                    </span>
                </Link>
                <Link to="/" className="list-group-item list-group-item-action">
                    <span className="ml-3">
                    <i
                      className="fas fa-folder-open"
                      style={{ paddingRight: "20px", paddinLeft: "20px" }}
                    />
                       Miscellaneous
                    </span>
                </Link>
                <Link to="/" className="list-group-item list-group-item-action">
                    <span className="ml-3">
                    <i
                      className="fas fa-folder-open"
                      style={{ paddingRight: "20px", paddinLeft: "20px" }}
                    />
                        Ghost Themes
                    </span>
                </Link>
                <Link to="/" className="list-group-item list-group-item-action">
                    <span className="ml-3">
                    <i
                      className="fas fa-folder-open"
                      style={{ paddingRight: "20px", paddinLeft: "20px" }}
                    />
                       Magento Themes
                    </span>
                </Link>
                <Link to="/" className="list-group-item list-group-item-action">
                    <span className="ml-3">
                    <i
                      className="fas fa-folder-open"
                      style={{ paddingRight: "20px", paddinLeft: "20px" }}
                    />
                       MyDB Themes
                    </span>
                </Link>
                <Link to="/" className="list-group-item list-group-item-action">
                    <span className="ml-3">
                    <i
                      className="fas fa-folder-open"
                      style={{ paddingRight: "20px", paddinLeft: "20px" }}
                    />
                        NopCommerce Themes
                    </span>
                </Link>
                <Link to="/" className="list-group-item list-group-item-action">
                    <span className="ml-3">
                    <i
                      className="fas fa-folder-open"
                      style={{ paddingRight: "20px", paddinLeft: "20px" }}
                    />
                        osClass Themes
                    </span>
                </Link>
                <Link to="/" className="list-group-item list-group-item-action">
                    <span className="ml-3">
                    <i
                      className="fas fa-folder-open"
                      style={{ paddingRight: "20px", paddinLeft: "20px" }}
                    />
                        Shopify Themes
                    </span>
                </Link>
                <Link to="/" className="list-group-item list-group-item-action">
                    <span className="ml-3">
                    <i
                      className="fas fa-folder-open"
                      style={{ paddingRight: "20px", paddinLeft: "20px" }}
                    />
                        Tumblr Themes
                    </span>
                </Link>
                <Link to="/" className="list-group-item list-group-item-action">
                    <span className="ml-3">
                    <i
                      className="fas fa-folder-open"
                      style={{ paddingRight: "20px", paddinLeft: "20px" }}
                    />
                         Woocommerce Themes
                    </span>
                </Link>
                
              </div>
            </div>
          </div>

          <div className="col-lg-9 galerie">
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="card h-100 box-shadow">
                  <Link>
                    <div className="relativel">
                      <img className="card-img-top" src={product1} />
                    </div>
                  </Link>
                  <div className="card-body text-center">
                    <Link to="/">
                      <h6 className="card-title  text-truncate mb-3">
                        Cast to TV - Screen Mirroring
                      </h6>
                    </Link>
                  </div>
                  <div className="card-footer d-flex flex-row justify-content-between w-100">
                    <span
                      className="btn btn-sm float-left pr-0"
                      style={{ fontSize: "15px", paddingLeft: "0px" }}
                    >
                      <i className="fas fa-eye " aria-hidden="true" />7
                    </span>
                    <button
                      className="btn btn-primary btn-sm float-right font-weight-bold"
                      style={{ fontSize: "15px", padding: "3px 11px" }}
                    >
                      {" "}
                      $30
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="card h-100 box-shadow">
                  <Link>
                    <div className="relativel">
                      <img className="card-img-top" src={product1} />
                    </div>
                  </Link>
                  <div className="card-body text-center">
                    <Link to="/">
                      <h6 className="card-title  text-truncate mb-3">
                        Cast to TV - Screen Mirroring
                      </h6>
                    </Link>
                  </div>
                  <div className="card-footer d-flex flex-row justify-content-between w-100">
                    <span
                      className="btn btn-sm float-left pr-0"
                      style={{ fontSize: "15px", paddingLeft: "0px" }}
                    >
                      <i className="fas fa-eye " aria-hidden="true" />7
                    </span>
                    <button
                      className="btn btn-primary btn-sm float-right font-weight-bold"
                      style={{ fontSize: "15px", padding: "3px 11px" }}
                    >
                      {" "}
                      $30
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="card h-100 box-shadow">
                  <Link>
                    <div className="relativel">
                      <img className="card-img-top" src={product1} />
                    </div>
                  </Link>
                  <div className="card-body text-center">
                    <Link to="/">
                      <h6 className="card-title  text-truncate mb-3">
                        Cast to TV - Screen Mirroring
                      </h6>
                    </Link>
                  </div>
                  <div className="card-footer d-flex flex-row justify-content-between w-100">
                    <span
                      className="btn btn-sm float-left pr-0"
                      style={{ fontSize: "15px", paddingLeft: "0px" }}
                    >
                      <i className="fas fa-eye " aria-hidden="true" />7
                    </span>
                    <button
                      className="btn btn-primary btn-sm float-right font-weight-bold"
                      style={{ fontSize: "15px", padding: "3px 11px" }}
                    >
                      {" "}
                      $30
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="card h-100 box-shadow">
                  <Link>
                    <div className="relativel">
                      <img className="card-img-top" src={product1} />
                    </div>
                  </Link>
                  <div className="card-body text-center">
                    <Link to="/">
                      <h6 className="card-title  text-truncate mb-3">
                        Cast to TV - Screen Mirroring
                      </h6>
                    </Link>
                  </div>
                  <div className="card-footer d-flex flex-row justify-content-between w-100">
                    <span
                      className="btn btn-sm float-left pr-0"
                      style={{ fontSize: "15px", paddingLeft: "0px" }}
                    >
                      <i className="fas fa-eye " aria-hidden="true" />7
                    </span>
                    <button
                      className="btn btn-primary btn-sm float-right font-weight-bold"
                      style={{ fontSize: "15px", padding: "3px 11px" }}
                    >
                      {" "}
                      $30
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="card h-100 box-shadow">
                  <Link>
                    <div className="relativel">
                      <img className="card-img-top" src={product1} />
                    </div>
                  </Link>
                  <div className="card-body text-center">
                    <Link to="/">
                      <h6 className="card-title  text-truncate mb-3">
                        Cast to TV - Screen Mirroring
                      </h6>
                    </Link>
                  </div>
                  <div className="card-footer d-flex flex-row justify-content-between w-100">
                    <span
                      className="btn btn-sm float-left pr-0"
                      style={{ fontSize: "15px", paddingLeft: "0px" }}
                    >
                      <i className="fas fa-eye " aria-hidden="true" />7
                    </span>
                    <button
                      className="btn btn-primary btn-sm float-right font-weight-bold"
                      style={{ fontSize: "15px", padding: "3px 11px" }}
                    >
                      {" "}
                      $30
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="card h-100 box-shadow">
                  <Link>
                    <div className="relativel">
                      <img className="card-img-top" src={product1} />
                    </div>
                  </Link>
                  <div className="card-body text-center">
                    <Link to="/">
                      <h6 className="card-title  text-truncate mb-3">
                        Cast to TV - Screen Mirroring
                      </h6>
                    </Link>
                  </div>
                  <div className="card-footer d-flex flex-row justify-content-between w-100">
                    <span
                      className="btn btn-sm float-left pr-0"
                      style={{ fontSize: "15px", paddingLeft: "0px" }}
                    >
                      <i className="fas fa-eye " aria-hidden="true" />7
                    </span>
                    <button
                      className="btn btn-primary btn-sm float-right font-weight-bold"
                      style={{ fontSize: "15px", padding: "3px 11px" }}
                    >
                      {" "}
                      $30
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="card h-100 box-shadow">
                  <Link>
                    <div className="relativel">
                      <img className="card-img-top" src={product1} />
                    </div>
                  </Link>
                  <div className="card-body text-center">
                    <Link to="/">
                      <h6 className="card-title  text-truncate mb-3">
                        Cast to TV - Screen Mirroring
                      </h6>
                    </Link>
                  </div>
                  <div className="card-footer d-flex flex-row justify-content-between w-100">
                    <span
                      className="btn btn-sm float-left pr-0"
                      style={{ fontSize: "15px", paddingLeft: "0px" }}
                    >
                      <i className="fas fa-eye " aria-hidden="true" />7
                    </span>
                    <button
                      className="btn btn-primary btn-sm float-right font-weight-bold"
                      style={{ fontSize: "15px", padding: "3px 11px" }}
                    >
                      {" "}
                      $30
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="card h-100 box-shadow">
                  <Link>
                    <div className="relativel">
                      <img className="card-img-top" src={product1} />
                    </div>
                  </Link>
                  <div className="card-body text-center">
                    <Link to="/">
                      <h6 className="card-title  text-truncate mb-3">
                        Cast to TV - Screen Mirroring
                      </h6>
                    </Link>
                  </div>
                  <div className="card-footer d-flex flex-row justify-content-between w-100">
                    <span
                      className="btn btn-sm float-left pr-0"
                      style={{ fontSize: "15px", paddingLeft: "0px" }}
                    >
                      <i className="fas fa-eye " aria-hidden="true" />7
                    </span>
                    <button
                      className="btn btn-primary btn-sm float-right font-weight-bold"
                      style={{ fontSize: "15px", padding: "3px 11px" }}
                    >
                      {" "}
                      $30
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="card h-100 box-shadow">
                  <Link>
                    <div className="relativel">
                      <img className="card-img-top" src={product1} />
                    </div>
                  </Link>
                  <div className="card-body text-center">
                    <Link to="/">
                      <h6 className="card-title  text-truncate mb-3">
                        Cast to TV - Screen Mirroring
                      </h6>
                    </Link>
                  </div>
                  <div className="card-footer d-flex flex-row justify-content-between w-100">
                    <span
                      className="btn btn-sm float-left pr-0"
                      style={{ fontSize: "15px", paddingLeft: "0px" }}
                    >
                      <i className="fas fa-eye " aria-hidden="true" />7
                    </span>
                    <button
                      className="btn btn-primary btn-sm float-right font-weight-bold"
                      style={{ fontSize: "15px", padding: "3px 11px" }}
                    >
                      {" "}
                      $30
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="card h-100 box-shadow">
                  <Link>
                    <div className="relativel">
                      <img className="card-img-top" src={product1} />
                    </div>
                  </Link>
                  <div className="card-body text-center">
                    <Link to="/">
                      <h6 className="card-title  text-truncate mb-3">
                        Cast to TV - Screen Mirroring
                      </h6>
                    </Link>
                  </div>
                  <div className="card-footer d-flex flex-row justify-content-between w-100">
                    <span
                      className="btn btn-sm float-left pr-0"
                      style={{ fontSize: "15px", paddingLeft: "0px" }}
                    >
                      <i className="fas fa-eye " aria-hidden="true" />7
                    </span>
                    <button
                      className="btn btn-primary btn-sm float-right font-weight-bold"
                      style={{ fontSize: "15px", padding: "3px 11px" }}
                    >
                      {" "}
                      $30
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="card h-100 box-shadow">
                  <Link>
                    <div className="relativel">
                      <img className="card-img-top" src={product1} />
                    </div>
                  </Link>
                  <div className="card-body text-center">
                    <Link to="/">
                      <h6 className="card-title  text-truncate mb-3">
                        Cast to TV - Screen Mirroring
                      </h6>
                    </Link>
                  </div>
                  <div className="card-footer d-flex flex-row justify-content-between w-100">
                    <span
                      className="btn btn-sm float-left pr-0"
                      style={{ fontSize: "15px", paddingLeft: "0px" }}
                    >
                      <i className="fas fa-eye " aria-hidden="true" />7
                    </span>
                    <button
                      className="btn btn-primary btn-sm float-right font-weight-bold"
                      style={{ fontSize: "15px", padding: "3px 11px" }}
                    >
                      {" "}
                      $30
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="card h-100 box-shadow">
                  <Link>
                    <div className="relativel">
                      <img className="card-img-top" src={product1} />
                    </div>
                  </Link>
                  <div className="card-body text-center">
                    <Link to="/">
                      <h6 className="card-title  text-truncate mb-3">
                        Cast to TV - Screen Mirroring
                      </h6>
                    </Link>
                  </div>
                  <div className="card-footer d-flex flex-row justify-content-between w-100">
                    <span
                      className="btn btn-sm float-left pr-0"
                      style={{ fontSize: "15px", paddingLeft: "0px" }}
                    >
                      <i className="fas fa-eye " aria-hidden="true" />7
                    </span>
                    <button
                      className="btn btn-primary btn-sm float-right font-weight-bold"
                      style={{ fontSize: "15px", padding: "3px 11px" }}
                    >
                      {" "}
                      $30
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="card h-100 box-shadow">
                  <Link>
                    <div className="relativel">
                      <img className="card-img-top" src={product1} />
                    </div>
                  </Link>
                  <div className="card-body text-center">
                    <Link to="/">
                      <h6 className="card-title  text-truncate mb-3">
                        Cast to TV - Screen Mirroring
                      </h6>
                    </Link>
                  </div>
                  <div className="card-footer d-flex flex-row justify-content-between w-100">
                    <span
                      className="btn btn-sm float-left pr-0"
                      style={{ fontSize: "15px", paddingLeft: "0px" }}
                    >
                      <i className="fas fa-eye " aria-hidden="true" />7
                    </span>
                    <button
                      className="btn btn-primary btn-sm float-right font-weight-bold"
                      style={{ fontSize: "15px", padding: "3px 11px" }}
                    >
                      {" "}
                      $30
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="card h-100 box-shadow">
                  <Link>
                    <div className="relativel">
                      <img className="card-img-top" src={product1} />
                    </div>
                  </Link>
                  <div className="card-body text-center">
                    <Link to="/">
                      <h6 className="card-title  text-truncate mb-3">
                        Cast to TV - Screen Mirroring
                      </h6>
                    </Link>
                  </div>
                  <div className="card-footer d-flex flex-row justify-content-between w-100">
                    <span
                      className="btn btn-sm float-left pr-0"
                      style={{ fontSize: "15px", paddingLeft: "0px" }}
                    >
                      <i className="fas fa-eye " aria-hidden="true" />7
                    </span>
                    <button
                      className="btn btn-primary btn-sm float-right font-weight-bold"
                      style={{ fontSize: "15px", padding: "3px 11px" }}
                    >
                      {" "}
                      $30
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="card h-100 box-shadow">
                  <Link>
                    <div className="relativel">
                      <img className="card-img-top" src={product1} />
                    </div>
                  </Link>
                  <div className="card-body text-center">
                    <Link to="/">
                      <h6 className="card-title  text-truncate mb-3">
                        Cast to TV - Screen Mirroring
                      </h6>
                    </Link>
                  </div>
                  <div className="card-footer d-flex flex-row justify-content-between w-100">
                    <span
                      className="btn btn-sm float-left pr-0"
                      style={{ fontSize: "15px", paddingLeft: "0px" }}
                    >
                      <i className="fas fa-eye " aria-hidden="true" />7
                    </span>
                    <button
                      className="btn btn-primary btn-sm float-right font-weight-bold"
                      style={{ fontSize: "15px", padding: "3px 11px" }}
                    >
                      {" "}
                      $30
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
