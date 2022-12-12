const ContactForm = () => {
  const formData = (event) => {
    event.preventDefault();
    const name = event.target.fullname.value;
    console.log(name);
  };
  return (
    <form
      onSubmit={formData}
      className="rounded-lg mt-10 shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-blue-500 w-9/12 mx-auto"
    >
      <h1 className="text-2xl font-bold dark:text-gray-50">Contact With US</h1>

      <label htmlFor="fullname" className=" font-light mt-8 dark:text-gray-50">
        Full name<span className="text-red-500 dark:text-gray-50">*</span>
      </label>
      <input
        type="text"
        name="fullname"
        className="bg-transparent text-white border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light "
      />

      <label htmlFor="email" className=" font-light mt-4 dark:text-gray-50">
        E-mail<span className="text-red-500">*</span>
      </label>
      <input
        type="email"
        name="email"
        className="bg-transparent text-white border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light "
      />

      <label htmlFor="subject" className=" font-light mt-4 dark:text-gray-50">
        Subject<span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name="subject"
        className="bg-transparent text-white border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light "
      />

      <label htmlFor="message" className=" font-light mt-4 dark:text-gray-50">
        Message<span className="text-red-500">*</span>
      </label>
      <textarea
        name="message"
        className="bg-transparent text-white border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light "
      ></textarea>
      <div className="flex flex-row items-center justify-start">
        <button className="px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center">
          Send
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
