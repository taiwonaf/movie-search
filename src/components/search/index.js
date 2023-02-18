import React from "react";
import { Link } from "react-router-dom";
import { Movies } from "..";

const index = ({ data, setSearchResult, query }) => {
  const values = Object.values(query);
  const searchFor = values.join(",");
  return (
    <main className="py-[100px]">
      <div>
        <h2 className="px-[17px] font-[700] text-center text-[21px] md:text-[38px] mb-[20px]">
          Search Result for:{" "}
          <span className="font-[400], text-[21px]">{searchFor}</span>
        </h2>
        <div className="px-[17px] text-center mb-[50px]">
          <Link
            to="/"
            onClick={() => setSearchResult(false)}
            className="w-[100px] inline-block p-[10px] bg-black text-white text-center">
            Go Home
          </Link>
        </div>
        <Movies data={data} />
      </div>
    </main>
  );
};

export default index;
