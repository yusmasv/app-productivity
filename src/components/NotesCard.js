//import { AiOutlineEdit } from "react-icons/ai";
import { useState } from "react";
import axios from "axios";

function NotesCard({ title, desc, date, pinned, id }) {
  const monthList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const d = new Date();
  const month = monthList[d.getMonth()];

  const [fields, setFields] = useState({
    title: title,
    desc: desc,
    createdAt: date,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({ createdAt: month });
    setFields({ ...fields, [name]: value });
  };

  const handleSave = () => {
    console.log(fields);
    axios
      .put(`https://62b860d603c36cb9b7c5fc29.mockapi.io/Notes/${id}`, fields)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <label
        class="indicator modal-button flex text-left hover:bg-slate-100 rounded-3xl my-4"
        htmlFor={id}>
        {pinned ? (
          <span class="indicator-item rounded-xl bg-sky-400 border-none mt-8 px-2 py-2"></span>
        ) : (
          <span></span>
        )}

        <div className="card rounded-3xl w-96 h-32 mr-4 text-xs">
          <div className="pl-8 py-8">
            <div className="absolute top-0 left-0 m-6 pl-2 border-1 border-gray-900 rounded-lg">
              <p className="text-[10px] text-white bg-sky-500 px-2 rounded-xl">
                {date}
              </p>
            </div>
            <h2 className=" text-xs text-gray-700 mb-2 mt-4">{fields.title}</h2>
            {/* <p className="text-gray-400">
              {fields.desc.length > 90 ? (
                <p>{fields.desc.slice(0, 90)}...</p>
              ) : (
                fields.desc
              )}
            </p> */}
          </div>
        </div>
      </label>
      <input type="checkbox" id={id} class="modal-toggle" />

      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl h-11/12 max-h-5xl">
          <input
            type="text"
            name="title"
            className="font-bold text-lg"
            onChange={handleChange}
            value={fields.title}
          />

          <textarea
            name="desc"
            onChange={handleChange}
            className="py-4 h-72 w-full text-xs rounded-xl border-none p-8">
            {desc}
          </textarea>

          <div className="modal-action">
            <label
              onClick={() => {
                handleSave();
              }}
              htmlFor={id}
              className="btn text-xs rounded-xl hover:bg-yellow-600 text-white border-none">
              Save
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotesCard;
