import React, { useEffect, useState } from "react";
import "./Calculator.scss";
import Location from "../Location/Location";
import { getDataProduct, getLocation, addToCard } from "../../../services/CalculatorService";
import { customDate, getNumberKey } from "../../../utils/date";

const Calculator = () => {
  const [products, setProducts] = useState([]);
  const [locations, setLocations] = useState([]);
  const [units, setUnits] = useState(0);
  const [price, setPrice] = useState(0);
  const [date, setDate] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    if (!date || !product) {
      alert("Please choose product or date");
      return;
    }
    const request = {
      date: date,
      product: product,
      locations: {
        id: 4,
        quantity: units
      }
    };
    const response = await addToCard(params);
  };
  const handleDate = ({ e }) => {
    if (!product) {
      alert("Please select product");
      chooseDate();
      return;
    }
    const numberKey = getNumberKey(e.value);
    const data = products.filter((product) => product.id === product)[0];
    const units = handleCaculator(data.max_production, numberKey);
    handleLocationUnit(units, e.value);
    setPrice(data.price_per_unit);
  };
  const { start, end } = customDate();
  const handleGetLocation = async () => {
    const response = await getLocation();
    setLocations(response);
  };
  const getProduct = async () => {
    const response = await getDataProduct();
    setProducts(response);
  };
  const chooseProduct = ({ e }) => setProduct(e.value);
  const handleCaculator = (val, key) => {
    if (!val[key]) {
      const lastItem = Object.keys(val)[Object.keys(val).length - 1];
      return val[lastItem];
    }
    return val[key];
  };
  const handleLocationUnit = (units, date) => {
    setDate(date);
    setUnits(units);
  };
  const chooseDate = () => setDate("");
  useEffect(() => {
    getProduct();
    handleGetLocation();
  }, []);

  return (
    <main className="calculator">
      <div className="header">
        <h2> Calculator</h2>
      </div>
      <div className="form-group">
        <form onSubmit={submit}>
          <div className="item">
            <p>Product</p>
            <select onChange={chooseProduct}>
              <option>choose</option>
              {products.map((product) => {
                return (
                  <option key={product.id} value={product.id}>
                    {product.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="item">
            <p>Date</p>
            <input type="date" min={start} max={end} value={date} onChange={handleDate} />
          </div>
          <div className="item">
            <Location place={locations[3]} units={units} cost={units * price} />
          </div>
          <div className="item">
            <p>Total Units</p>
            <div>{units}</div>
          </div>
          <div className="item">
            <p>Total Cost</p>
            <div>{units * price}</div>
          </div>
          <button type="submit">
            Submit
            </button>
        </form>
      </div>
    </main>
  );
};

export default Calculator;