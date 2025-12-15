import "./App.css";
import OpenedFilesBar from "./components/OpenedFilesBar";
import RecursiveComponent from "./components/RecursiveComponent";
import { fileTree } from "./data/FileTree";

function App() {
  return (
    <div className="flex h-screen">
      <div className="w-64 border-r border-[#ffffff1f]">
        <RecursiveComponent fileTree={fileTree} />
      </div>
      <OpenedFilesBar />
    </div>
  );
}

export default App;