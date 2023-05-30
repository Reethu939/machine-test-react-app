import React, { useState, useEffect } from "react";

function HomeForm() {
  const [activeTab, setActiveTab] = useState("all");
  const [countries, setCountries] = useState([]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://restcountries.com/v2/all?fields=name,region,flag"
      );
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderContainers = () => {
    const containerRows = [];
    for (let i = 0; i < 12; i += 2) {
      containerRows.push(
        <div className="row" key={i}>
          <div className="container">
            <img src={countries[i]?.flag} alt={countries[i]?.name} className="flag" />
            <div className="country-info">
              <div className="country-name">{countries[i]?.name}</div>
              <div className="country-region">{countries[i]?.region}</div>
            </div>
          </div>
          <div className="container">
            <img src={countries[i + 1]?.flag} alt={countries[i + 1]?.name} className="flag" />
            <div className="country-info">
              <div className="country-name">{countries[i + 1]?.name}</div>
              <div className="country-region">{countries[i + 1]?.region}</div>
            </div>
          </div>
        </div>
      );
    }
    return containerRows;
  };

  return (
    <div>
      <div className="header-wrapper">
        <div className="header">
          <div className="header-left">Countries</div>
          <ul className="header-right">
            <li className={activeTab === "all" ? "active" : ""} onClick={() => handleTabClick("all")}>
              All
            </li>
            <li className={activeTab === "asia" ? "active" : ""} >
              Asia
            </li>
            <li className={activeTab === "europe" ? "active" : ""} >
              Europe
            </li>
          </ul>
        </div>
      </div>

      <div className="container-wrapper">
        {activeTab === "all" && <div>{renderContainers()}</div>}
      </div>

      <div className="social-media">
        <img src="facebook.svg" alt="Facebook" />
        <img src="twitter.svg" alt="Twitter" />
        <img src="linkedin.svg" alt="LinkedIn" />
        <img src="chrome.svg" alt="Chrome" />
      </div>

      <div className="email">example@example.com</div>

      <div className="copyright">
        &copy; {new Date().getFullYear()} Name. All rights reserved.
      </div>
    </div>
  );
}

export default HomeForm;
