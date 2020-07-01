import request from "@app-front-end/Agent/request";

const VslReports = {
  get: options => {
    return request.get(`/serveVslReport`, options);
  }
};

export default VslReports;
