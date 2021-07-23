import React from "react";
import ReactHtmlParser from "react-html-parser";
import moment from "moment";
const BoxDocument = ({ document }) => {
  return (
    <div className="col-xl-8 col-lg-8">
      {document.length > 0 ? (
        document?.map((item) => {
          return (
            <div className="box-document-wrapper" key={item._id}>
              <h4 className="box-document-title">{item.title}</h4>
              <p className="box-document-dateupdate">
                Ngày đăng: {moment(item.dateUpdate).format("LLL")}
              </p>

              <p className="box-document-download">
                Link download tài liệu: {item.link}
              </p>

              <div className="box-document-note">
                {" "}
                {ReactHtmlParser(item.note)}
              </div>
            </div>
          );
        })
      ) : (
        <h2>Không có tài liệu...</h2>
      )}
    </div>
  );
};

export default BoxDocument;
