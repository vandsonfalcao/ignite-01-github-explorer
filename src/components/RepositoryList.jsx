import RepositoryItem from "./RepositoryItem"
import '../styles/repositories.scss'
import { useEffect, useState } from "react"

//https://api.github.com/users/vandsonfalcao/repos

export default function RepositoryList() {
    const [repositories,setRepositories] = useState([]);
    useEffect(()=>{
        fetch('https://api.github.com/users/vandsonfalcao/repos')
        .then(res => res.json())
        .then(data => setRepositories(data))
    },[])

    return(
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>

            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository} />
                })}
            </ul>
        </section>
    )
}