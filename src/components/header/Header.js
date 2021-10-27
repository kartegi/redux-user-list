import SearchBar from '../search-bar/SearchBar'
import './header.sass'

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <SearchBar />
            </div>
        </header>
    )
}

export default Header
