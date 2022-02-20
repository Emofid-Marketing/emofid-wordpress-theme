import React, { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import DataStore from "../../store/DataStore.js";
import Tabs from "../../components/Tabs/index.jsx";
import styles from "./styles.module.scss";
import BranchesTable from "../BranchesTable/index.jsx";
import OfficesTable from "../OfficesTable/index.jsx";

function Table() {
  const [activeTab, setActiveTab] = useState(1);

  function changeTabHandler(tabId) {
    setActiveTab(tabId);
  }

  useEffect(async () => {
    let response = await fetch(
      `https://portal.emofid.com/api/branches?city_id=${DataStore.active_city_id}`
    );
    response = await response.json();
    DataStore.setActiveCityName(response.city_name);
    DataStore.setBranches(response.branches);
    DataStore.setOffices(response.offices);
  }, [DataStore.active_city_id]);

  const ActiveView = activeTab === 1 ? <BranchesTable /> : <OfficesTable />;

  return (
    <div className={styles.Table}>
      <Tabs handlerFunction={changeTabHandler} />
      {ActiveView}
    </div>
  );
}

export default observer(Table);
