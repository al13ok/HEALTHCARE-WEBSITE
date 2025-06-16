import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 px-4 md:px-20 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">Contact Us</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div>
            <p className="mb-4 text-gray-700">
              <strong>Clinic Location:</strong><br />
              1st Floor, XYZ Complex, Near ABC Hospital,<br />
              Sector 12, Noida, Uttar Pradesh - 201301
            </p>
            <p className="mb-4 text-gray-700">
              <strong>Phone:</strong><br />
              +91 9876543210
            </p>
            <p className="mb-4 text-gray-700 hover:text-blue-700 transition">
              <strong>Email:</strong><br />
              drsaumya@example.com
            </p>
            <p className="text-gray-700 hover:text-blue-700 transition">
              <strong>Timings:</strong><br />
              Mon - Sat: 10 AM – 7 PM
            </p>
          </div>

          {/* Google Map */}
          <div>
            <iframe
              title="Clinic Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112057.79677982214!2d77.326004!3d28.567474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce54c260cb64f%3A0x847a545a346bf9f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1718295236421!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
