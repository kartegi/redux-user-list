import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "../../redux/actions/asyncActions/fetchUsers"
import './user-list.sass'
import UserCard from "../user-card/UserCard"
import Loading from "../loading/Loading"
import { addUser } from "../../redux/actions/userActions"



const UserList = () => {
    const selectedUser = useSelector(state => state.users.selectedUser)
    const users = useSelector(state => state.users.users)
    const dispatch = useDispatch()
    const currentUsers = users.filter(user => user.login.indexOf(selectedUser) > -1 ? true : false)

    useEffect(() => {
        dispatch(addUser({}))
        dispatch(fetchUsers())
    }, [dispatch])
    
    return (
        <div className="user-list">
            
        {       
            users.length > 0 ?     
                <div className="container">
                    {
                        currentUsers.length > 0 ?
                            currentUsers.map(user => <UserCard key={user.id} user={user} />) :
                            <h1 style={{alignSelf: 'center'}}>Not found</h1>
                    }
                </div> :
                <Loading />
        }
        </div>
    )
}

export default UserList
