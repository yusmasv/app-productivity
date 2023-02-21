import Sidebar from "../components/Sidebar";
import { AiOutlineSearch } from "react-icons/ai";
import NotesCard from "../components/NotesCard";
import axios from "axios";
import { useEffect, useState } from "react";

function Dashboard() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios
      .get("https://62b860d603c36cb9b7c5fc29.mockapi.io/Notes")
      .then((response) => {
        setNotes(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="flex">
      <Sidebar />

      <div className="overflow-auto relative h-screen top-0 inset-y-0 left-0 bg-white rounded-xl p-8 scrollbar-none">
        <div className="flex">
          <span className="mt-4 ml-6 bg-white text-xl h-20 rounded-3xl">
            <AiOutlineSearch />
          </span>
          <input
            type="text"
            placeholder="Search notes"
            className="bg-white text-xs ml-4 mt-1 input border-1 border-gray-300 bg-white rounded-3xl w-96 h-10 max-w-xs"></input>
        </div>
        <h1 className="ml-8 text-md text-gray-700 font-semibold">
          Quick notes
        </h1>
        <div>
          <p className="ml-8 text-xs mt-2">Pinned notes</p>
          {/* pemisah pin notes */}
          {/* <div class="indicator flex bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-3xl">
            <div className="card rounded-3xl w-96 h-32 mr-4 mt-2 text-xs">
              <div className="card-body">
                <h2 className="card-title text-xs text-white font-medium">
                  Go to your notes collection ⭐⭐⭐
                </h2>
                <p>Keep it noted, keep it productive!</p>
                <div className="absolute bottom-0 right-0 mb-6 mr-3">
                  <a
                    href="/notes"
                    class="btn btn-xs bg-white text-blue-900 border-none rounded-xl hover:text-white">
                    Go
                  </a>
                </div>
              </div>
            </div>
          </div> */}
          {notes.length === 0 ? (
            <svg
              role="status"
              className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          ) : (
            notes.map((note, index) =>
              note.isPinned ? (
                <div>
                  <NotesCard
                    key={index}
                    title={note.title}
                    desc={note.desc}
                    date={note.createdAt}
                    pinned={note.isPinned}
                    id={note.id}
                  />
                </div>
              ) : (
                ""
              )
            )
          )}
        </div>
      </div>

      <div className="absolute inset-y-0 right-0 w-5/12 h-18 bg-white mx-4 my-8 rounded-xl p-8">
        <p className="absolute inset-y-0 right-12">• •</p>
        <div className="card card-side bg-slate-100 rounded-3xl h-60 mb-6 mt-4">
          <div className="card-body">
            <h2 className="card-title ml-4 text-xs">
              Tuesday, 10 January 2022
            </h2>
            <p className="ml-4 text-xs">✏️ Your to do list</p>
            <div class="form-control p-2 overflow-auto scrollbar scrollbar-w-1 scrollbar-thumb-gray-200 scrollbar-track-white relative h-screen top-0">
              <label class="cursor-pointer label">
                <span class="label-text text-xs text-gray-500">
                  Learn blockchain
                </span>
                <input
                  type="checkbox"
                  class="checkbox checkbox-primary w-4 h-4 mr-4"
                />
              </label>
              <label class="cursor-pointer label">
                <span class="label-text text-xs text-gray-500">Feed momo</span>
                <input
                  type="checkbox"
                  class="checkbox checkbox-primary w-4 h-4 mr-4"
                />
              </label>
              <label class="cursor-pointer label">
                <span class="label-text text-xs text-gray-500">
                  Do math homework
                </span>
                <input
                  type="checkbox"
                  class="checkbox checkbox-primary w-4 h-4 mr-4"
                />
              </label>
              <label class="cursor-pointer label">
                <span class="label-text text-xs text-gray-500">
                  Weekly shopping
                </span>
                <input
                  type="checkbox"
                  class="checkbox checkbox-primary w-4 h-4 mr-4 "
                />
              </label>
              <label class="cursor-pointer label">
                <span class="label-text text-xs text-gray-500">
                  Remember me
                </span>
                <input
                  type="checkbox"
                  class="checkbox checkbox-primary w-4 h-4 mr-4"
                />
              </label>
              <label class="cursor-pointer label">
                <span class="label-text text-xs text-gray-500">
                  Remember me
                </span>
                <input
                  type="checkbox"
                  class="checkbox checkbox-primary w-4 h-4 mr-4"
                />
              </label>
            </div>
          </div>
        </div>
        <div class="card card-side bg-slate-100 rounded-3xl h-48">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="weather"
              className="h-80"
            />
          </figure>
          <div class="card-body ">
            <h2 class="card-title text-xs">🌤️ Today's weather</h2>
            <p className="text-xs">Click the button to watch on Jetflix app.</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary text-xs rounded-2xl text-white bg-sky-500 border-none hover:bg-yellow-500">
                More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
