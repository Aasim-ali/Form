import React, { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import Address from "./Address";
import Review from "./Review";
const steps = [
  {
    id: 1,
    title: "Personal Info",
  },
  {
    id: 2,
    title: "Address Info",
  },
  {
    id: 3,
    title: "Review",
  },
];
function Form() {
  const [perError, setPerError] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [addError, setAddError] = useState({
    address1: "",
    address2: "",
    state: "",
    city: "",
    zipCode: "",
  });
  const [step, setStep] = useState(1);
  const [perInfo, setPerInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [addInfo, setAddInfo] = useState({
    address1: "",
    address2: "",
    state: "",
    city: "",
    zipCode: "",
  });

  function checkValidation() {
    let hasError = false;
    let newError = {};
    if (step == 1) {
      for (const key in perInfo) {
        if (!perInfo[key]) {
          hasError = true;
          newError[key] = `${key} is required`;
        } else if (key === "phone" && !/^[0-9]{10}$/.test(perInfo[key])) {
          hasError = true;
          newError[key] = `Phone no must be 10`;
        }
      }
      setPerError(newError);
    }
    if (step == 2) {
      for (const key in addInfo) {
        if (!addInfo[key]) {
          hasError = true;
          newError[key] = `${key} is required`;
        }
      }
      setAddError(newError);
    }
    return hasError;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!checkValidation()) {
      if (step === 1)
        localStorage.setItem("personalInfo", JSON.stringify(perInfo));
      if (step === 2)
        localStorage.setItem("addressInfo", JSON.stringify(addInfo));
      setStep((prev) => (prev === 3 ? prev : prev + 1));
    }
  };

  return (
    <div className="max-w-[400px] w-full p-2">
      <div className="flex justify-between">
        {steps.map((item, index) => {
          return (
            <div key={item.id} className="flex flex-col items-center">
              <span
                className={`py-1 px-3 rounded-full ${
                  item.id === step
                    ? "bg-yellow-400 text-black"
                    : "border border-white"
                } `}
              >
                {item.id}
              </span>
              <span className={` ${item.id === step ? "text-yellow-400" : ""}`}>
                {item.title}
              </span>
            </div>
          );
        })}
      </div>

      <form onSubmit={handleSubmit}>
        {step === 1 ? (
          <PersonalInfo
            perInfo={perInfo}
            setPerInfo={setPerInfo}
            error={perError}
          />
        ) : step === 2 ? (
          <Address addInfo={addInfo} setAddInfo={setAddInfo} error={addError} />
        ) : step === 3 ? (
          <Review perInfo={perInfo} addInfo={addInfo} />
        ) : (
          <></>
        )}
        <div className="flex justify-between mt-6">
          <button
            className="rounded-lg py-2 px-4 text-black bg-gray-400 cursor-pointer"
            type="button"
            onClick={() => setStep((prev) => (prev === 1 ? prev : prev - 1))}
            disabled={step === 1}
          >
            Back
          </button>
          <button
            className="rounded-lg py-2 px-4 text-black bg-yellow-400 cursor-pointer"
            type="submit"
          >
            {step === 3 ? "Submit" : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
