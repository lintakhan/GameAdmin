import React from "react";

function Admin() {
  return (
    <div>
      <div className=" w-auto  m-auto mt-16 font-[Lato]  md:w-[80%]">
        <div className="flex  items-center justify-around ">
          <img
            className="relative left-[13rem] w-[22px]"
            src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png"
            alt="search"
          />
          <input
            className="border border-gray-300 p-2 w-3/6 pl-12 py-3 font-poppins"
            type="text"
            placeholder=" Search"
          />

          <p className="font-bold text-2xl font-poppins">ADMIN</p>
        </div>
        <div className="flex m-4 ml-[5rem] mb-8 font-poppins ">
          <p className="text-xl  font-bold m-5 md:text-xl">Users Information</p>
          <p className="text-base font-bold ml-20 flex items-center md:text-lg">
            <input
              className="w-[2rem] h-[23px] mr-4 rounded-lg"
              type="checkbox"
            />{" "}
            MONEY CLAIMED
          </p>
        </div>

        <table
          className=" w-[85%] m-auto font-poppins"
          border="1"
          frame="hsides"
          rules="rows"
          style={{
            borderbottom: "px solid #80808096",

            bordercollapse: "collapse",
          }}
        >
          <tr
            className=" text-[14px] md:text-[16px]"
            style={{
              borderBottom: "2px solid #80808096",
              borderwidth: "1px 0",
            }}
          >
            <th className="pb-4">USER</th>
            <th className="pb-4">EMAIL</th>

            <th className="pb-4">AFFILIATE EARNINGS</th>
            <th className="pb-4">GAME RESULTS</th>
            <th className="pb-4">MONEY SENT</th>
          </tr>

          <tr
            className="text-center text-[14px] md:text-sm"
            style={{
              borderBottom: "2px solid #80808096",
              borderwidth: "1px 0",
            }}
          >
            <td className="pt-4 pb-4">@user1234</td>
            <td className="pt-4 pb-4">123gds@gmail.com</td>
            <td className="pt-4 pb-4">$5000</td>
            <td className="pt-4 pb-4">49093</td>
            <td className="pt-4 pb-4">
              <input className="w-[2rem] h-[23px] rounded-lg" type="checkbox" />
            </td>
          </tr>
          {/* <tr
            className="text-center text-[14px] md:text-sm"
            style={{
              borderBottom: "2px solid #80808096",
              borderwidth: "1px 0",
            }}
          >
            <td className="pt-4 pb-4"></td>
            <td className="pt-4 pb-4"></td>
            <td className="pt-4 pb-4"></td>
            <td className="pt-4 pb-4"></td>
            <td className="pt-4 pb-4"></td>
          </tr> */}
        </table>
        <button className="absolute left-[3.5rem] top-[42rem] font-bold md:top-[37rem] md:left-[8.5rem] font-poppins">
          LOG OUT
        </button>
      </div>
    </div>
  );
}

export default Admin;
