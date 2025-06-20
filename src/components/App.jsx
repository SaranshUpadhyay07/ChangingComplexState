import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    if (name === "fName") {
      setContact((prevValue) => ({
        fName: value,
        lName: prevValue.lName,
        email: prevValue.email,
      }));
    } else if (name === "lName") {
      setContact((prevValue) => ({
        fName: prevValue.fName,
        lName: value,
        email: prevValue.email,
      }));
    } else if (name === "email") {
      setContact((prevValue) => ({
        fName: prevValue.fName,
        lName: prevValue.lName,
        email: value,
      }));
    }
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          name="fName"
          type="text"
          placeholder="First Name"
          onChange={handleChange}
          value={contact.fName}
        />
        <input
          name="lName"
          type="text"
          placeholder="Last Name"
          onChange={handleChange}
          value={contact.lName}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
