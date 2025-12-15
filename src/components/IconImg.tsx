interface IProps {
  src: string;
}
const IconImg = ({ src }: IProps) => {
  return (
    <div>
      <img src={src} className="w-5 h-5" />
    </div>
  );
};

export default IconImg;
