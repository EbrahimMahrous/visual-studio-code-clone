import { extensionIconPaths } from "../Constant";
import IconImg from "./IconImg";
import FileIcon from "./SVG/File";
interface IProps {
  filename: string;
  isFolder?: boolean;
  isOpen?: boolean;
}
const RenderFileIcon = ({ filename, isFolder, isOpen }: IProps) => {
  const extention = filename.split(".").pop();
  if (
    extention &&
    Object.prototype.hasOwnProperty.call(extensionIconPaths, extention)
  ) {
    const iconPath = isFolder
      ? isOpen
        ? `${extensionIconPaths[extention]}-open.svg`
        : `${extensionIconPaths[extention]}.svg`
      : `${extensionIconPaths[extention]}.svg`;

    return <IconImg src={iconPath} />;
  }
  if (isFolder && isOpen)
    return <IconImg src="/icons/folder-default-open.svg" />;
  if (isFolder && !isOpen) return <IconImg src="/icons/folder-default.svg" />;

  return <FileIcon />;
};

export default RenderFileIcon;
