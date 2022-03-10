import { Link, useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import nothumbnail from "./thumbnailDefault.png";

export default function Home() {
  const history = useHistory();
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson.products.data.items);
        setData(myJson.products.data.items);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className="container-sm" id="vspace">
        <h3 align="left">Product List</h3>
        <ul className="d-grid gap-3">
          {data.map((item, index) => {
            return (
              <li
                className="list-group-item d-flex p-2 bg-light border rounded"
                key={index}
              >
                {item.thumbnailUrl != null ? (
                  <img src={item.thumbnailUrl} alt="" />
                ) : (
                  <img width={150} height={150} src={nothumbnail} alt="" />
                )}

                <div className="container-fluid" id="home">
                  <div className="row">
                    <Link
                      style={{ padding: "10px", textAlign: "left" }}
                      onClick={() => history.push(`/detalle/${item.id}`)}
                    >
                      {item.name}
                    </Link>
                    <h6 style={{textAlign: "left"}}>{item.description}</h6>
                    <h5>{item.price}</h5>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
