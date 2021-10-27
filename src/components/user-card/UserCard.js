import { Link } from "react-router-dom"
import './user-card.sass'

function UserCard({user}) {

    return (
        <div className="user-card">
            <header className="user-card__header">
                <img className="user-card__img" src={user.avatar_url} alt="user avatar" />
            </header>
            <div className="user-card__body">
                <p className="user-card__login">{user.type}: {user.login}</p>
                <p className="user-card__id">id: {user.id}</p>
            </div>
                <Link to={'/user/' + user.login} className="user-card__link">learn more...</Link>
        </div>
    )
}

export default UserCard