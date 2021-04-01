import { FormEvent, useState } from "react";
import RepositoryList from "./RepositoryList";
import "../styles/repositories.scss";

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export default function SearchRepo() {
  const [username, setUsername] = useState("");
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [isValid, setIsValid] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [content, setContent] = useState("wellcome" || "repolist" || "error");
  function renderContent() {
    switch (content) {
      case "wellcome":
        return (
          <main>
            <div>
              <h2>Ah não! Onde estam os respositorios?😭</h2>
              <p>Digite um usuario do github e precione em enviar.</p>
            </div>
          </main>
        );
      case "repolist":
        return (
          <RepositoryList username={username} repositories={repositories} />
        );
      case "error":
        return (
          <main>
            <div>
              <h2 className="warning">404 - Nenhum repositorio encontrado👻</h2>
              <p>Digite um usuario do github e precione em enviar.</p>
            </div>
          </main>
        );
    }
  }
  function goSearchRepo() {
    fetch(`https://api.github.com/users/${inputValue}/repos`).then((res) => {
      res.status === 404
        ? setContent("error")
        : res.json().then((data) => {
            setRepositories(data);
            setContent("repolist");
          });
    });
    fetch(`https://api.github.com/users/${inputValue}`).then((res) => {
      res.status === 404
        ? setContent("error")
        : res.json().then((data) => {
            setUsername(data.name);
          });
    });
  }
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    goSearchRepo();
    setIsValid(false);
    setInputValue("");
  }
  return (
    <>
      <header className="header">
        <div>
          <h1>SearchRepo🕵🏻‍♂️</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="username"
              placeholder="username"
              value={inputValue}
              onChange={(e) => {
                setIsValid(true);
                setInputValue(e.target.value);
                if (e.target.value === "") {
                  setIsValid(false);
                }
              }}
            />
            {isValid === true ? (
              <button type="submit">Enviar</button>
            ) : (
              <button type="submit" disabled>
                Enviar
              </button>
            )}
          </form>
        </div>
      </header>
      {renderContent()}
    </>
  );
}
