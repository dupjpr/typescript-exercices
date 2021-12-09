
interface Props {
  title: string,
  inputType: string,
}

const CustomButton = ({ title, inputType }: Props) => {

  return (
    <input type={inputType} value={title}/>
  );
}

export default CustomButton;