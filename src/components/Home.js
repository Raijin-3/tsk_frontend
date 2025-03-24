import React from "react";

function Home() {
  return (
    <>
      <style>{`
        .navbar {
          background-color: #000080 !important;
        }
        .navbar-brand img {
          width: 40px;
        }
        .nav-link {
          color: white !important;
          font-size: 16px;
          margin: 0 10px;
        }
        .nav-link i {
          margin-right: 5px;
        }
        .nav-item.active .nav-link {
          border-bottom: 2px solid #00ff00;
        }
        .contact-info {
          color: white;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .contact-info i {
          font-size: 20px;
        }
        .contact-info strong {
          font-size: 18px;
        }
        .box {
          background-color: #d6d6d6;
          border-radius: 16px;
          width: 100%;
          height: 192px;
        }
        .main-box {
          background-color: #d6d6d6;
          border-radius: 16px;
          width: 100%;
          height: 400px;
          position: relative;
        }
        .play-icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 64px;
          color: white;
        }
        .card-custom {
          border-radius: 16px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        .vl {
          border-left: 2px solid green;
          height: 21px;
        }
      `}</style>

      {/* HEADER / NAVIGATION */}
      <nav className="navbar navbar-expand-lg">
        <div className="container" style={{ maxWidth: "1200px" }}>
          <a className="navbar-brand" href="#">
            <span className="text-white fw-bold">LOGO</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggler"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarToggler">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  <i className="fa fa-home"></i> Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fa fa-files-o"></i> Collections
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fa fa-percent"></i> Special Offer
                </a>
              </li>
            </ul>
            <div className="contact-info">
              <i className="fa fa-whatsapp"></i>
              <span className='vl'></span>
              <i className="fa fa-phone"></i>
              <div>
                <strong>+91-9999000123</strong>
                <p className="m-0">Call us to Book now</p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main>
        {/* Booking Layout */}
        <section
          id="booking-layout"
          style={{ maxWidth: "1200px", marginTop: "30px" }}
          className="container"
        >
          <div className="row">
            {/* Left side: Images */}
            <div className="col-md-8 d-flex">
              <div
                className="d-flex flex-column justify-content-between me-3"
                style={{ width: "40%" }}
              >
                <div className="box mb-3"></div>
                <div className="box"></div>
              </div>
              <div
                className="main-box position-relative"
                style={{ width: "60%" }}
              >
                <i className="fa fa-play-circle play-icon"></i>
              </div>
            </div>

            {/* Right side: Booking info */}
            <div className="col-md-4">
              <div
                className="card card-custom p-3"
                style={{
                  borderRadius: "16px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                }}
              >
                {/* Top Banner */}
                <div
                  className="rounded-top p-3 mb-3"
                  style={{
                    background: "linear-gradient(to right, #002b8a, #0052cc)",
                    color: "white",
                    borderRadius: "12px"
                  }}
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <div style={{ fontSize: "13px" }}>
                      Login Now To Get Up To 15%
                      <br />
                      Lower Price
                    </div>
                    <button
                      className="btn btn-sm btn-light text-primary fw-bold px-3 py-1"
                      style={{ fontSize: "12px" }}
                    >
                      LOGIN
                    </button>
                  </div>
                </div>

                {/* Price Section */}
                <h3 className="mb-1">
                  ₹704
                  <span
                    className="text-muted text-decoration-line-through fs-6 ms-1"
                  >
                    ₹3203
                  </span>
                  <span className="text-warning fw-semibold ms-1">78% off</span>
                </h3>
                <p className="text-muted" style={{ fontSize: "14px" }}>
                  + taxes & fees: ₹135
                </p>

                {/* Dropdowns */}
                <div className="mb-3">
                  <select
                    className="form-select mb-2"
                    style={{ fontSize: "14px", borderRadius: "8px" }}
                  >
                    <option>Check in / Check out time</option>
                  </select>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Guest"
                    style={{ fontSize: "14px", borderRadius: "8px" }}
                  />
                </div>

                {/* Coupon Info */}
                <div className="mb-2 d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <i className="fa fa-percent text-warning me-2"></i>
                    <small className="text-dark">WELCOME75 coupon applied</small>
                  </div>
                  <div
                    className="text-danger fw-semibold"
                    style={{ fontSize: "14px" }}
                  >
                    -₹1198 <i className="fa fa-check text-success ms-1"></i>
                  </div>
                </div>

                {/* More Offers */}
                <div className="mb-3">
                  <button
                    className="btn btn-outline-success btn-sm"
                    style={{ fontSize: "12px", borderRadius: "6px" }}
                  >
                    MORE OFFERS
                  </button>
                </div>

                {/* Continue Button */}
                <button
                  className="btn w-100 fw-bold text-white"
                  style={{
                    background: "linear-gradient(to right, #002b8a, #0052cc)",
                    color: "white",
                    borderRadius: "12px"
                  }}
                >
                  Continue to Book
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section id="overview">
          <div
            className="container"
            style={{ maxWidth: "1200px", marginTop: "40px" }}
          >
            <div className="row">
              {/* Left: Text Content */}
              <div className="col-md-6">
                <h4 className="fw-bold" style={{ color: "#000080" }}>
                  Delhi Farmhouse, Is Simply Dummy Printing
                </h4>
                <p>
                  <a
                    href="#"
                    style={{
                      color: "#1a73e8",
                      textDecoration: "underline"
                    }}
                  >
                    Location - There is no minimum donation, any sum is
                    appreciated
                  </a>
                </p>
                <h5 className="fw-bold" style={{ color: "#000080" }}>
                  Overview
                </h5>
                <p className="text-muted" style={{ maxWidth: "700px" }}>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy.
                </p>
              </div>

              {/* Right: Rating Info */}
              <div
                className="col-md-2 d-flex flex-column align-items-start align-items-md-end text-md-end mt-3 mt-md-0"
              >
                <div>
                  <span className="fw-semibold" style={{ fontSize: "20px" }}>
                    Very Good
                  </span>
                  <span
                    className="badge bg-primary"
                    style={{
                      fontSize: "16px",
                      padding: "6px 10px",
                      borderRadius: "8px",
                      background: "linear-gradient(to right, #002b8a, #0052cc)"
                    }}
                  >
                    8.2
                  </span>
                </div>
                <small className="text-muted">31 reviews</small>
                <div className="mt-2">
                  <span
                    className="badge bg-warning text-dark"
                    style={{ fontSize: "14px" }}
                  >
                    New to Booking.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Amenities Section */}
        <section id="amenities">
          <div
            className="container"
            style={{ maxWidth: "1200px", marginTop: "50px" }}
          >
            <h5 className="fw-bold mb-4" style={{ color: "#000080" }}>
              Amenities
            </h5>
            <div className="row">
              <div className="col-md-6">
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <i className="fa fa-ban me-2"></i> Crockery
                  </li>
                  <li className="mb-2">
                    <i className="fa fa-ban me-2"></i> Parking Available
                  </li>
                  <li className="mb-2">
                    <i className="fa fa-ban me-2"></i> Refrigerator
                  </li>
                  <li className="mb-2">
                    <i className="fa fa-ban me-2"></i> Living Area / Lobby
                  </li>
                  <li className="mb-2">
                    <i className="fa fa-ban me-2"></i> Microwave
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <i className="fa fa-ban me-2"></i> Wifi
                  </li>
                  <li className="mb-2">
                    <i className="fa fa-ban me-2"></i> Air Conditioning
                  </li>
                  <li className="mb-2">
                    <i className="fa fa-ban me-2"></i> Breakfast
                  </li>
                  <li className="mb-2">
                    <i className="fa fa-ban me-2"></i> 2 Bedrooms
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section id="reviews">
          <div
            className="container"
            style={{ maxWidth: "1200px", marginTop: "50px" }}
          >
            <div className="row">
              <div className="col-md-8">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div>
                    <h5 className="fw-bold mb-2">Guest reviews</h5>
                    <div className="d-flex align-items-center">
                      <span
                        className="badge bg-primary me-2"
                        style={{
                          fontSize: "14px",
                          background: "linear-gradient(to right, #002b8a, #0052cc)"
                        }}
                      >
                        7.9
                      </span>
                      <span className="fw-semibold me-2">Good</span>
                      <small className="text-muted">2,740 reviews</small>
                      <a
                        href="#"
                        className="ms-2"
                        style={{ fontSize: "14px", color: "#1a73e8" }}
                      >
                        Read all reviews
                      </a>
                    </div>
                  </div>
                  <button
                    className="btn btn-primary btn-sm"
                    style={{
                      background: "linear-gradient(to right, #002b8a, #0052cc)"
                    }}
                  >
                    See availability
                  </button>
                </div>

                {/* Categories */}
                <div className="row mb-4">
                  <div className="col-md-4">
                    <p className="mb-1">
                      Staff <span className="float-end">8.7</span>
                    </p>
                    <div className="progress mb-3" style={{ height: "6px" }}>
                      <div
                        className="progress-bar"
                        style={{
                          width: "87%",
                          background: "linear-gradient(to right, #002b8a, #0052cc)"
                        }}
                      ></div>
                    </div>

                    <p className="mb-1">
                      Comfort <span className="float-end">8.0</span>
                    </p>
                    <div className="progress mb-3" style={{ height: "6px" }}>
                      <div
                        className="progress-bar"
                        style={{
                          width: "80%",
                          background: "linear-gradient(to right, #002b8a, #0052cc)"
                        }}
                      ></div>
                    </div>

                    <p className="mb-1">
                      Free WiFi <span className="float-end">8.5</span>
                    </p>
                    <div className="progress mb-3" style={{ height: "6px" }}>
                      <div
                        className="progress-bar"
                        style={{
                          width: "85%",
                          background: "linear-gradient(to right, #002b8a, #0052cc)"
                        }}
                      ></div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <p className="mb-1">
                      Facilities <span className="float-end">7.9</span>
                    </p>
                    <div className="progress mb-3" style={{ height: "6px" }}>
                      <div
                        className="progress-bar"
                        style={{
                          width: "79%",
                          background: "linear-gradient(to right, #002b8a, #0052cc)"
                        }}
                      ></div>
                    </div>

                    <p className="mb-1">
                      Value for money <span className="float-end">8.0</span>
                    </p>
                    <div className="progress mb-3" style={{ height: "6px" }}>
                      <div
                        className="progress-bar"
                        style={{
                          width: "80%",
                          background: "linear-gradient(to right, #002b8a, #0052cc)"
                        }}
                      ></div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <p className="mb-1">
                      Cleanliness <span className="float-end">8.1</span>
                    </p>
                    <div className="progress mb-3" style={{ height: "6px" }}>
                      <div
                        className="progress-bar"
                        style={{
                          width: "81%",
                          background: "linear-gradient(to right, #002b8a, #0052cc)"
                        }}
                      ></div>
                    </div>

                    <p className="mb-1">
                      Location <span className="float-end">8.3</span>
                    </p>
                    <div className="progress mb-3" style={{ height: "6px" }}>
                      <div
                        className="progress-bar"
                        style={{
                          width: "83%",
                          background: "linear-gradient(to right, #002b8a, #0052cc)"
                        }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Review Tags */}
                <div className="mb-5">
                  <label className="fw-semibold d-block mb-2">
                    Select topics to read reviews:
                  </label>
                  <span
                    className="badge rounded-pill border text-dark bg-light me-2 px-3 py-2"
                  >
                    <i className="fa fa-plus me-1"></i> Room
                  </span>
                  <span
                    className="badge rounded-pill border text-dark bg-light me-2 px-3 py-2"
                  >
                    <i className="fa fa-plus me-1"></i> Location
                  </span>
                  <span
                    className="badge rounded-pill border text-dark bg-light me-2 px-3 py-2"
                  >
                    <i className="fa fa-plus me-1"></i> Breakfast
                  </span>
                  <span
                    className="badge rounded-pill border text-dark bg-light me-2 px-3 py-2"
                  >
                    <i className="fa fa-plus me-1"></i> Clean
                  </span>
                  <span
                    className="badge rounded-pill border text-dark bg-light me-2 px-3 py-2"
                  >
                    <i className="fa fa-plus me-1"></i> Dinner
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leave a Reply Section */}
        <section id="leave-a-reply">
          <div
            className="container"
            style={{ maxWidth: "1200px", marginTop: "60px" }}
          >
            <div className="row">
              {/* Ratings */}
              <div className="col-md-3">
                <h5 className="fw-bold">Leave a Reply</h5>
                <p className="text-muted" style={{ fontSize: "14px" }}>
                  Your email address will not be published.
                </p>
                <div className="row">
                  <div className="col-sm-6 mb-3">
                    <label className="d-block fw-semibold mb-1">
                      Cleanliness
                    </label>
                    <div className="text-secondary">
                      <i className="fa fa-star-o me-1"></i>
                      <i className="fa fa-star-o me-1"></i>
                      <i className="fa fa-star-o me-1"></i>
                      <i className="fa fa-star-o me-1"></i>
                      <i className="fa fa-star-o"></i>
                    </div>
                  </div>
                  <div className="col-sm-6 mb-3">
                    <label className="d-block fw-semibold mb-1">Service</label>
                    <div className="text-secondary">
                      <i className="fa fa-star-o me-1"></i>
                      <i className="fa fa-star-o me-1"></i>
                      <i className="fa fa-star-o me-1"></i>
                      <i className="fa fa-star-o me-1"></i>
                      <i className="fa fa-star-o"></i>
                    </div>
                  </div>
                  <div className="col-sm-6 mb-3">
                    <label className="d-block fw-semibold mb-1">
                      Facilities
                    </label>
                    <div className="text-secondary">
                      <i className="fa fa-star-o me-1"></i>
                      <i className="fa fa-star-o me-1"></i>
                      <i className="fa fa-star-o me-1"></i>
                      <i className="fa fa-star-o me-1"></i>
                      <i className="fa fa-star-o"></i>
                    </div>
                  </div>
                  <div className="col-sm-6 mb-3">
                    <label className="d-block fw-semibold mb-1">
                      Value for money
                    </label>
                    <div className="text-secondary">
                      <i className="fa fa-star-o me-1"></i>
                      <i className="fa fa-star-o me-1"></i>
                      <i className="fa fa-star-o me-1"></i>
                      <i className="fa fa-star-o me-1"></i>
                      <i className="fa fa-star-o"></i>
                    </div>
                  </div>
                  <div className="col-sm-6 mb-3">
                    <label className="d-block fw-semibold mb-1">Location</label>
                    <div className="text-secondary">
                      <i className="fa fa-star-o me-1"></i>
                      <i className="fa fa-star-o me-1"></i>
                      <i className="fa fa-star-o me-1"></i>
                      <i className="fa fa-star-o me-1"></i>
                      <i className="fa fa-star-o"></i>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="col-md-5">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Write Your Comment"
                  ></textarea>
                </div>
                <button
                  className="btn btn-primary"
                  style={{
                    borderRadius: "6px",
                    background: "linear-gradient(to right, #002b8a, #0052cc)"
                  }}
                >
                  Post Comment <i className="fa fa-arrow-right ms-1"></i>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Location Map Section */}
        <section id="map-location">
          <div
            className="container"
            style={{ maxWidth: "1200px", marginTop: "60px" }}
          >
            <h4 className="fw-bold" style={{ color: "#1a1a8c" }}>
              Where you’ll be
            </h4>
            <p className="text-dark fs-5 mb-4">
              Greater London, England, United Kingdom
            </p>

            <div
              className="ratio ratio-16x9"
              style={{ borderRadius: "12px", overflow: "hidden" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24140.50118372927!2d-0.15855540838862074!3d51.50986554956479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b33360e98c3%3A0x94c86e460e3c4763!2sLondon%2C%20UK!5e0!3m2!1sen!2sin!4v1711328609849!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="map"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
