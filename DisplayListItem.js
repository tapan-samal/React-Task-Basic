import React, { useEffect, useState } from "react";
import ChildComponent from "./ChildComponent";

const DisplayListItem = () => {
  const [userData, setUserData] = useState([]);

  const players = ["Dhoni", "Jadeja", "Zaheer", "Raina"];

  const tools = ["JavaScript", "Python", "Node", "SQL"];

  const leaders = [
    { name: "Narendra Modi", position: "PM", age: 66 },
    { name: "MS Dhoni", position: "Captain", age: 44 },
    { name: "Drapadi Murmu", position: "President", age: 55 },
  ];

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUserData(data.slice(0, 5)))
      .catch((error) => console.log("Error >> ", error));
  }, []);

  return (
    <>
      <h2>List Items Iteration:</h2>
      <h3>Iterate Array Items: </h3>
      <ul>
        {players.map((player) => (
          <li key={Math.random()}>{player}</li>
        ))}
      </ul>

      <h3>Iterate Array of Objects:</h3>
      <ul>
        {leaders.map((leader) => {
          return (
            <li key={Math.random()}>
              {leader.name}, {leader.position}
            </li>
          );
        })}
      </ul>

      <h3>Iterate Props Item:</h3>
      <ChildComponent tools={tools} />

      <h3>Iterate Items by API:</h3>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>|| Username</td>
            <td>|| Email</td>
          </tr>
        </thead>
        <tbody>
          {userData.map((data, index) => {
            return (
              <tr key={index}>
                <td>{data.id}</td>
                <td>{data.username}</td>
                <td>{data.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};


export default DisplayListItem;

//Child Component
const ChildComponent = ({ tools }) => {
  return (
    <div>
      {tools.map((tool) => (
        <li key={Math.random()}>{tool}</li>
      ))}
    </div>
  );
};