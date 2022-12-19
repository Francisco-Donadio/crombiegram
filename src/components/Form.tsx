import Input from "./Input";

const Form = (props: { isRegistered: boolean }) => {
  return (
    <form>
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      {props.isRegistered === false && (
        <Input type="password" placeholder="Confirm Password" />
      )}
      <button type="submit">{props.isRegistered ? "Login" : "Register"}</button>
    </form>
  );
};

export default Form;
