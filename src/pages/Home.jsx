// eslint-disable-next-line no-unused-vars
import React from "react";
import BasicForm from "../components/templates/BasicForm";
import FormikForm from "../components/templates/FormikForm";
import ReactHookForm from "../components/templates/ReactHookForm";

const Home = () => {
  return (
    <div className="container mx-auto">
      <h1>
        Implementing Form build vs basic form using Formik , React hook form and
        native form
      </h1>
      <div className="border p-3 radius rounded-lg mt-5">
        <p className=" text-lg">with native form submit</p>
        <div className="mt-3">
          <BasicForm />
        </div>
      </div>
      <div className="border p-3 radius rounded-lg mt-4">
        <p className=" text-lg">with Basic Formik</p>
        <div className="mt-3">
          <FormikForm />
        </div>
      </div>
      <div className="border p-3 radius rounded-lg mt-4">
        <p className=" text-lg">with Basic React Hook Form</p>
        <div className="mt-3">
          <ReactHookForm />
        </div>
      </div>
    </div>
  );
};

export default Home;
