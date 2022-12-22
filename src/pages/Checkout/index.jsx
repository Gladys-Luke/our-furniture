import React, { useContext, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../../context/Context";
import ReactDOM from "react-dom";
import Products from "../../products";
import { PaystackButton } from "react-paystack";

function Index() {
  const { state, dispatch } = useContext(Context);
  const { cart } = state;

  const publicKey = "pk_test_6eca7ac5c456fa10aee920aa4348475fd63b9c4d";
  const amount = 1000000; // Remember, set in kobo!
  const [email, setEmail] = useState("");
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [phone, setPhone] = useState("");

  const componentProps = {
    email,
    amount,
    metadata: {
      fname,
      lname,
      phone,
    },
    publicKey,
    text: "Place Order",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! You need these items, don't go!!!!"),
  };

  const totalPrice = () => {
    let total = 0;
    for (const item of Object.keys(cart)) {
      total += cart[item].price * cart[item].qty;
    }
    return total;
  };
  console.log(totalPrice());
  return (
    <div className=" ">
      <div className="py-3  bg-[#E89F71]">
        <div className="container flex gap-4 ">
          <Link to="/">
            <h6 className="text-[#fff] no-underline">Home</h6>
          </Link>
          <span className="text-[#fff]">/</span>
          <Link to="/cart">
            <h6 className="text-[#fff] no-underline">Cart</h6>
          </Link>
        </div>
      </div>

      <div className="py-4 ">
        <div className="container ">
          <div className="row">
            <div className="col-md-7 flex justify-center text-center">
              <div className="card shadow-2xl">
                <div className="card-header">
                  <h4>Basic Information</h4>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <label>First Name</label>
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          id="fname"
                          onChange={(e) => setFName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <label>Last Name</label>
                        <input
                          type="text"
                          name="lastname"
                          className="form-control"
                          id="lname"
                          onChange={(e) => setLName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <label>Phone Number</label>
                        <input
                          type="text"
                          name="phone"
                          className="form-control"
                          id="phone"
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <label>Email Address</label>
                        <input
                          type="text"
                          name="email"
                          className="form-control"
                          id="email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group mb-3">
                        <label>Full Address</label>
                        <textarea
                          type="text"
                          name="email"
                          className="form-control"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group mb-3">
                        <label>City</label>
                        <input
                          type="text"
                          name="city"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group mb-3">
                        <label>State</label>
                        <input
                          type="text"
                          name="state"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group mb-3">
                        <label>Zip Code</label>
                        <input
                          type="text"
                          name="zipcode"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group text-end">
                        <PaystackButton
                          {...componentProps}
                          className="btn btn-primary"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-5 ">
                <table className="table table-bordered ">
                  <thead>
                    <tr>
                      <th width="50%">Product</th>
                      <th>Price</th>
                      <th>qty</th>
                      <th>total</th>
                    </tr>
                  </thead>

                  <tbody>
                    {Object.keys(cart).map((item, idx) => {
                      totalPrice();
                      return (
                        <tr key={idx}>
                          <td>{cart[item].name}</td>
                          <td>{cart[item].price}</td>
                          <td>{cart[item].qty}</td>
                          <td>{cart[item].price * cart[item].qty}</td>
                        </tr>
                      );
                    })}
                    <tr>
                      <td colSpan="2" className="text-end fw-bold">
                        Grand Total
                      </td>
                      <td colSpan="2" className="text-end fw-bold">
                        {totalPrice()}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Index;
