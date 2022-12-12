const ContactForm = () => {
    const formData = (event) => {
        event.preventDefault();
        const name = event.target.fullname.value;
        console.log(name);
    };
    return (
        <div className="pb-20 max-w-[1140px] mx-auto">
            <form
                onSubmit={formData}
                className="flex flex-col px-8 py-8 mx-auto mt-10 bg-blue-500 shadow-xl shadow-blue-500/30"
            >
                <h1 className="text-2xl font-bold dark:text-gray-50">
                    Contact With Us
                </h1>

                <label
                    htmlFor="fullname"
                    className="mt-8 font-light dark:text-gray-50"
                >
                    Full name
                    <span className="text-red-500 dark:text-gray-50">*</span>
                </label>
                <input
                    type="text"
                    name="fullname"
                    className="py-2 pl-4 font-light text-white bg-transparent border-b focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 "
                />

                <label
                    htmlFor="email"
                    className="mt-4 font-light dark:text-gray-50"
                >
                    E-mail<span className="text-red-500">*</span>
                </label>
                <input
                    type="email"
                    name="email"
                    className="py-2 pl-4 font-light text-white bg-transparent border-b focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 "
                />

                <label
                    htmlFor="subject"
                    className="mt-4 font-light dark:text-gray-50"
                >
                    Subject<span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    name="subject"
                    className="py-2 pl-4 font-light text-white bg-transparent border-b focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 "
                />

                <label
                    htmlFor="message"
                    className="mt-4 font-light dark:text-gray-50"
                >
                    Message<span className="text-red-500">*</span>
                </label>
                <textarea
                    name="message"
                    className="py-2 pl-4 font-light text-white bg-transparent border-b focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 "
                ></textarea>
                <div className="flex flex-row items-center justify-start">
                    <button className="flex flex-row items-center px-10 py-2 mt-8 text-lg font-semibold text-blue-500 bg-white">
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
