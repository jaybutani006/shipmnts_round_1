import axios from "axios";
import React, { useState } from "react";
// import "/Homepage.css"

function Forecast() {
  const [city, setCity] = useState("");
  const [data, setData] = useState("");
  const handleSearch = async () => {
    try {
      const responseData = await axios.get(
        `http://api.weatherapi.com/v1/forecast.json`,
        {
          params: {
            key: "09b724366bd749c2be254806232108",
            q: city, // Set the city parameter
            days: 3,
          },
        }
        );
        // if(responseData.)
        if (responseData) {
            console.log(responseData.data);
            setData(responseData?.data?.forecast?.forecastday);
        }
    } catch (error) {
      alert("Network Error");
    }
  };
    return (
      <>
        <div>
          <div className="text-center">
            <h1>Wheather Forecasting</h1>
          </div>
          <div className="input_field">
            <input
              type="text"
              name=""
              id=""
              placeholder="Search City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={handleSearch}>search</button>
          </div>
        </div>
        {data && (
          <div className="forecast">
            <div className="days">
              <div className="temp_details">
                <h3 style={{ marginBottom: "5px", marginTop: "0px" }}>
                  {data?.[0]?.date}
                </h3>
                <div>
                  <img src={data?.[0]?.day?.condition?.icon} alt="" />
                </div>
              </div>
              <h4>
                Temperature :{" "}
                <span className="description">
                  {data?.[0]?.day?.mintemp_c} to {data?.[0]?.day?.maxtemp_c}
                </span>
              </h4>
              <h4>
                Average Temperature :{" "}
                <span className="description">
                  {data?.[0]?.day?.avgtemp_c}
                </span>
              </h4>
              <h4>
                Average Humidity :{" "}
                <span className="description">
                  {data?.[0]?.day?.avghumidity}
                </span>
              </h4>
              <h4>
                Cloud Condition :{" "}
                <span className="description">
                  {data?.[0]?.day?.condition?.text}
                </span>
              </h4>
              <p></p>
            </div>
            <div className="days">
              <div className="temp_details">
                <h3 style={{ marginBottom: "5px", marginTop: "0px" }}>
                  {data?.[1]?.date}
                </h3>
                <div>
                  <img src={data?.[1]?.day?.condition?.icon} alt="" />
                </div>
              </div>
              <h4>
                Temperature :{" "}
                <span className="description">
                  {data?.[1]?.day?.mintemp_c} to {data?.[1]?.day?.maxtemp_c}
                </span>
              </h4>
              <h4>
                Average Temperature :{" "}
                <span className="description">
                  {data?.[1]?.day?.avgtemp_c}
                </span>
              </h4>
              <h4>
                Average Humidity :{" "}
                <span className="description">
                  {data?.[1]?.day?.avghumidity}
                </span>
              </h4>
              <h4>
                Cloud Condition :{" "}
                <span className="description">
                  {data?.[1]?.day?.condition?.text}
                </span>
              </h4>
              <p></p>
            </div>
            <div className="days">
              <div className="temp_details">
                <h3 style={{ marginBottom: "5px", marginTop: "0px" }}>
                  {data?.[2]?.date}
                </h3>
                <div>
                  <img src={data?.[2]?.day?.condition?.icon} alt="" />
                </div>
              </div>
              <h4>
                Temperature :{" "}
                <span className="description">
                  {data?.[2]?.day?.mintemp_c} to {data?.[2]?.day?.maxtemp_c}
                </span>
              </h4>
              <h4>
                Average Temperature :{" "}
                <span className="description">
                  {data?.[2]?.day?.avgtemp_c}
                </span>
              </h4>
              <h4>
                Average Humidity :{" "}
                <span className="description">
                  {data?.[2]?.day?.avghumidity}
                </span>
              </h4>
              <h4>
                Cloud Condition :{" "}
                <span className="description">
                  {data?.[2]?.day?.condition?.text}
                </span>
              </h4>
              <p></p>
            </div>
           
            
          </div>
        )}
      </>
    );
}

export default Forecast;
