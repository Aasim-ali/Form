import React from "react";

function PersonalInfo({ perInfo, setPerInfo, error }) {
  const perChange = (e) => {
    setPerInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div>
      <div className="my-2">
        <label htmlFor="name">Enter Name</label>
        <input
          className={`form-style ${error.name && "border-2 border-red-500"}`}
          type="text"
          name="name"
          id="name"
          placeholder="Enter Name"
          onChange={perChange}
          value={perInfo.name}
        />
        {error.name && (
          <span className="text-red-500 text-sm capitalize">{error.name}</span>
        )}
      </div>
      <div className="my-2">
        <label htmlFor="email">Enter Email</label>
        <input
          className={`form-style ${error.email && "border-2 border-red-500"}`}
          type="email"
          name="email"
          id="email"
          placeholder="Enter Email"
          onChange={perChange}
          value={perInfo.email}
        />
        {error.email && (
          <span className="text-red-500 text-sm capitalize">{error.email}</span>
        )}
      </div>
      <div className="my-2">
        <label htmlFor="phone">Enter Phone</label>
        <input
          className={`form-style ${error.phone && "border-2 border-red-500"}`}
          type="number"
          name="phone"
          id="phone"
          value={perInfo.phone}
          placeholder="Enter Phone"
          onChange={perChange}
        />
        {error.phone && (
          <span className="text-red-500 text-sm capitalize">{error.phone}</span>
        )}
      </div>
    </div>
  );
}

export default PersonalInfo;
