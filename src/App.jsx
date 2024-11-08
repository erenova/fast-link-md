import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [links, setLinks] = useState([]);
  function newLinkItem() {
    setLinks([...links, { name, url }]);
  }
  return (
    <div className="p-2">
      <div className="flex flex-col justify-center  w-40 items-center">
        <label className="flex flex-col" htmlFor={`nameInp`}>
          Link Name:
          <input
            id={`nameInp`}
            type="text"
            className="w-40 border border-blue-500 rounded-md"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
        <label className="flex flex-col" htmlFor={`urlInp`}>
          Url:
          <input
            id={`urlInp`}
            type="text"
            className="w-40 border border-blue-500 rounded-md"
            onChange={(e) => {
              setUrl(e.target.value);
            }}
          />
        </label>
        <button
          className="border-green-500 border p-1 rounded-md mt-2 w-20"
          onClick={() => {
            newLinkItem();
          }}
        >
          Submit
        </button>
      </div>
      <h1>Links:</h1>
      {links.map((item) => {
        return (
          <a
            className="border rounded-xl p-1 px-2 bg-red-500 text-white"
            key={item.url}
            href={item.url}
          >
            {item.name}
          </a>
        );
      })}
    </div>
  );
};

export default App;
