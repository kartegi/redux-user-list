import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { selectUser } from '../../redux/actions/userActions'
import './search-bar.sass'

const SearchBar = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const handleSearch = (e) => {
        e.preventDefault()
        dispatch(selectUser(e.target[0].value.toLowerCase()))
        e.target[0].value = ''
        history.push('/')
    }

    return (
        <form className="search-bar" onSubmit={handleSearch} >
            <input type="text" className="search-bar__input" />
            <button type="submit" className="search-bar__btn">
                <i className="search-bar__icon">&#9906;</i>
            </button>
        </form>
    )
}

export default SearchBar
