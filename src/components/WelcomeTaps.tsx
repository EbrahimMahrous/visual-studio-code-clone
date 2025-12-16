import IconImg from "./IconImg";

interface IProps {}
const WelcomeTaps = ({}: IProps) => {
  return (
    <div className="h-screen flex items-center justify-center">
      <IconImg src="/icons/vscode.svg" className="w-64" />
    </div>
  );
};

export default WelcomeTaps;
