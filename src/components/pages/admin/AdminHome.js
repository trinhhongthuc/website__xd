import React, { useEffect } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteRegisterCourse,
  getAllRegisterCourse,
} from "redux/actions/action";

const AdminHome = () => {
  const dispatch = useDispatch();

  const { dataAdminHome, isLoading } = useSelector(
    (state) => state.AdminHomeReducer
  );

  useEffect(() => {
    dispatch(getAllRegisterCourse());
  }, [dispatch]);
  const onClickComplete = (id, complete) => {
    dispatch(deleteRegisterCourse(id));
  };

  return (
    <div className="admin">
      <div className="admin__slide__wrapper">
        <h1 className="admin__slide__wrapper__heading">Khóa học đăng ký</h1>
      </div>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <table>
          <thead>
            <tr className="admin__slide__title admin__rows--home">
              <td className="admin__sdt admin__rows">Số Điện thoại</td>
              <td className="admin__name admin__rows">Tên</td>
              <td className="admin__email admin__rows">Email</td>
              <td className="admin__namsinh admin__rows">Năm sinh</td>
              <td className="admin__facebook admin__rows">Facebook</td>
              <td className="admin__zalo admin__rows">Zalo</td>
              <td className="admin__course admin__rows">Khóa học đăng ký</td>
              <td className="admin__job admin__rows">Công việc</td>
              <td className="admin__job admin__rows">Thời gian</td>
              <td className="admin__job admin__rows"></td>
            </tr>
          </thead>
          <tbody>
            {dataAdminHome?.map((item) => {
              return (
                <tr key={item._id}>
                  <td> {item.sodienthoai}</td>
                  <td> {item.name}</td>
                  <td className="email">
                    {" "}
                    {item.email.length > 20
                      ? item.email.slice(0, 20) + "..."
                      : item.email}
                    <p className="email__url">{item.email}</p>
                  </td>
                  <td>{item.namsinh}</td>
                  <td className="facebook">
                    {item.facebook.length > 25
                      ? item.facebook.slice(0, 25) + "..."
                      : item.facebook}
                    <p className="facebook__url">{item.facebook}</p>
                  </td>
                  <td>{item.zalo}</td>
                  <td>{item.course}</td>
                  <td>{item.job}</td>
                  <td>
                    {
                      //   moment(item.createdAt).format(`HH:MM MMM DD, YYYY`)
                      moment(item.createdAt).startOf("hour").fromNow()
                    }
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        onClickComplete(item._id, item.complete);
                      }}
                    >
                      DElete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminHome;
