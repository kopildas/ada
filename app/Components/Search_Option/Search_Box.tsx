// "use client";

// import { useToggleState } from '@/state/toggle_menu';
// import React from 'react'
// import { Search_Data } from './Search_Data';
// import { IoCloseSharp } from "react-icons/io5";
// import { MdOutlineSearch } from "react-icons/md";


// export const Search_Box = () => {
//     const { newsData,is_Search_Open, setIs_Search_Open } = useToggleState();
//   return (
//     <div className="group relative">
//       <div className="w-8 h-8 flex items-center justify-center rounded-full border group-hover:bg-slate-100 transition ease-in-out duration-200">
//         {is_Search_Open ? (
//           <IoCloseSharp
//             onClick={() => setIs_Search_Open(!is_Search_Open)}
//             className=" text-gray-100 group-hover:text-gray-900 transition ease-in-out duration-200 cursor-pointer"
//           />
//         ) : (
//           <MdOutlineSearch
//             onClick={() => setIs_Search_Open(!is_Search_Open)}
//             className=" text-gray-100 group-hover:text-gray-900 transition ease-in-out duration-200 cursor-pointer"
//           />
//         )}
//       </div>

//       {is_Search_Open && (
//         <>
//           <div className="md:flex lg:hidden w-screen h-96 bg-red-300 text-white z-50 -ml-[24rem] md:-ml-[45rem] lg:-ml[80rem] pr-10 pt-4 pb-4 absolute"></div>

//           <div className="lg:flex md:hidden w-screen h-96 bg-blue-300 text-white z-50 mt-10 -ml-[24rem] md:-ml-[82.5rem] lg:-ml[80rem] absolute p-20 inset-0 bg-opacity-5 backdrop-blur-sm">
//             <div className="w-full h-fit bg-slate-100 p-5 backdrop-blur-sm">
//               <form onSubmit={(e) => e.preventDefault()}>
//                 <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
//                   Search
//                 </label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//                     <svg
//                       className="w-4 h-4 text-gray-500 dark:text-gray-400"
//                       aria-hidden="true"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 20 20"
//                     >
//                       <path
//                         stroke="currentColor"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         stroke-width="2"
//                         d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//                       />
//                     </svg>
//                   </div>
//                   <input
//                     type="search"
//                     id="search"
//                     className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     placeholder="Search news"
//                     // onChange={updateSearchValue}
//                     required
//                   />
//                   <button
//                     type="submit"
//                     className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                   >
//                     Search
//                   </button>
//                 </div>
//               </form>

//               {data && <Search_Data data={data}/>}
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   )
// }
