import Button from "../Button/Button";

const BasicForm = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email } = e.target;

    const payload = {
      name: name.value,
      email: email.value,
    };

    alert(JSON.stringify(payload));
  };
  return (
    <div>
      {" "}
      <form onSubmit={onSubmit}>
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
            placeholder="Input your name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
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
            placeholder="myemail@mail.com"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <Button>Submit</Button>
      </form>
    </div>
  );
};

export default BasicForm;
