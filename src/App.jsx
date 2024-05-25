import { useState, useReducer } from "react";
import "./App.css";
import Employes from "./Compoments/Employes";
import { Data } from "./Compoments/Data.js";
import Team from "./Compoments/Team.jsx";

const InitialState = {
  allEmoployes: Data,
  teamData: [],
  averageAge: 0,
};

const reducer = (state, action) => {
  if (action.type === "add") {
    return {
      ...state, // temporay all data
      allEmoployes: state.allEmoployes.map((item) => {
        return item.id === action.payload.id ? { ...item, Added: true } : item;
      }),
      teamData: [...state.teamData, action.payload],
    };
  } else if (action.type === "remove") {
    return {
      ...state,
      allEmoployes: state.allEmoployes.map((item) => {
        return item.id === action.payload.id ? { ...item, Added: false } : item;
      }),
      teamData: state.teamData.filter((e) => e.id !== action.payload.id),
    };
  } else if (action.type === "calculate_Age") {
    const totalAge = state.teamData.reduce((acc, member) => {
      return acc + member.age;
    }, 0);
    const averageAge = totalAge / state.teamData.length;
    return {
      ...state,
      averageAge,
    };
  }else if(action.type ==="sort_By_Age"){
    return {
      ...state,
      teamData : [...state.teamData].sort((a,b)=>a.age - b.age)
    }
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, InitialState);
  // console.log(state.averageAge);
  return (
    <>
      <div className="flex w-11/12 mx-auto justify-evenly mb-10">
        <Employes dataEmployees={state.allEmoployes} dispatch={dispatch}  />
        <Team teamData={state.teamData} dispatch={dispatch} avg = {state.averageAge} />
      </div>
    </>
  );
}

export default App;
