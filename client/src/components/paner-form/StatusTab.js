import { useState } from "react";
import '../../style/pages/Status.css'
import Cards from "../paner-form/TabCardsHome";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          ACTION
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          NON-ACTION
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          HIDE
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2>Action Apartments</h2>
          <hr />
            <Cards/>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Non-action Apartments</h2>
          <hr />
            <Cards/>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>Hide Apartments</h2>
          <hr />
          <h1 style={{marginTop:30}}>
          you don't have a apartment in hidden status
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
