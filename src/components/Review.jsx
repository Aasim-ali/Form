import React from "react";

function Review({ perInfo, addInfo }) {
  return (
    <div>
      <h3 className="text-xl font-medium text-yellow-400 mt-2">
        Personal Info
      </h3>
      <p className="review-para">
        <span className="text-gray-400">Name:</span> {perInfo.name}
      </p>
      <p className="review-para">
        <span className="text-gray-400">Email:</span> {perInfo.email}
      </p>
      <p className="review-para">
        <span className="text-gray-400">Phone:</span> {perInfo.phone}
      </p>

      <h3 className="text-xl font-medium text-yellow-400 mt-2">Address Info</h3>
      <p className="review-para">
        <span className="text-gray-400">Address Line 1:</span>{" "}
        {addInfo.address1}
      </p>
      <p className="review-para">
        <span className="text-gray-400">Address Line 2:</span>{" "}
        {addInfo.address2}
      </p>
      <p className="review-para">
        <span className="text-gray-400">City:</span> {addInfo.city}
      </p>
      <p className="review-para">
        <span className="text-gray-400">State:</span> {addInfo.state}
      </p>
      <p className="review-para">
        <span className="text-gray-400">Zip Code:</span> {addInfo.zipCode}
      </p>
    </div>
  );
}

export default Review;
