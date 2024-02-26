import React, { useState } from "react";

type Props = {
  onChange: (e: any) => void;
};

export const Add_Category = ({ onChange }: Props) => {
  const options = [
    { value: "world", label: "world" },
    { value: "business", label: "business" },
    { value: "science", label: "science" },
    { value: "health", label: "health" },
    { value: "sport", label: "sport" },
    { value: "lifestyle", label: "lifestyle" },
    { value: "food", label: "food" },
    { value: "travel", label: "travel" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [categoryName, setCategoryName] = useState("All categories");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <button
        onClick={toggleDropdown}
        id="dropdown-button"
        data-dropdown-toggle="dropdown"
        className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-e-0 border-gray-300 dark:border-gray-700 dark:text-white rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        type="button"
      >
        {categoryName}{" "}
        <svg
          className="w-2.5 h-2.5 ms-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      <div
        id="dropdown"
        className={`${
          isOpen ? "block" : "hidden"
        }  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200 mt-2"
          aria-labelledby="dropdown-button"
        >
          {options.map((item) => (
            <li
              key={item.value}
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={(e) => {
                const syntheticEvent = { target: { value: item.value,id:"category" } }; // Creating a synthetic event
                onChange(syntheticEvent); // Calling onChange with the synthetic event
                setCategoryName(item.label)
                toggleDropdown();
              }}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
