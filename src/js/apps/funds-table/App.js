import React from "react";
import Modal from "./components/Modal/index.jsx";
import TabFilters from "./components/TabFilters/index.jsx";
import Table from "./components/Table/index.jsx";

function App() {
  return (
    <div className="funds-table">
      <TabFilters />
      <Table />
      <Modal />
    </div>
  );
}

export default App;
