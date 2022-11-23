import { useState, FC } from "react";
import reactLogo from "./assets/react.svg";
import { XAuthentication, Introduction } from "../../types";
import "./App.css";

const Articleintroduction: FC<{ token: string }> = ({ token }) => {
  const [articleName, setArticleName] = useState("");
  const [articleIntroduction, setArticleIntroduction] = useState<Introduction>({
    introduction: "",
    articleName: "",
    scrapeDate: 0,
  });

  const fetchIntroduction = async (article: string) => {
    const response = await fetch(
      `http://localhost:3000/introduction/${article}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          [XAuthentication]: token,
        },
      }
    );
    return await response.json();
  };

  return (
    <div>
      <label>
        article name:
        <input
          type="text"
          value={articleName}
          onChange={(v) => setArticleName(v.target.value)}
        />
      </label>

      <button
        onClick={async () =>
          setArticleIntroduction(await fetchIntroduction(articleName))
        }
      >
        search
      </button>
      <div> {articleIntroduction.introduction}</div>
    </div>
  );
};

export default Articleintroduction;
