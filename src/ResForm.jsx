import React from "react";
import { Formik} from "formik";
import * as Yup from "yup";
import data from './data.json';
import "./ResForm.css";
import { useHistory } from "react-router-dom";


function ResForm() {

  const history = useHistory();

  return (
    <div>
     <Formik
        initialValues={{name:'', emailId: "", password: "" ,phoneNo :''}}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
           if(data.data.emailId === values.emailId && data.data.phoneNo === values.phoneNo && data.data.password === values.password && data.data.name === values.name){
             history.push("/Home");
           }
            console.log("log in", values, data);
          }, 500);
        }}
        validationSchema={Yup.object().shape({
          name : Yup.string().required("Required").matches(/^[a-zA-Z]+(([-][a-zA-Z ])?[a-zA-Z])$/,"name should contain alphabet and '-'"),
          emailId: Yup.string().email().required("Required"),
          phoneNo : Yup.string().required("required").matches(/[0-9]/, "mobile should 10 digit"),
          password: Yup.string()
            .required("No password provided")
            .min(8, "password is too short")
            .matches(/(?=.*[0-9])/, "password should contain a number"),
        })}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
          } = props;

          return (
            <form autoComplete="off" onSubmit={handleSubmit}>
            <div className="inner">
            <div className="profile"><img src="https://images.unsplash.com/photo-1430990480609-2bf7c02a6b1a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8ZnJlZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="profile"/></div>
            <div className="form_field">
              <input
                type="text"
                value={values.name}
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Name"
                className={errors.name && touched.name && "err" }
              />
              {errors.name && touched.name && (
                  <div className="err_msg">{errors.name}</div>
              )}
              </div>
              <div className="form_field">

              <input
                type="text"
                value={values.emailId}
                name="emailId"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Email"
                className={errors.emailId && touched.emailId && "err" }
              />
              {errors.emailId && touched.emailId && (
                  <div className="err_msg">{errors.emailId}</div>
              )}
              </div>
              <div className="form_field">

              <input
                type="text"
                value={values.phoneNo}
                name="phoneNo"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Mobile number"
                className={errors.phoneNo && touched.phoneNo && "err" }
              />
              {errors.phoneNo && touched.phoneNo && (
                  <div className="err_msg">{errors.phoneNo}</div>
              )}
              </div>
              <div className="form_field">

              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="password"
                className={errors.password && touched.password && "err" }
              />
               {errors.password && touched.password && (
                  <div className="err_msg">{errors.password}</div>
              )}
              </div>
              <button type="submit" disabled={isSubmitting}>
                Register
              </button>
              </div>
            </form>
          );
        }}
      </Formik>
   
    </div>
  );
}

export default ResForm;