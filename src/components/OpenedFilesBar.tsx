import { useSelector } from "react-redux";
import OpenedFilesBarTap from "./OpenedFilesBarTap";
import type { RootState } from "../app/store";
import ContextMenu from "./ui/ContextMenu";
import { useState } from "react";

interface IProps {}
const OpenedFilesBar = ({}: IProps) => {
  const { openedFiles } = useSelector((state: RootState) => state.tree);
  const [showMenu, setShowMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  return (
    <div>
      <div
        className="flex items-center border-b-[1px] border-[#ffffff1f]"
        onContextMenu={(e) => {
          e.preventDefault();
          setMenuPosition({ x: e.clientX, y: e.clientY });
          setShowMenu(true);
        }}
      >
        {openedFiles.map((file) => (
          <OpenedFilesBarTap key={file.id} file={file} />
        ))}
      </div>
      {showMenu && (
        <ContextMenu positions={menuPosition} setShowMenu={setShowMenu} />
      )}
    </div>
  );
};

export default OpenedFilesBar;
