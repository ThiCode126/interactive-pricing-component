import React, { useEffect, useState } from "react";
import { detailsData } from "../utils/data";

const Pricing = () => {
  const [rangeValue, setRangeValue] = useState(2);
  const [numberPages, setNumberPages] = useState("100K");
  const [price, setPrice] = useState(16);
  const [monthly, setMonthly] = useState(false);

  useEffect(() => {
    setNumberPages(detailsData[rangeValue].pages);
    monthly
      ? setPrice(detailsData[rangeValue].month)
      : setPrice(detailsData[rangeValue].year);
  }, [rangeValue, monthly]);

  const handleChangeRange = (e) => {
    const { value } = e.target;

    setRangeValue(value);
  };

  return (
    <section id="pricing">
      <div className="cw">
        <div className="body">
          <div className="page-view">{numberPages} PageViews</div>
          <div className="range">
            <input
              type="range"
              min="0"
              max="4"
              value={rangeValue}
              step="1"
              style={{ "--range-value": rangeValue }}
              data-range-value={rangeValue}
              onChange={(e) => handleChangeRange(e)}
            />
          </div>
          <div className="price">
            <span className="text-price">${price}</span>
            <span className="durability"> / month</span>
          </div>
          <div className="switch-price">
            <span>Monthly Billing</span>
            <div className="toggle">
              <input
                type="checkbox"
                name="toggle"
                id="toggle"
                onChange={() => setMonthly(!monthly)}
                checked={monthly}
              />
              <label htmlFor="toggle"></label>
            </div>
            <span>
              Yearly Billing
              <span className="discount">
                -25% <span className="no-mobile"> discount</span>
              </span>
            </span>
          </div>
        </div>
        <div className="footer">
          <div className="avantages">
            <p>Unlimited websites</p>
            <p>100% data ownership</p>
            <p>Email reports</p>
          </div>
          <button>Start my trial</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
