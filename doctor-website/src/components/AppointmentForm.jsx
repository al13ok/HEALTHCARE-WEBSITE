import React from "react";

const AppointmentForm = () => {
  return (
    <section id="appointment" className="py-12 px-4 md:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl font-bold text-blue-800 mb-2">BOOK</h2>
          <h3 className="text-xl font-semibold mb-4">Your Appointment Today</h3>
          <p className="text-gray-600">
            Are you experiencing respiratory issues or seeking expert advice on
            lung health? Our experienced pulmonologist is here to provide the
            highest level of care for all your pulmonary concerns.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white shadow-md rounded-lg p-6 border">
          <h3 className="text-xl font-semibold mb-4">Book an Appointment</h3>
          <form className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Your age"
                className="w-full border p-2 rounded"
              />
            </div>

            <div className="flex gap-4">
              <input
                type="tel"
                placeholder="Phone number"
                className="w-full border p-2 rounded"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border p-2 rounded"
              />
            </div>

            <div className="flex gap-4">
              <input
                type="date"
                className="w-full border p-2 rounded text-gray-500"
              />
              <input
                type="time"
                className="w-full border p-2 rounded text-gray-500"
              />
            </div>

            <textarea
              placeholder="Type your essential message here..."
              className="w-full border p-2 rounded h-24"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-800 text-white py-3 rounded transition-all duration-300 hover:bg-blue-900 hover:scale-[1.01]"
            >
              ✔️ Make an Appointment
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
