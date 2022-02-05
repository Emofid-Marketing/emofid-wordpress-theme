import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import cols from "../../data/branchesColumns";
import TableRow from "../TableRow/index.jsx";
import styles from "./styles.module.scss";

function TableBody() {
  const [rows, setRows] = useState([]);

  useEffect(async () => {
    let response = await fetch(`http://localhost/api/city.php?city_id=1`);
    response = await response.json();
    setRows(response.data.branches.data);
  }, [rows]);

  const columns = cols.map((item, index) => {
    return (
      <div className={styles.column} key={index}>
        <span>{item.title}</span>
      </div>
    );
  });

  const Rows = rows.map((branch) => {
    return <TableRow branch={branch} key={branch.id} />;
  });

  return (
    <div className={styles.TableBody}>
      <div className={styles.tableHead}>{columns}</div>
      <div className={styles.tableBody}>{Rows}</div>
    </div>
  );
}

export default TableBody;
