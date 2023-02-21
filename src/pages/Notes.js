import NotesCard from "../components/NotesCard";
import Sidebar from "../components/Sidebar";

function Notes() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="py-20 px-8">
        <p className="text-sm font-bold text-gray-400">Pages / Notes</p>
        <p className="text-lg font-bold text-gray-600">Welcome to notes</p>
        <div className="flex py-8">
          <NotesCard />
          <NotesCard />
        </div>
      </div>
    </div>
  );
}

export default Notes;
