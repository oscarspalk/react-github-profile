import {useState, useEffect} from 'react'
import './css/RepositoryPage.css'
function RepositoryPage(props){

    const [repositoryData, setRepositoryData] = useState({});
    const [contributors, setContributors] = useState([]);
    const {match} = props;

    useEffect(() => {
        fetch(`https://api.github.com/repos/${props.username}/${match.params.id}`).then( e => e.json()).then(e => setRepositoryData(e))
    },[])

    useEffect(() =>{
        fetch(`https://api.github.com/repos/${props.username}/${match.params.id}/contributors`)
        .then(e => e.json())
        .then(e => setContributors(e))
    }, [contributors])

    return (
        <div className="repository-container">{
        repositoryData === {} ? "Retrieving info" : <div className="meta-data">
            <a  className="repo-title" href={repositoryData.html_url}><h1>{repositoryData.name}</h1></a>
            <div className="con-div">
                Contributors:
                {
                    contributors.map((contributor, index) =>
                    {
                        return <a href={contributor.html_url} className="contributor">
                            <img className="con-pic" key={index} src={contributor.avatar_url} />
                            <h4 className="con-header">{contributor.login}</h4>
                        </a>
                    }
                    )
                }
            </div>
        </div>
        }</div>
    )
}

export default RepositoryPage;