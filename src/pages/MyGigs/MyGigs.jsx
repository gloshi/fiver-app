import React, { useState } from "react";
import { Link } from "react-router-dom";
import done from '../../../public/img/done.svg'
import "./MyGigs.scss";


function MyGigs() {
  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };


  return (
    <div className="myGigs">
      <div className="container">
        <div className="title">
          <h1>{currentUser.isSeller ? "Gigs" : "Orders"}</h1>
          {currentUser.isSeller && (
            <Link to="/add">
              <button>Add New Gig</button>
            </Link>
          )}
        </div>
        <div className="content__items">
        <div className="cart__item">
            <div className="cart__item-img">
                <img src={done} alt="" />
            </div>
            <div className="cart__item-info">
                <h3>title</h3>
            </div>
            <div className="cart__item-count">
                <h3>1</h3>
            </div>
            <div className="cart__item-price">
                <h3>1000</h3>
            </div>
            <div className="cart__item-remove">
            <img className="delete" src="./img/delete.png" alt="" />
            </div>
        </div>
        <div className="cart__item">
            <div className="cart__item-img">
                <img src={done} alt="" />
            </div>
            <div className="cart__item-info">
                <h3>title</h3>
            </div>
            <div className="cart__item-count">
                <h3>1</h3>
            </div>
            <div className="cart__item-price">
                <h3>1000</h3>
            </div>
            <div className="cart__item-remove">
            <img className="delete" src="./img/delete.png" alt="" />
            </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default MyGigs;