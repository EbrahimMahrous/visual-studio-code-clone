import { useSelector } from "react-redux";
import FileSyntaxHighlighter from "./FileSyntaxHighlighter";
import OpenedFilesBar from "./OpenedFilesBar";
import type { RootState } from "../app/store";

interface IProps {}
const Preview = ({}: IProps) => {
  const { clickedFile } = useSelector((state: RootState) => state.tree);

  return (
    <>
      <OpenedFilesBar />
      <FileSyntaxHighlighter content={clickedFile.fileContent || ""} />
    </>
  );
};

export default Preview;
