import React, { useEffect, useState } from "react";

function Profile() {
  const [cards, setCards] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    let useretails = JSON.parse(localStorage.getItem("user_login"));
    console.log("=======");
    fetch("http://localhost:5000/teacher/", {
      headers: {
        "Content-type": "application/json",
        "token":useretails.token
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUser(useretails);
        setCards(data);
      });
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <div class="container mt-5">
        <div class="row d-flex justify-content-center">
          <div class="col-md-7">
            <div class="card p-3 py-4">
              <div class="text-center">
                <img
                  class="round-image"
                  src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="car"
                  style={{
                    border: "5px",
                    width: "200px",
                    height: "200px",
                    borderRadius: "100%",
                  }}
                />{" "}
              </div>

              <div class="text-center mt-3">
                <h5 class="mt-2 mb-0">{user.name}</h5>
                <span>{user.email}</span>

                <div class="px-4 mt-1">
                  <p class="fonts">{user.role}</p>
                </div>

                <div class="buttons"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <h1 class=" row d-flex justify-content-center">Jobs Posted</h1>
      {/* Show Job Posted */}
      {cards.map((card) => (
        <div class="container mt-5">
          <div class="row d-flex justify-content-center">
            <div class="col-md-7">
              <div class="card p-2 py-0">
                <div class="text-center"></div>
                <div class="text-center mt-3">
                  <h5 class="mt-2 mb-0">
                  {card.name} of CNIC: {card.CNIC}
                  </h5>

                  <hr />
                  <div class="px-4 mt-1">
                    <h5>{card.CNIC}</h5>
                  </div>
                  <h5>Status: {card.Gender ? "Male" : "Female"}</h5>
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
      ))}
    </div>
  );
}

export default Profile;
