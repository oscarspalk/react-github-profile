import './css/Repository.css'
import {useHistory} from 'react-router-dom'
function Repository(props){

    const history = useHistory();

    return(
        <a onClick={() => {
            history.push(`/repos/${props.title}`)
        }}  className="repo-container">
           <h2 className="repo-title">{props.title}</h2>
            <div className="repo-description">{props.description}</div>
            <div className="repo-language">{props.lang}</div></a>
    )
}

export default Repository;