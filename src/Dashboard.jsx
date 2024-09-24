import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./Dashboard.css";
import { FaPlus, FaEye, FaSignOutAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const notify = () => toast.warn("This button is disabled!");
const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header />
      <div className="main-content">
        <div className="left-side">
          <Graph />
          <UserMetrics />
        </div>
        <div className="right-side">
          <TrialPeriod />
          <BlogSection />
          <EventsLog />
          <OnlineUsers />
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <h1>Dashboard</h1>
      <div className="header-buttons">
        <button className="btn" onClick={notify}>
          <FaPlus /> Create course
        </button>
        <button className="btn" onClick={notify}>
          <FaEye /> Preview home page
        </button>
        <button className="btn" onClick={notify}>
          <FaEye /> Preview after login
        </button>
        <button className="btn" onClick={notify}>
          <FaSignOutAlt /> View welcome screen
        </button>
      </div>
    </div>
  );
};

const Graph = () => {
  const data = {
    labels: [
      "2021-02-03",
      "2021-02-04",
      "2021-02-05",
      "2021-02-06",
      "2021-02-07",
      "2021-02-08",
      "2021-02-09",
    ],
    datasets: [
      {
        label: "New Signups",
        data: [0, 0.25, 0, 0, 0, 0, 1],
        fill: false,
        borderColor: "#4bc0c0",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "New Signups Over Time",
      },
    },
  };

  return (
    <div className="graph-section">
      <Line data={data} options={options} />
    </div>
  );
};

const UserMetrics = () => {
  return (
    <div className="user-metrics">
      <div className="metric">
        <h3>All users</h3>
        <p>1</p>
      </div>
      <div className="metric">
        <h3>Conversions</h3>
        <p>0%</p>
      </div>
      <div className="metric">
        <h3>30 days sales</h3>
        <p>0</p>
      </div>
      <div className="metric">
        <h3>Avg time</h3>
        <p>0 min</p>
      </div>
      <div className="metric">
        <h3>Courses</h3>
        <p>0</p>
      </div>
      <div className="metric">
        <h3>Course categories</h3>
        <p>0</p>
      </div>
    </div>
  );
};

const TrialPeriod = () => {
  return (
    <div className="trial-period">
      <h3>Trial Period</h3>
      <p>30 DAYS LEFT</p>
      <button className="upgrade-btn" onClick={notify}>
        Upgrade now!
      </button>
    </div>
  );
};

const BlogSection = () => {
  return (
    <div className="blog-section">
      <h3>How to sell courses blog</h3>
      <ul>
        <li>
          Blended Learning: What It Is & Why It Matters & How to Dashboardly (7
          days ago)
        </li>
        <li>
          Join the Course Sales Bootcamp [Free Live Workshops] (12 days ago)
        </li>
        <li>12 Steps to Creating Awesome Live Classes in 2021 (20 days ago)</li>
        <li>
          Guy Kawasaki on the Future of Business in the Midst of a Pandemic (22
          days ago)
        </li>
        <li>
          What is Educational Marketing & How to Use it to Grow with Examples
          (23 days ago)
        </li>
      </ul>
    </div>
  );
};

const EventsLog = () => {
  return (
    <div className="events-log">
      <h3>Events Log</h3>
      <p>hubx logged in 22 minutes ago</p>
    </div>
  );
};

const OnlineUsers = () => {
  return (
    <div className="online-users">
      <h3>Online users</h3>
      <p>
        hubx <span className="online-status"></span>
      </p>
    </div>
  );
};

export default Dashboard;
