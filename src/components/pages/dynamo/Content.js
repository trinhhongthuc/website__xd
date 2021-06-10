import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Content = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="content" data-aos="fade-up"
    data-aos-duration="1000">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <h1 className="content__heading">
              <span>N</span>ội dung cập nhật
            </h1>
            <p className="content__paragraph">
              <b> iModel.vn</b> luôn luôn lắng nghe phản hồi của người dùng để
              cập nhật nội dung tốt nhất cho các phiên bản tiếp theo.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8 offset-2">
            <div className="content__update">
              <div className="content__update__heading">
                ACOPackage 1.0.4 - Phiên bản cập nhật mới nhất
              </div>

              <div className="content__update__wrapper">
                <h2 className="content__update__wrapper__heading">
                  1. Annotation
                </h2>

                <p className="content__update__wrapper__paragraph">
                  - Multi-Rebar Annotation: tạo annotation theo 2 phương ***
                </p>
                <p className="content__update__wrapper__paragraph">
                  - Multi-Rebar Annotation: tạo annotation theo 2 phương ***
                </p>
              </div>

              <div className="content__update__wrapper">
                <h2 className="content__update__wrapper__heading">
                  2. BoundingBox
                </h2>

                <p className="content__update__wrapper__paragraph">
                  - Intersects: đánh giá va chạm của đối tượng 2D và 3D; trả về
                  true nếu 2 đối tượng giao nhau; false nếu không giao nhau ***
                </p>
                <p className="content__update__wrapper__paragraph">
                  - ElementIntersect: trả về đối tượng ở subElement có va chạm
                  với mainElement (đối tượng trả về nằm trong input subElement)
                  ***
                </p>
              </div>

              <div className="content__update__wrapper">
                <h2 className="content__update__wrapper__heading">3. Modify</h2>

                <p className="content__update__wrapper__paragraph">
                  - IsPainted: trả về true nếu PlanarFace đã được paint, trả về
                  false nếu PlanarFace chưa được paint ***
                </p>
                <p className="content__update__wrapper__paragraph">
                  - PaintPlanarFace: thực hiện lệnh paint đối với PlanarFace ***
                </p>
                <p className="content__update__wrapper__paragraph">
                  - SetGridExtendType: chuyển đổi Grid từ 3D sang 2D hoặc ngược
                  lại ***
                </p>
                <p className="content__update__wrapper__paragraph">
                  - SetLevelExtendType: chuyển đổi Level từ 3D sang 2D hoặc
                  ngược lại ***
                </p>
              </div>

              <div className="content__update__wrapper">
                <h2 className="content__update__wrapper__heading">4. Rebars</h2>

                <p className="content__update__wrapper__paragraph">
                  - GetRebarsInHost: trả về tất cả cốt thép host trên đối tượng
                  bằng cách chọn đối tượng làm đầu vào
                </p>
                <p className="content__update__wrapper__paragraph">
                  - BarOnNormalSide: trả về vector normal của Rebar Set có
                  quantity > 1 & true/false
                </p>
              </div>

              <div className="content__update__wrapper">
                <h2 className="content__update__wrapper__heading">
                  5. Selection
                </h2>

                <p className="content__update__wrapper__paragraph">
                  - PickPoint: trả về điểm đã chọn trong Revit
                </p>
                <p className="content__update__wrapper__paragraph">
                  - SelectDuct, Pipe, Floor, Windo, Door, Rebar: trả về danh
                  sách đối tượng theo category bằng cách quét chọn
                </p>
              </div>

              <div className="content__update__wrapper">
                <h2 className="content__update__wrapper__heading">
                  6. TextNotes
                </h2>

                <p className="content__update__wrapper__paragraph">
                  - BaseDirection: trả về vector chỉ hướng của TextNotes ***
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
