import React from "react";
import BranchModal from "./components/BranchModal/index.jsx";
import SelectBoxPortal from "./components/SelectBox";
import Table from './components/Table/index.jsx';

function App() {
  return (
    <div>
      <Table />
      <SelectBoxPortal />
      <BranchModal />
    </div>
  );
}

export default App;
