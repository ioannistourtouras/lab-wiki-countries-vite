import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { v4 as randomId } from "uuid";
import { Link } from "react-router-dom";

function HomePage() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then((country) => {
        console.log(country.data);
        setCountries(country.data);
      })
      .catch((err) => {
        console.log(err, "the error");
      });
  }, []);

  return (
    <div className="container" style= {{maxHeight: "90vh", overflow: "scroll"}}>
      <h2 style={{fontSize: "24px"}}>WikiCountries: Your Guide to the World</h2>
      <div className="list-group">
        {countries.map((country) => {
          return (
            <div key={randomId()}>
              <Link to={`/${country.alpha3Code}`} className="list-group-item list-group-item-action" >
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="flag" className="flag"></img>
                <p>{country.name.common}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;

/*<div className="container" style= {{maxHeight: "90vh", overflow: "scroll"}}>
        <h1 style={{fontSize: "24px"}}>WikiCountries: Your Guide to the World</h1>

        <div className="list-group">
          <a className="list-group-item list-group-item-action" href="/ABW"
            >🇦🇼 Aruba</a>
          <a className="list-group-item list-group-item-action" href="/AFG"
            >🇦🇫 Afghanistan</a>
          <a className="list-group-item list-group-item-action" href="/AGO"
            >🇦🇴 Angola</a>
          <a className="list-group-item list-group-item-action" href="/AIA"
            >🇦🇮 Anguilla</a>
          <a className="list-group-item list-group-item-action" href="/ALA"
            >🇦🇽 Åland Islands</a>
          <a className="list-group-item list-group-item-action" href="/ALB"
            >🇦🇱 Albania</a>
          <a className="list-group-item list-group-item-action" href="/AND"
            >🇦🇩 Andorra</a>
          <a className="list-group-item list-group-item-action" href="/ARE"
            >🇦🇪 United Arab Emirates</a>
          <a className="list-group-item list-group-item-action" href="/ARG"
            >🇦🇷 Argentina</a>
          <a className="list-group-item list-group-item-action" href="/ARM"
            >🇦🇲 Armenia</a>
          <a className="list-group-item list-group-item-action" href="/ASM"
            >🇦🇸 American Samoa</a>
          <a className="list-group-item list-group-item-action" href="/ATA"
            >🇦🇶 Antarctica</a>
            <a className="list-group-item list-group-item-action" href="/FLK"
            >🇫🇰 Falkland Islands</a>
          <a className="list-group-item list-group-item-action active" href="/FRA"
            >🇫🇷 France</a>
          <a className="list-group-item list-group-item-action" href="/ZWE"
            >🇿🇼 Zimbabwe</a>
        </div>
        </div>*/
