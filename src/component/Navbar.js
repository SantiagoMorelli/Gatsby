import React from "react"
import { RiAlignJustify } from "react-icons/ri"
import { SiYourtraveldottv } from "react-icons/si"
import { Link } from "gatsby"
import { useState } from "react"

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <SiYourtraveldottv size={70} color="#645cff" />
          </Link>
          <button onClick={() => setShowMenu(!showMenu)} className="nav-btn">
            <RiAlignJustify />
          </button>
        </div>
        <div className={showMenu ? "nav-links show-links" : "nav-links"}>
          <Link
            onClick={() => setShowMenu(!showMenu)}
            className="nav-link"
            to="/"
            activeClassName="active-link"
          >
            home
          </Link>
          <Link
            onClick={() => setShowMenu(!showMenu)}
            className="nav-link"
            to="/about"
            activeClassName="active-link"
          >
            about
          </Link>
          <Link
            onClick={() => setShowMenu(!showMenu)}
            className="nav-link"
            to="/tags"
            activeClassName="active-link"
          >
            tags
          </Link>
          <Link
            onClick={() => setShowMenu(!showMenu)}
            className="nav-link"
            to="/recipes"
            activeClassName="active-link"
          >
            recipes
          </Link>
          <Link
            onClick={() => setShowMenu(!showMenu)}
            className="nav-link"
            to="/contact"
            activeClassName="active-link"
          >
            contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
