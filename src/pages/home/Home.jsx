import React from "react";

export default function Home() {
  return (
    <div className="text-center pt-2 home-bg">
      <div className="mb-4">
        <p className="header mt-4">Welcome to my App</p>
        <p className="fs-4">
        Recipe application provides information about the necessary ingredients
        for the dishes we want to make.<br/> That reduces the time spent thinking
        about what ingredients to buy to prepare a meal, and can also calculate
        an estimated cost to go to the market better.
      </p>
      <p className="fs-4">
        The application has features such as:<br/> Add, edit and delete ingredients<br/>
        Describe recipes, add, edit and delete recipes<br/> Select recipes and
        calculate the amount of money needed to prepare dishes.
      </p>
      </div>
      
    </div>
  );
}
