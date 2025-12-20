import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenedFilesAction } from "../../app/features/fileTreeSlice";
import type { RootState } from "../../app/store";

interface IProps {
  setShowMenu: (val: boolean) => void;
  positions: {
    x: number;
    y: number;
  };
}
const ContextMenu = ({ positions, setShowMenu }: IProps) => {
  const dispatch = useDispatch();
  const menuRef = useRef<HTMLDivElement>(null);
  const { openedFiles, tapIdToRemove } = useSelector(
    (state: RootState) => state.tree
  );

  // ** Handlers
  const onCloseAll = () => {
    dispatch(setOpenedFilesAction([]));
    setShowMenu(false);
  };
  const onClose = () => {
    const filtered = openedFiles.filter((file) => file.id !== tapIdToRemove);
    dispatch(setOpenedFilesAction(filtered));
    setShowMenu(false);
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [setShowMenu]);

  return (
    <div ref={menuRef}>
      <ul
        className="bg-white text-black w-fit px-7 py-2 rounded-md"
        style={{
          position: "absolute",
          left: positions.x,
          top: positions.y,
        }}
      >
        <li onClick={onClose}>Close</li>
        <li onClick={onCloseAll}>Close All</li>
      </ul>
    </div>
  );
};

export default ContextMenu;

// ** useEffect
// ** Click Event
// ** Menu Ref => useRef ✅
