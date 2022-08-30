import React from "react";

const Landing = () => {
  return (
    <div className="Landing">
      <div className="container ">
        <div className="title d-flex justify-content-between py-2">
          <h1 style={{ color: "#0097C2" }}>
            <img src="/Logo.png" alt="" className="w-100" />
          </h1>
          <div>
            <img src="Group 87.png" alt="" style={{ background: "" }} />
          </div>
        </div>

        <div className="row ">
          <div className="col-md-6 col-lg-3 border-x-2 mb-3">
            <div className="card">
              <img
                src="/Customer Engagement.png"
                alt=""
                style={{ height: "150px" }}
              />
              <div
                className="card-body  rounded-4 text-white d-flex flex-column  justify-content-between "
                style={{ background: "#0A488F", height: "200px" }}
              >
                <h6 className="card-title ">Customer Engagement </h6>
                <p className="card-text ">
                  Get your own mobile app for industry specific
                </p>
                <div className="d-flex align-items-center justify-content-between ">
                  <h6>100 DTSU*</h6>
                  <div className="d-flex gap-2">
                    <img src="/Group 45.png" alt="" />
                    <img src="/Group 44.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-2">
            <div className="card">
              <img
                src="/Actionable Insights.png"
                alt=""
                style={{ height: "150px" }}
              />
              <div
                className="card-body  rounded-4 text-white d-flex flex-column  justify-content-between "
                style={{ background: "#579064", height: "200px" }}
              >
                <h6 className="card-title ">Actionable Insighets</h6>
                <p className="card-text ">Create Dashboards</p>
                <div className="d-flex align-items-center justify-content-between ">
                  <h6>100 DTSU*</h6>
                  <div className="d-flex gap-2">
                    <img src="/Group 45.png" alt="" />
                    <img src="/Group 44.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-2">
            <div className="card">
              <img
                src="/Employees Productivity.png"
                alt=""
                style={{ height: "150px" }}
              />
              <div
                className="card-body  rounded-4 text-white d-flex flex-column  justify-content-between "
                style={{ background: "#950000", height: "200px" }}
              >
                <h6 className="card-title ">Employees Productivity</h6>
                <p className="card-text ">
                  KPI Builder , Work Conf,Create Oracle Requests
                </p>
                <div className="d-flex align-items-center justify-content-between ">
                  <h6>100 DTSU*</h6>
                  <div className="d-flex gap-2">
                    <img src="/Group 45.png" alt="" />
                    <img src="/Group 44.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-2">
            <div className="card">
              <img
                src="/Operations Excellence.png"
                alt=""
                style={{ height: "150px" }}
              />
              <div
                className="card-body  rounded-4 text-white d-flex flex-column  justify-content-between "
                style={{ background: "#8F6C0A", height: "200px" }}
              >
                <h6 className="card-title ">Operations Excellence</h6>
                <p className="card-text ">Tenant/lessee Managment</p>
                <div className="d-flex align-items-center justify-content-between ">
                  <h6>100 DTSU*</h6>
                  <div className="d-flex gap-2">
                    <img src="/Group 45.png" alt="" />
                    <img src="/Group 44.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex flex-row justify-content-end text-white ">
          <div>
            <i
              className="fa-solid fa-gear fa-1x me-2 "
              style={{ color: "#7AD676" }}
            ></i>
            <span>
              Remaining DTSUs: <span className="m-4">200</span>
            </span>
            <i
              className="fa-solid fa-gear fa-1x m-2 "
              style={{ color: "#D84242" }}
            ></i>
            <span>
              Consumed DTSUs: <span className="ms-4">350</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
