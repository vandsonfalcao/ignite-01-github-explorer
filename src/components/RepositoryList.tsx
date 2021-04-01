import RepositoryItem from "./RepositoryItem";
import "../styles/repositories.scss";

interface Repository {
  name: string;
  description: string;
  html_url: string;
}
interface RepositoryListProps {
  username: string;
  repositories: Repository[];
}

export default function RepositoryList({
  username,
  repositories,
}: RepositoryListProps) {
  return (
    <section className="repository-list">
      <h2>Lista de Repositórios do(a) {username}</h2>

      <ul>
        {repositories.map((repository) => {
          return (
            <RepositoryItem key={repository.name} repository={repository} />
          );
        })}
      </ul>
    </section>
  );
}
