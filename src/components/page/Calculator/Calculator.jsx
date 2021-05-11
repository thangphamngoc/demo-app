import React, { useEffect, useState } from "react";
import "./Calculator.scss";
import Location from "../Location/Location";
import { getDataProduct, getLocation, addToCard } from "../../../services/CalculatorService";
import { customDate, getNumberKey } from "../../../utils/date";

const Calculator = () => {
  const [productList, setProductList] = useState(['12']);
  const [locations, setLocations] = useState([]);
  const [locationsChoose, setLocationsChoose] = useState("");
  const [units, setUnits] = useState(0);
  const [price, setPrice] = useState(0);
  const [date, setDate] = useState("");
  const [product, setProduct] = useState("");

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
    await addToCard(request).then((res) => {
      alert("success");
    })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("end");
      })
  };
  const handleDate = ({ target }) => {
    if (!product) {
      alert("Please select product");
      chooseDate();
      return;
    }
    const numberKey = getNumberKey(target.value);
    const data = productList.filter((item) => item.id === product)[0];
    const units = handleCaculator(data.max_production, numberKey);
    handleLocationUnit(units, target.value);
    setPrice(data.price_per_unit);
  };
  const { start, end } = customDate();


  const getProduct = async () => {
    let res = await getDataProduct();
    setProductList(res.data);
  };
  const handleGetLocation = async () => {
    await getLocation().then((res) => {
      setLocations(res.data);
      setLocationsChoose(res.data[3].name);
    });
  };
  const chooseProduct = (setValue) => (e) => setValue(e.target.value);
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
    <div className="content">
      <div className="header">
        <h2> Calculator</h2>
      </div>
      <div className="form-group">
        <form onSubmit={submit}>
          <div className="item">
            <p>Product</p>
            <select onChange={chooseProduct(setProduct)}>
              <option value>
                Choose product
              </option>
              {productList.map((item) => {
                return (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="item">
            <p>Date</p>
            <input type="date" min={start} max={end} value={date} name="date" onChange={handleDate} />
          </div>
          <div className="item">
            <Location place={locationsChoose} units={units} cost={units * price} />
          </div>
          <div className="item">
            <p>Total Units: </p>
            <p>{units}</p>
          </div>
          <div className="item">
            <p>Total Cost: </p>
            <p>{units * price}</p>
          </div>
          <button type="submit">
            Submit
            </button>
        </form>
      </div>
    </div>
  );
};

export default Calculator;