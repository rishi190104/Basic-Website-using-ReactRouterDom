import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {

  useEffect(() => {
    document.title = "Github Page"
  })

  const data = useLoaderData();
  // const [data, setData] = useState([])
  //     useEffect(()=>{
  //         fetch(`https://api.github.com/users/hiteshchoudhary`)
  //         .then(response => response.json())
  //         .then(data => {
  //             console.log(data)
  //             setData(data)
  //         })

  //     },[])
  return (
    <div className="bg-orange-700 text-center text-white p-5 text-3xl">
      Github Followers:{data.followers}
      <div className="flex justify-center">
        {" "}
        <img src={data.avatar_url} alt="Github Profile" width={200} />
      </div>
    </div>
  );
}

export default Github;

export const githubInfo = async () => {
  const response = await fetch(`https://api.github.com/users/rishi190104`);
  return response.json();
};
