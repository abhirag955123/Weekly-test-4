import React from 'react'

function Team({teamData,dispatch,avg}) {
    const btnClick = (members) => {
        dispatch({
          type: "remove",
          payload : members,
        });
      };
  return (
    <div className="border-2 border-black mt-12 p-10 text-white">
    <h1 className="text-2xl font-medium p-4 text-center text-black">Team</h1>
    <button className='py-1 px-4 bg-green-300 font-medium rounded-full ml-32 mb-4 hover:bg-blue-500 hover:text-white transition' onClick={()=>dispatch({type:"sort_By_Age"})}>SORT BY AGE</button>
    {teamData.map((members ) => {
      return (
        <div key={members.id} className="flex gap-12 items-center bg-slate-500 p-2 rounded-md mb-5">
          <div>
            <span className="text-lg font-medium w-[33%]">{members.first_name}</span>
            
          </div>
          <span className="text-lg font-medium w-[33%]">{members.age}</span>
          <button
            className="py-1 px-4 bg-blue-600 hover:bg-blue-500 hover:text-white transition rounded"
            onClick={()=>{
              btnClick(members)
            }}
          >
           Remove
          </button>
        </div>
      );
    })}
    <div>
        <p className='text-xl font-medium text-center text-black'>Average Age : {teamData.length > 0 ? avg : 0 }</p>
        <div>
            <button onClick={()=>dispatch({type :"calculate_Age"})} className='py-1 px-4 bg-blue-500  hover:bg-grey-500 hover:text-white transition text-center ml-12 mt-4 rounded-lg font-medium '>Calculate Average Age</button>
            
        </div>
    </div>
  </div>
  )
}

export default Team
