import { useDispatch, useSelector } from "react-redux";
import type { IFile } from "../interfaces";
import CloseIcon from "./CloseIcon";
import RenderFileIcon from "./RenderFileIcon";
import { setClickedFileAction } from "../app/features/fileTreeSlice";
import type { RootState } from "../app/store";

interface IProps {
  file: IFile;
}
const OpenedFilesBarTap = ({ file }: IProps) => {
  const dispatch = useDispatch();
  const {
    clickedFile: { activeTapId },
  } = useSelector((state: RootState) => state.tree);

  // **  Handler
  const onClick = () => {
    const { id, name, content } = file;
    dispatch(
      setClickedFileAction({
        filename: name,
        fileContent: content,
        activeTapId: id,
      })
    );
  };

  return (
    <div
      className={`flex items-center p-2 border-t-2 ${
        file.id === activeTapId ? "border-[#cf6ccf]" : "border-transparent"
      }`}
      onClick={onClick}
    >
      <RenderFileIcon filename={file.name} />
      <span className="cursor-pointer duration-300 flex justify-center items-center w-fit mx-2 p-1 rounded-md">
        {file.name}
      </span>
      <span className="cursor-pointer hover:bg-[#64646473] duration-300 flex justify-center items-center w-fit mr-2 p-1 rounded-md">
        <CloseIcon />
      </span>
    </div>
  );
};

export default OpenedFilesBarTap;
