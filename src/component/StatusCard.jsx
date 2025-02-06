import { useState } from "react";
import "./statusCard.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchData } from "../feacture/DataThunk";

export const StatusCard = () => {
  const dispatch = useDispatch();
  const [username, setusername] = useState("");
  const handleChange = (e) => {
    setusername(e.target.value);
  };
  const handleClick = () => {
    dispatch(fetchData(username));
  };
  const { isLoading, myData } = useSelector((state) => state);

  return (
    <div className="container">
      <div className="search-div">
        <input
          type="text"
          placeholder="Enter your name"
          className="input-box"
          onChange={handleChange}
        />
        <button className="btn" onClick={handleClick}>
          Submit
        </button>
      </div>

      {isLoading ? (
        <p>Loading...</p>
      ) : myData ? (
        <>
          <div className="problem-data">
            <div className="box">
              {myData.easySolved}/{myData.totalEasy} <br />
              easy
            </div>
            <div className="box">
              {myData.mediumSolved}/{myData.totalMedium} <br />
              mid
            </div>
            <div className="box">
              {myData.hardSolved}/{myData.totalHard} <br />
              hard
            </div>
          </div>
          <p>totalSolved: {myData.totalSolved}</p>
          <div className="details-data">
            <div className="details-box">
              {myData.acceptanceRate} <br />
              acceptanceRate
            </div>
            <div className="details-box">
              {myData.contributionPoints}
              <br />
              contribution
            </div>
            <div className="details-box">
              {myData.ranking}
              <br />
              ranking
            </div>
          </div>
        </>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};
