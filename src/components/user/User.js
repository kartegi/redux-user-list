import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../../redux/actions/asyncActions/fetchUser'
import Loading from '../loading/Loading'
import './user.sass'

const User = (props) => {
    const user = useSelector(state => state.users.user)
    const dispatch = useDispatch()
    const userEmpty =  Object.keys(user).length === 0

    useEffect(() => {
        const login = props.match.params.login

        dispatch(fetchUser('https://api.github.com/users/' + login))
    }, [dispatch, props.match.params.login])

    return (
        <div className="user">
        { 
            userEmpty ?
                <Loading /> :  
                <div className="container">
                    <div className="user__short">
                        <div className="user__avatar">
                            <img src={ user.avatar_url } alt="user avatar" className="user__img" />
                        </div>
                        <div className="user__desc">
                            <p>{ user.type }: { user.login }</p>
                            <p>ID: { user.id }</p>
                            <p>Followers: { user.followers }</p>
                            <p>Following: { user.following }</p>
                        </div>
                    </div>
                    <div className="user__info">
                        <h1>{ user.name }</h1>
                        <span>{ user.location }</span>
                        <p>{user.bio}</p>
                        <div className="user__ext-info">
                            <p>Company: { user.company }</p>
                            <p>Email: {user.email ? user.email : 'none'}</p>
                            <p>Twitter: { user.twitter_username ? user.twitter_username : 'none' }</p>
                            <p>Blog: {user.blog ? <a href={user.blog}>{user.blog}</a> : 'none'}</p>
                        </div>
                    </div>
                </div>
        }
        </div>
    )
}

export default User
