import React from "react";

function Address({ addInfo, setAddInfo, error }) {
  const addChange = (e) => {
    setAddInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div>
      <div>
        <div className="my-2">
          <label htmlFor="add1">Address Line 1</label>
          <input
            className={`form-style ${
              error.address1 && "border-2 border-red-500"
            }`}
            type="text"
            name="address1"
            id="add1"
            placeholder="Address Line 1"
            onChange={addChange}
            value={addInfo.address1}
          />
          {error.address1 && (
            <span className="text-red-500 text-sm capitalize">
              {error.address1}
            </span>
          )}
        </div>
        <div className="my-2">
          <label htmlFor="add2">Address Line 2</label>
          <input
            className={`form-style ${
              error.address2 && "border-2 border-red-500"
            }`}
            type="text"
            name="address2"
            id="add2"
            placeholder="Address Line 2"
            onChange={addChange}
            value={addInfo.address2}
          />
          {error.address2 && (
            <span className="text-red-500 text-sm capitalize">
              {error.address2}
            </span>
          )}
        </div>
        <div className="my-2">
          <label htmlFor="state">State</label>
          <input
            className={`form-style ${error.state && "border-2 border-red-500"}`}
            type="text"
            name="state"
            id="state"
            placeholder="State"
            onChange={addChange}
            value={addInfo.state}
          />
          {error.state && (
            <span className="text-red-500 text-sm capitalize">
              {error.state}
            </span>
          )}
        </div>
        <div className="flex gap-x-4">
          <div className="my-2">
            <label htmlFor="city">City</label>
            <input
              className={`form-style ${
                error.city && "border-2 border-red-500"
              }`}
              type="text"
              name="city"
              id="city"
              placeholder="City"
              onChange={addChange}
              value={addInfo.city}
            />
            {error.city && (
              <span className="text-red-500 text-sm capitalize">
                {error.city}
              </span>
            )}
          </div>
          <div className="my-2">
            <label htmlFor="code">Zip Code</label>
            <input
              className={`form-style ${
                error.zipCode && "border-2 border-red-500"
              }`}
              type="number"
              name="zipCode"
              id="code"
              placeholder="Zip Code"
              onChange={addChange}
              value={addInfo.zipCode}
            />
            {error.zipCode && (
              <span className="text-red-500 text-sm capitalize">
                {error.zipCode}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;
