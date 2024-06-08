import { useForm } from "react-hook-form";
import Button from "../Button/Button";

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => alert(JSON.stringify(data));
  return (
    <div>
      {" "}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Username
          </label>
          <input
            {...register("name", {
              required: {
                value: true,
                message: "Required",
              },
            })}
            placeholder="Input your name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <p className="text-red-500">{errors.name && errors.name.message}</p>
        </div>
        <div className="mb-3">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            {...register("email", {
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message:"Invalid Email"
              },
            })}
            placeholder="myemail@mail.com"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <p className="text-red-500">{errors.email && errors.email.message}</p>
        </div>

        <Button>Submit</Button>
      </form>
    </div>
  );
};

export default ReactHookForm;
