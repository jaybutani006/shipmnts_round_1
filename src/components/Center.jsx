// aa html se 


import { useEffect, useState } from "react";
import "./Center.css"

const Center = () => {



  return (
    <>
      <div className="container">
        <div>
          <div></div>
          <div className="input_field">
            <input type="text" name="" id="" placeholder="Search City" />
            <button>search</button>
          </div>
          <div>
            <div className="city_name">
              <h2>Ahmedabad</h2>
            </div>
            <div className="temp_details">
              <h4>Current Temperature : <span className="description">44deg</span></h4>
              <div>Icon Representing the weather condition(replace to the icon)</div>
            </div>
            <div>
              <h4>Current Temperature : <span className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus suscipit iusto sint. Adipisci tenetur culpa sed voluptatibus vero aut asperiores obcaecati nesciunt facilis at. Velit, dicta? Tempore eius aliquid laborum?</span></h4>
            </div>
            <div className="heading_forecast">
              <h1 style={{marginBottom: "10px"}}>Forecast</h1>
            </div>
            <div className="forecast">
              <div className="days">
                <div className="temp_details">
                  <h3 style={{ marginBottom: "5px" , marginTop: "0px" }}>12 August</h3>
                  <div>(replace to the icon)</div>
                </div>
                <h4>Temperature : <span className="description">40deg</span></h4>
                <p>description : Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta natus aliquam sequi, quia qui repellat aperiam, fugiat deleniti, veniam exercitationem dignissimos nemo minus totam quae fugit numquam velit accusantium nam?</p>
              </div>
              <div className="days">
                <div className="temp_details">
                  <h3 style={{ marginBottom: "5px" , marginTop: "0px" }}>12 August</h3>
                  <div>(replace to the icon)</div>
                </div>
                <h4>Temperature : <span className="description">40deg</span></h4>
                <p>description : Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta natus aliquam sequi, quia qui repellat aperiam, fugiat deleniti, veniam exercitationem dignissimos nemo minus totam quae fugit numquam velit accusantium nam?</p>
              </div>
              <div className="days">
                <div className="temp_details">
                  <h3 style={{ marginBottom: "5px" , marginTop: "0px" }}>12 August</h3>
                  <div>(replace to the icon)</div>
                </div>
                <h4>Temperature : <span className="description">40deg</span></h4>
                <p>description : Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta natus aliquam sequi, quia qui repellat aperiam, fugiat deleniti, veniam exercitationem dignissimos nemo minus totam quae fugit numquam velit accusantium nam?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Center;