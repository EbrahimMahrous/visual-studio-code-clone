import { useSelector } from "react-redux";
import OpenedFilesBarTap from "./OpenedFilesBarTap";
import type { RootState } from "../app/store";

interface IProps {}
const OpenedFilesBar = ({}: IProps) => {
  const { openedFiles, clickedFile } = useSelector((state: RootState) => state.tree);
  return (
    <div>
      <div className="flex items-center border-b-[1px] border-[#ffffff1f]">
        {openedFiles.map((file) => (
          <OpenedFilesBarTap key={file.id} file={file} />
        ))}
      </div>
      {clickedFile.fileContent}
    </div>
  );
};

export default OpenedFilesBar;
