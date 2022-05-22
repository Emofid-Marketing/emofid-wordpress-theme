import React, { Fragment, useEffect, useState } from "react";
import calculator from "./store/calculator";
import CalculatorBox from "./components/CalculatorBox/index.jsx";

function App() {

  const [loading, setLoading] = useState(true);

  async function getOnlineData() {
    const fundsList = [];
    let res = await fetch(`https://fundsapi.emofid.com/api/Investment/Returns`);
    let funds = await res.json();

    funds.forEach(fund => {

      const { fundCode, staticInfo, return1Y, return3Y, return5Y } = fund;

      if (fundCode === "0") return;

      let thisFund = {
        id: fundCode,
        title: staticInfo.faName,
        iconName: staticInfo.enName,
        fundType: staticInfo.fundType,
        risk: 4,
        ratios: {
          "1": return1Y / 100,
          "3": return3Y / 100,
          "5": return5Y / 100,
        },
      };

      fundsList.push(thisFund);

    });

    calculator.setFunds(fundsList);
    setLoading(false);
  }

  useEffect(() => {
    getOnlineData();
  }, []);

  if (loading) return "Loading";

  return (
    <Fragment>
      <p className="t-16 lh-26 text-dark text-center mb-3">ابتدا صندوق سرمایه‌گذاری مورد نظر را انتخاب کرده و سپس نوار لغزنده را جابه‌جا کنید.</p>
      <CalculatorBox />
    </Fragment>
  );
}

export default App;
