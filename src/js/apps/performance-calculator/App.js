import React, { Fragment } from "react";
import CalculatorBox from "./components/CalculatorBox/index.jsx";

function App() {
    return (
        <Fragment>
            <p className="t-16 lh-26 text-dark text-center mb-3">ابتدا صندوق سرمایه‌گذاری مورد نظر را انتخاب کرده و سپس نوار لغزنده را جابه‌جا کنید.</p>
            <CalculatorBox />
        </Fragment>
    );
}

export default App;