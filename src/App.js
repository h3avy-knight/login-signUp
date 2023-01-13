import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useState } from "react";

const App = () => {
  const data = [
    {
      id: 1,
      component: <Login />,
      button: "Login",
    },
    {
      id: 2,
      component: <Signup />,
      button: "Signup",
    },
  ];
  const [tabs] = useState(data);
  const [value, setValue] = useState(0);
  const { component } = tabs[value];
  return (
    <div className="max-w-[428px] m-auto p-4">
      <div className="py-4">
        <div className="w-[198px] h-[198px] items-center m-auto">
          <img src={logo} className="w-full" alt="" />
        </div>
        <p className="text-center font-normal text-xm mb-9">
          SOME RANDOM TEXT, SOME RANDOM
          <br />
          TEXT,SOME RANDOM TEXT,SOME RANDOM TEXT
        </p>
        <div className="">
          <ul className="flex flex-row items-center justify-evenly outline-none">
            {tabs.map((tab, i) => (
              <li
                key={tab.id}
                className={`p-2 outline-none font-light border-0 w-full ${
                  i === value && "border"
                }`}
              >
                <button
                  onClick={() => setValue(i)}
                  className="items-center w-full"
                >
                  {tab.button}
                </button>
              </li>
            ))}
          </ul>
          <article>{component}</article>
        </div>
      </div>
    </div>
  );
};

export default App;
