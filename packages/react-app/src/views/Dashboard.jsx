import React from "react";

const Dashboard = ({ address }) => {
  if (address) {
    return (
      <>
        <p> Yay account!</p>
      </>
    );
  } else {
    return (
      <>
        <p> No account</p>
      </>
    );
  }
};

export default Dashboard;
