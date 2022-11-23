import { useState } from "react";

import SignIn from "./SignIn";
import Articleintroduction from "./Articleintroduction";

function App() {
  const [token, setToken] = useState("");

  return (
    <>
      <SignIn setToken={setToken}></SignIn>
      {token ? <Articleintroduction token={token}></Articleintroduction> : null}
    </>
  );
}

export default App;
