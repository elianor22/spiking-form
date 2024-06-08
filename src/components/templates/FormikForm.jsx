import Button from "../Button/Button";
import { Formik } from "formik";

const FormikForm = () => {
  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  const validateForm = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Required ";
    }
    if (!values.email) {
      errors.email = "Required";
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  };
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
        }}
        onSubmit={onSubmit}
        validate={validateForm}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Username
              </label>
              <input
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
                placeholder="Input your name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <p className="text-red-500">
                {errors.name && touched.name && errors.name}
              </p>
            </div>
            <div className="mb-3">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="myemail@mail.com"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <p className="text-red-500">
                {errors.email && touched.email && errors.email}
              </p>
            </div>

            <Button>{isSubmitting ? "Submitting..." : "Submit"}</Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
