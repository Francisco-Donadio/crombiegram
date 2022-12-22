import Input from "./Input";

const Form = (props: { isRegistered: boolean }) => {
  return (
    <div>
      <div>
        <img src="images/logo.png" alt="logo" className="logo" />
      </div>
      <form>
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        {props.isRegistered === false && (
          <Input type="password" placeholder="Confirm Password" />
        )}
        <button type="submit">
          {props.isRegistered ? "Login" : "Register"}
        </button>
      </form>
    </div>
  );
};

export default Form;
