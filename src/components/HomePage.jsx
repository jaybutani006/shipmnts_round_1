import axios from 'axios';
import React, { useState } from 'react'
// import "/Homepage.css"
function HomePage() {
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState("Celsius");
  const [data, setData] = useState();
  const [searchLocation, setSearchLocation] = useState();
    const handleSearch = async () => {
        try {
            const responseData = await axios.get(
              `https://api.weatherapi.com/v1/current.json`,
              {
                params: {
                  key: "09b724366bd749c2be254806232108",
                  q: city, // Set the city parameter
                },
              }
          );
            console.log(responseData.data);
            setData(responseData.data.current);
            setSearchLocation(responseData.data.location);
          
    } catch (error) {
      alert("Please Enter Correct city name");
        }
    }
  return (
    // <div>
    //   <p>Current Weather</p>
    //       <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
    //       <p onClick={handleSearch} style={{cursor: "pointer"}}>Search</p>

    // </div>
    <>
      <div className="container">
        <div>
          <div className="text-center">
            <h1>Weather Application</h1>
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
          {data && (
            <div>
              <div className="city_name">
                <h2>Country : {searchLocation.country}</h2>
                <h2>State : {searchLocation.region}</h2>
                <h2>City : {searchLocation.name}</h2>
              </div>
              <div className="toggle_deg" style={{width: "100%"}}>
                {/* <h4>Current Temperature : <span className="description">44deg</span></h4> */}
                <select
                  name=""
                  id=""
                  value={temp}
                  onChange={(e) => setTemp(e.target.value)}
                  style={{marginTop : "10px", marginBottom: "10px", width: "100%", height: "40px", display: "flex", justifyContent:"center", alignItems: "center"}}
                >
                  <option value="Celsius" selected>
                    Celsius
                  </option>
                  <option value="Fahrenheit">Fahrenheit</option>
                </select>
              </div>
              <div className="temp_details" style={{}}>
                <h4>
                  Current Temperature :{" "}
                  {temp === "Celsius" ? (
                    <span className="description">{data.temp_c}</span>
                  ) : (
                    <span className="description">{data.temp_f}</span>
                  )}
                </h4>
                <h4>
                  Current Humidity :{" "}
                  <span className="description">{data.humidity}</span>
                </h4>
                <h4>
                  Current Wind Speed:{" "}
                  <span className="description">{data.wind_kph} km/h</span>
                </h4>
              </div>
              {/* <div className="temp_details"> */}

              <div
                style={{
                  display: "flex",
                  marginTop: "25px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h4>
                  Cloud Condition :{" "}
                  <span className="description">{data.condition.text}</span>
                </h4>
                <div>
                  <img src={data.condition.icon} alt="" />
                </div>
              </div>
              {/* <div className="heading_forecast">
                <h1 style={{ marginBottom: "10px" }}>Forecast</h1>
              </div> */}
              {/* <div className="forecast">
                <div className="days">
                  <div className="temp_details">
                    <h3 style={{ marginBottom: "5px", marginTop: "0px" }}>
                      12 August
                    </h3>
                    <div>(replace to the icon)</div>
                  </div>
                  <h4>
                    Temperature : <span className="description">40deg</span>
                  </h4>
                  <p>
                    description : Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. Soluta natus aliquam sequi, quia qui
                    repellat aperiam, fugiat deleniti, veniam exercitationem
                    dignissimos nemo minus totam quae fugit numquam velit
                    accusantium nam?
                  </p>
                </div>
                <div className="days">
                  <div className="temp_details">
                    <h3 style={{ marginBottom: "5px", marginTop: "0px" }}>
                      12 August
                    </h3>
                    <div>(replace to the icon)</div>
                  </div>
                  <h4>
                    Temperature : <span className="description">40deg</span>
                  </h4>
                  <p>
                    description : Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. Soluta natus aliquam sequi, quia qui
                    repellat aperiam, fugiat deleniti, veniam exercitationem
                    dignissimos nemo minus totam quae fugit numquam velit
                    accusantium nam?
                  </p>
                </div>
                <div className="days">
                  <div className="temp_details">
                    <h3 style={{ marginBottom: "5px", marginTop: "0px" }}>
                      12 August
                    </h3>
                    <div>(replace to the icon)</div>
                  </div>
                  <h4>
                    Temperature : <span className="description">40deg</span>
                  </h4>
                  <p>
                    description : Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. Soluta natus aliquam sequi, quia qui
                    repellat aperiam, fugiat deleniti, veniam exercitationem
                    dignissimos nemo minus totam quae fugit numquam velit
                    accusantium nam?
                  </p>
                </div>
              </div> */}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default HomePage;
