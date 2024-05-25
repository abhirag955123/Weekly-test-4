import React, { useState } from "react";

function Employes({ dataEmployees, dispatch }) {
  // console.log(dataEmployees);

  const btnClick = (members) => {
    // console.log(members);
    dispatch({
      type: "add",
      payload: members,
    });
  };

  return (
    <div className=" border-2 border-black mt-12 p-10 text-white ">
      <h1 className="text-2xl font-medium p-4 text-center text-black">Employees</h1>
      {dataEmployees.map((members) => {
        return (
          <div key={members.id} className="flex gap-12 items-center bg-slate-500 p-2 rounded-md mb-5">
            <div>
              <span className="text-lg font-medium w-[33%]">{members.first_name}</span>
              
            </div>
            <span className="text-lg font-medium w-[33%]">{members.age}</span>
            {!members.Added && (
              <button
                className="py-1 px-4 bg-blue-600 hover:bg-green-500 hover:text-white transition rounded "
                onClick={() => {
                  btnClick(members);
                }}
              >
                Add
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Employes;
