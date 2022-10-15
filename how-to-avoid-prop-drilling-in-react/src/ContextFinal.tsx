import React, { createContext, useContext, useState } from "react";

type Tuser = {
  name: string;
  email: string;
};
interface Iuser {
  user: Tuser;
}
interface ILogin {
  setUser: React.Dispatch<React.SetStateAction<Tuser>>;
}
type TContext = Iuser & ILogin;
const Context = createContext<TContext>({} as TContext);
function Final() {
  const [user, setUser] = useState<Tuser>({} as Tuser);
  return (
    <Context.Provider value={{ user, setUser }}>
      {user.email && user.name ? <Body /> : <Login />};
    </Context.Provider>
  );
}
const Login = () => {
  const { setUser } = useContext(Context);
  const submit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    setUser({
      email: formData.get("email")?.toString() ?? "defaultMail",
      name: formData.get("name")?.toString() ?? "defaultName",
    });
  };
  return (
    <form onSubmit={submit}>
      <input type="text" name="name" placeholder="name" required />
      <input type="email" name="email" placeholder="email" required />
      <input type="submit" value="login" />
    </form>
  );
};

const Body = () => (
  <>
    <Header />
    <Main />
    <Footer />
  </>
);

const Header = () => {
  return <div>I'm just header</div>;
};

const Main = () => {
  const { user } = useContext(Context);
  return (
    <div>
      <h2>Salam {user.name}</h2>
      <p>your address email is {user.email}</p>
    </div>
  );
};

const Footer = () => {
  return <>©all rights reserved</>;
};

export default Final;
