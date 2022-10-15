import React, { useState } from "react";

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
function ComponentComposition() {
  const [user, setUser] = useState<Tuser>({} as Tuser);
  if (user.email && user.name)
    return (
      <Body>
        <Header />
        <Main user={user} />
        <Footer />
      </Body>
    );
  return <Login setUser={setUser} />;
}
const Login = ({ setUser }: ILogin) => {
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

const Body = ({ children }: { children: React.ReactNode }) => <>{children}</>;

const Header = () => {
  return <div>I'm just header</div>;
};

const Main = ({ user }: Iuser) => {
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

export default ComponentComposition;
