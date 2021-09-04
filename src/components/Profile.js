import {useState, useEffect} from 'react'
import './css/Profile.css'
function Profile(props){

    const [profileData, setProfileData] = useState({});

    useEffect(() =>{
        fetch(`https://api.github.com/users/${props.username}`).then(e => e.json()).then(e => setProfileData(e));
    }, [])


    return(
        <div className="profile-container">
            <div className="profile-picture-column">
                <img className="profpic" src={profileData.avatar_url} />
            </div>
            <div className="profile-content">
                <h1 className="name">{profileData.name}</h1>
                <h3 className="username">@{profileData.login}</h3>
                <p className="bio">
                    {
                        profileData.bio
                    }
                </p>
            </div>
        </div>
    )
}

export default Profile;