import React, { Fragment } from "react";
import CalculatorBox from "./components/CalculatorBox/index.jsx";

function App() {
    return (
        <Fragment>
            <p className="t-16 lh-26 text-dark text-center mb-3">یکی از صندوق های سرمایه گذاری را انتخاب کنید و نوار لغزنده مبلغ را جابجا کنید</p>
            <CalculatorBox />
        </Fragment>
    );
}

export default App;