import React, { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const InviteModal = ({ isOpen, onClose }) => {
  const [invites, setInvites] = useState(0);
  const [duration, setDuration] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  //price calculationn
  const handleCalculate = () => {
    const pricePerInvite = 10;
    const pricePerHour = 5;
    setTotalPrice(invites * pricePerInvite + duration * pricePerHour);
  };

  //pie chart
  const data = {
    labels: ["Total Invites", "Total Hours"],
    datasets: [
      {
        label: "Event Costs",
        data: [invites, duration],
        backgroundColor: ["rgba(54, 162, 235, 0.6)", "rgba(255, 206, 86, 0.6)"],
        borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)"],
        borderWidth: 1,
      },
    ],
  };

  // Pie chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  const handleNumericInput = (e, setFunction) => {
    const value = e.target.value;
    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setFunction(value);
    }
  };

  return (
    <div
      className={`modal-overlay ${isOpen ? "modal-visible" : "modal-hidden"}`}
    >
      <div className="modal-content">
        <button onClick={onClose} className="modal-close-btn">
          &times;
        </button>
        <h2 className="text-lg font-bold mb-2">Invite to Event</h2>

        <label htmlFor="invites" className="block font-medium">
          Number of Invites:
        </label>
        <input
          type="text"
          inputMode="numeric"
          id="invites"
          value={invites}
          onChange={(e) => handleNumericInput(e, setInvites)}
          className="modal-input"
        />

        <label htmlFor="duration" className="block mt-4 font-medium">
          Duration of Event (hours):
        </label>
        <input
          type="text"
          inputMode="numeric"
          id="duration"
          value={duration}
          onChange={(e) => handleNumericInput(e, setDuration)}
          className="modal-input "
        />

        <button
          onClick={handleCalculate}
          className="modal-button w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition duration-300"
        >
          Calculate
        </button>

        <div className="chart-container">
          <Pie data={data} options={options} />
        </div>
        <p className="price-display mt-4 text-lg font-semibold text-gray-800 text-center">
          Total Price: ₹{totalPrice}
        </p>
      </div>
    </div>
  );
};

export default InviteModal;
