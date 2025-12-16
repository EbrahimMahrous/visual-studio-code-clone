import "./App.css";
import OpenedFilesBar from "./components/OpenedFilesBar";
import RecursiveComponent from "./components/RecursiveComponent";
import ResizeablePanel from "./components/ResizeablePanel";
import { fileTree } from "./data/FileTree";

function App() {
  return (
    <div className="flex h-screen">
      <ResizeablePanel
        showLeftPanel
        leftPanel={
          <div className="w-64">
            <RecursiveComponent fileTree={fileTree} />
          </div>
        }
        rightPanel={<OpenedFilesBar />}
      />
    </div>
  );
}

export default App;
