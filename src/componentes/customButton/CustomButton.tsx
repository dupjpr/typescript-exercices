
interface Props {
  title: string,
  onClick:any
}

const CustomButton = ({ title, onClick }: Props) => {

  return (
    <button onClick={onClick}>
      {title}
    </button>
  );
}

export default CustomButton;