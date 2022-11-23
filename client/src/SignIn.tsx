import { useState, FC } from "react";
import reactLogo from "./assets/react.svg";
import { UserPreference, postUserResponse } from "../../types";
import "./App.css";

const SignIn: FC<{
  setToken: React.Dispatch<React.SetStateAction<string>>;
}> = ({ setToken }) => {
  const [language, setLanguage] = useState("");
  const [userName, setUserName] = useState("");

  const signUp = async (language: string, userName: string) => {
    const response = await fetch("http://localhost:3000/user", {
      method: "POST",
      body: JSON.stringify({ language, userName } as UserPreference),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    return (await response.json()) as postUserResponse;
  };

  return (
    <>
      <label>
        user name:
        <input
          type="text"
          value={userName}
          onChange={(v) => setUserName(v.target.value)}
        />
      </label>
      <label>
        language:
        <input
          type="text"
          value={language}
          onChange={(v) => setLanguage(v.target.value)}
        />
      </label>

      <button
        onClick={async () => setToken((await signUp(language, userName)).token)}
      >
        sign in
      </button>
    </>
  );
};

export default SignIn;
