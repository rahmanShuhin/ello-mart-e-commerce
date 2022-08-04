import SearchIcon from "../../../IconComponents/SearchIcon";

const NavbarSearch = () => {

  return (
        <div className="navbar--wrapper--search">
            <div className="navbar--wrapper--search--container ">
              <div className="navbar--wrapper--search--container--icon">
                <SearchIcon />
              </div>
              <div className="navbar--wrapper--search--container--searchbox">
                <input type="search" placeholder="search and hit enter.." />
              </div>
            </div>
        </div>
  )
}

export default NavbarSearch