import { useDispatch } from "react-redux";
import type { IFile } from "../interfaces";
import CloseIcon from "./CloseIcon";
import RenderFileIcon from "./RenderFileIcon";
import { setClickedFileAction } from "../app/features/fileTreeSlice";

interface IProps {
  file: IFile;
}
const OpenedFilesBarTap = ({ file }: IProps) => {
  const dispatch = useDispatch();
  // **  Handler
  const onClick = () => {
    const { name, content } = file;
    dispatch(setClickedFileAction({ filename: name, fileContent: content }));
  };

  return (
    <div className="flex items-center" onClick={onClick}>
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
