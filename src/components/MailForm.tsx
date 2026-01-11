import React from "react";
import { BsSend } from "react-icons/bs";
const MailForm = () => {
  const HandleSubmit = (form: any) => {
    form.preventDefault();
    console.log(form);
  };
  return (
    <form className="mt-8 flex flex-col gap-4 max-w-md" onSubmit={HandleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="px-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="px-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <textarea
        name="message"
        placeholder="Your Message 💬"
        rows={10}
        required
        className="px-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <div className="flex justify-end">
        <button
          type="submit"
          className="mt-2 flex border w-full  justify-center-safe gap-3 transition font-semibold rounded-md px-4 py-2"
        >
          connect
          <BsSend />
        </button>
      </div>
    </form>
  );
};

export default MailForm;
