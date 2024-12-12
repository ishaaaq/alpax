import React from "react";

const OfficeMap = () => {
  return (
    <div
      style={{
        width: "38.2rem",
        height: "27.4rem",

        borderRadius: "8px",
        overflow: "hidden",
        backgroundColor: "white",
        padding: "5px",
        border: "rgba(0, 0, 0, 0.25) 0.5px solid",
      }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.141939015593!2d7.4611299735286725!3d9.050814988650115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b145d72ea6f%3A0xd24b4532d136d50b!2s28%20Arusha%20Cres%2C%20Wuse%2C%20Wupa%20904101%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1733954939891!5m2!1sen!2sng"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.141939015593!2d7.4611299735286725!3d9.050814988650115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b145d72ea6f%3A0xd24b4532d136d50b!2s28%20Arusha%20Cres%2C%20Wuse%2C%20Wupa%20904101%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1733954939891!5m2!1sen!2sng"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe> */}
    </div>
  );
};

export default OfficeMap;
