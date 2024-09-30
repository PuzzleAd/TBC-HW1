import React from "react";
import "./Assignment3.css";

const Assignment3 = () => {
  const obj = {
    id: "10002",
    name: "Eco-Friendly Water Bottle",
    description: "Stay hydrated with our durable, eco-friendly water bottle.",
    price: 14.99,
    currency: "USD",
    imageURL: "https://example.com/images/product-10002.jpg",
  };

  const tableRows = Object.entries(obj).reduce((acc, [key, value], index) => {
    acc.push(
      <tr key={key}>
        <td>{key}</td>
        <td>{value}</td>
        <td>{index}</td>
      </tr>
    );
    return acc;
  }, []);

  const list = (
    <table border="1" style={{ borderBlockColor: "bisque" }}>
      <tr>
        <th>Key</th>
        <th>Value</th>
        <th>Position</th>
      </tr>
      {tableRows}
    </table>
  );

  return <section className="assignment-content">{list}</section>;
};

export default Assignment3;
