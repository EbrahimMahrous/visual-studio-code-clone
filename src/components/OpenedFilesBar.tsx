import { useSelector } from "react-redux";
import OpenedFilesBarTap from "./OpenedFilesBarTap";
import type { RootState } from "../app/store";
import FileSyntaxHighlighter from "./FileSyntaxHighlighter";

interface IProps {}
const OpenedFilesBar = ({}: IProps) => {
  const { openedFiles, clickedFile } = useSelector(
    (state: RootState) => state.tree
  );
  return (
    <div>
      <div className="flex items-center border-b-[1px] border-[#ffffff1f]">
        {openedFiles.map((file) => (
          <OpenedFilesBarTap key={file.id} file={file} />
        ))}
      </div>
      <FileSyntaxHighlighter content={clickedFile.fileContent || ""} />
    </div>
  );
};

export default OpenedFilesBar;
