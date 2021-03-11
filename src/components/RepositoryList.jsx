import RepositoryItem from "./RepositoryItem"
import '../styles/repositories.scss'
import { useEffect, useState } from "react"

//https://api.github.com/users/vandsonfalcao/repos

const repository = {
    name: 'RepoName',
    description: 'Forms in React',
    link: 'https://github.com/unform/unform'
}

export default function RepositoryList() {
    const [repositories,setRepositories] = useState([]);
    useEffect(()=>{
        fetch('https://api.github.com/users/vandsonfalcao/repos')
        .then(res => res.json())
        .then(data => console.log(data))
    },[])

    return(
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>

            <ul>
                <RepositoryItem repository={repository}/>
                <RepositoryItem />
                <RepositoryItem />
                <RepositoryItem />
            </ul>
        </section>
    )
}