const Input = (props: {
  type: string | undefined;
  placeholder: string | undefined;
}) => {
  return <input type={props.type} placeholder={props.placeholder} />;
};
export default Input;
