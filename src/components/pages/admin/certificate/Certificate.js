import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCertificate,
  deleteCertificateAdmin,
} from "../../../../redux/actions/action";
import { Link } from "react-router-dom";
const Certificate = () => {
  const dispatch = useDispatch();
  const { isLoading, dataCertificatesAdmin } = useSelector(
    (state) => state.certificateReducerAdmin
  );

  useEffect(() => {
    dispatch(getAllCertificate());
  }, [dispatch]);

  // useEffect(() => {
  //   certificateAdminApi.getAllCertificate().then((certificate) => {
  //     console.log(certificate.data);
  //   });
  // }, []);
  const onClickDelete = (id) => {
    dispatch(deleteCertificateAdmin(id));
  };

  return (
    <div className="admin">
      <div className="admin__slide__wrapper">
        <h1 className="admin__slide__wrapper__heading">Chứng chỉ</h1>

        <div className="admin__slide__wrapper__add">
          <Link
            className="admin__slide__wrapper__add__link"
            to="/admin/certificate/add"
          >
            Add new chứng chỉ
          </Link>
        </div>
      </div>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <table>
          <thead>
            <tr className="admin__slide__title">
              <td className="admin__slide__id">ID</td>
              <td className="admin__slide__img">Hinh</td>
              <td className="admin__slide__name">Title</td>
              <td className="admin__slide__status">trang thai</td>
              <td className="admin__slide__manipulation" colSpan="2">
                thao tac
              </td>
            </tr>
          </thead>
          <tbody>
            {dataCertificatesAdmin?.map((item) => {
              return (
                <tr key={item._id}>
                  <td> {item._id}</td>
                  <td className="admin__slide__item__img">
                    <img src={item.img} alt="" />
                  </td>

                  <td>{item.title}</td>
                  <td>{item.status}</td>
                  <td>
                    <button
                      onClick={() => {
                        onClickDelete(item._id);
                      }}
                    >
                      Delete
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

export default Certificate;
