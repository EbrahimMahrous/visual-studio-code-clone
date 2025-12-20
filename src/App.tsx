import { useSelector } from "react-redux";
import "./App.css";
import type { RootState } from "./app/store";
import Preview from "./components/Preview";
import RecursiveComponent from "./components/RecursiveComponent";
import ResizeablePanel from "./components/ResizeablePanel";
import { fileTree } from "./data/FileTree";
import WelcomeTaps from "./components/WelcomeTaps";

function App() {
  const { openedFiles } = useSelector((state: RootState) => state.tree);

  return (
    <div className="flex h-screen">
      <ResizeablePanel
        showLeftPanel
        leftPanel={
          <div className="w-64">
            <RecursiveComponent fileTree={fileTree} />
          </div>
        }
        rightPanel={openedFiles.length > 0 ? <Preview /> : <WelcomeTaps />}
      />
    </div>
  );
}

export default App;
