import React from "react";

export const ContactMe = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-gradient-to-r from-green-200 to-blue-300 rounded-3xl shadow-xl p-6 m-6 w-11/12 md:w-4/5">
      <div className="flex justify-center">
        <h1 className="font-Main font-semibold text-gray-700 text-3xl">
          Contact me
        </h1>
      </div>
      <div className="flex justify-center">
        <form action="submit" className="flex flex-col" onSubmit={onSubmit}>
          <div className="grid grid-cols-2">
            <input
              type="text"
              name="name"
              id="name"
              className="rounded-xl border p-1 pl-2 m-2"
              placeholder="Name"
            />
            <input
              type="text"
              name="email"
              id="email"
              className="rounded-xl border p-1 m-2 pl-2"
              placeholder="Email"
            />
          </div>

          <textarea
            type="text"
            name="message"
            id="message"
            className="rounded-xl border p-1 m-2 pl-2 resize-none"
            rows={5}
            placeholder="Message"
          />
          <button
            type="submit"
            className="rounded text-primary bg-white p-2 m-2 hover:bg-primary hover:text-white duration-300 hover:scale-105 hover:shadow-xl active:scale-100"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};
