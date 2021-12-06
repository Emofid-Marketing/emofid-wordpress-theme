import React from "react";
import TabFilters from "./components/TabFilters/index.jsx";
import Table from "./components/Table/index.jsx";

function App() {
  return (
    <div className="funds-table">
      <TabFilters />
      <Table />
    </div>
  );
}

export default App;
