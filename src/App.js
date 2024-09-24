import React, { useState } from "react";
import Dashboard from "./Dashboard";
import InviteModal from "./InviteModal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <Dashboard />
      <button
        onClick={() => setModalOpen(true)}
        className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-full"
      >
        Invite
      </button>
      {modalOpen && (
        <InviteModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      )}
    </div>
  );
}

export default App;
