import React, { useEffect, useState } from "react";
import Counter from "../home/Counter";
import TemplateCertificate from "./TemplateCertificate";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getCertificate } from "../../../redux/actions/action";
import ListItemCertificate from "./ListItemCertificate.js";
import FormAnimation from "../formAnimation/FormAnimation";
import { Ring } from "react-awesome-spinners";
import certificateApi from "API/certificateApi";

const Certificate = () => {
  const dispatch = useDispatch();
  const [hiddenListBox, setHiddenListBox] = useState(false);
  const [dataTemplate, setDataTemplate] = useState([]);
  const [hiddenNotify, setHiddenNotify] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { isLoading, dataCertificates, isNotify } = useSelector(
    (state) => state.certificateReducer
  );

  useEffect(() => {
    if (dataCertificates.length > 0) {
      setHiddenListBox(true);
    }

    if (isNotify) {
      setHiddenNotify(true);
      setTimeout(() => {
        setHiddenNotify(false);
      }, 3000);
    }
  }, [dataCertificates, isNotify]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      search: "",
    },
  });

  useEffect(() => {
    certificateApi
      .getAllCertificate(3)
      .then((data) => {
        setDataTemplate(data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const onSubmit = (data, e) => {
    e.preventDefault();
    dispatch(getCertificate(data));
    reset();
    // window.scrollTo(0, 0);
  };

  const style = {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    top: "12%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
    maxHeight: "100vh",
    background: "#f4f4f4f4",
  };
  return (
    <div className="certificate">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <h1 className="certificate__heading">TRA C???U CH???NG CH???</h1>
            <p className="certificate__text">
              <b>iModel.vn</b> cung c????p c??ng cu?? tra c????u k????t qua?? ho??c t????p, ch????ng
              chi?? ho??c vi??n online b????ng ca??ch nh????p Code va??o ?? b??n d??????i.
            </p>
            <p className="certificate__text">
              <b>iModel.vn</b> ??a??m ba??o s???? minh ba??ch, c??ng khai, c??ng b????ng trong
              vi????c c??ng b???? k????t qua?? ho??c t????p cu??a t????ng ho??c vi??n.
            </p>

            <form
              method="POST"
              className="certificate__form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="certificate__form__input">
                <input
                  {...register("search", {
                    required: true,
                    maxLength: 20,
                    minLength: 2,
                  })}
                  placeholder="Enter code here"
                  className="form__register__course__wrapper__input"
                />
                <p className="form__register__course__wrapper__input__error">
                  {errors.search?.type === "required" && "*Search is required"}
                </p>
              </div>
              <div className="certificate__form__button">
                <button>Send Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Counter />
      <TemplateCertificate dataTemplate={dataTemplate} />

      {hiddenListBox ? (
        <ListItemCertificate setHiddenListBox={setHiddenListBox} />
      ) : (
        ""
      )}

      {isLoading ? (
        <div style={style}>
          <Ring />
        </div>
      ) : hiddenNotify ? (
        <FormAnimation
          setHiddenNotify={setHiddenNotify}
          title="Kh??ng c?? ch???ng ch??? n??y"
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Certificate;
