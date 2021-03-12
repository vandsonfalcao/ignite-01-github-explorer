export default function RepositoryItem(props){
    return (
        <li>
            <strong>{props.repository?.name ?? 'repositoryName'}</strong>
            <p>{props.repository?.description ?? 'default'}</p>

            <a href={props.repository?.html_url} >
                Acessar repositório
            </a>
        </li>
    );
}