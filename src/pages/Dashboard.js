import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [tokenAPI, setTokenAPI] = useState({});

  console.log(tokenAPI);

  const getToken = async () => {
    try {
      const res = await axios.post(
        "https://test.api.amadeus.com/v1/security/oauth2/token",
        new URLSearchParams({
          grant_type: "client_credentials",
          client_id: process.env.REACT_APP_AMADEUS_API_KEY,
          client_secret: process.env.REACT_APP_AMADEUS_SECRET_API_KEY,
        }),
        {
          "Content-Type": "application/x-www-form-urlencoded",
        }
      );
      setTokenAPI(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getFlights = async () => {
    try {
      const res = await axios.get(
        "https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=BOS&destinationLocationCode=PAR&departureDate=2022-11-01&adults=1&nonStop=false&max=15",
        { headers: { Authorization: `Bearer ${tokenAPI.access_token}` } }
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  useEffect(() => {
    getFlights();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tokenAPI]);

  return <div>I am Dashboard</div>;
};

export default Dashboard;
