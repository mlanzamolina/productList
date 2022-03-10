import { useHistory, useParams, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import nothumbnail from "./thumbnailDefault.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

export default function Detalle() {
  const history = useHistory();
  const { id } = useParams();
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("../data.json", {
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
    <div className="container-sm" id="vspace">
      <Link to="/" id="back2list">
        {" "}
        <i className="arrow left"></i> Back to list{" "}
      </Link>
      {data.map((item, index) => {
        if (item.url === id) {
          return (
            <>
              <div className="container-fluid" id="home">
                <div class="row">
                  <div class="col-md-4">
                    {item.imageUrl != null ? (
                      <img width={300} src={item.imageUrl} alt="" />
                    ) : (
                      <img width={300} src={nothumbnail} alt="" />
                    )}
                  </div>
                  <div class="col-md-6">
                    <h6 id="category-font">
                      {item.category} <i className="arrow right"></i>{" "}
                      {item.subcategory}
                    </h6>
                    <h3>{item.name}</h3>
                    <h5 style={{textAlign: "left"}}>{item.description}</h5>
                    <h1>${item.price}</h1>
                    <button
                      className="buttonAdd2Cart"
                      onClick={() =>
                        toast.success(`${item.name} - Added to Cart`)
                      }
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        }
      })}
    </div>
  );
}
