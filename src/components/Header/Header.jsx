import React, { useState } from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const authStatus = useSelector((state) => state.auth?.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "About",
      slug: "/about",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  const handleNavigation = (path) => {
    setMenuOpen(false); // Close the menu after navigation
    window.location.href = path;
  };

  return (
    <header className="bg-zinc-900 py-4 shadow-md">
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <Logo width="70px" />
          </Link>

          {/* Navigation Links for Desktop */}
          <nav className=" hidden md:flex space-x-6">
            <ul className="flex ml-auto">
              {navItems.map((item) =>
                item.active ? (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className="inline-block px-6 py-2 duration-200 hover:text-orange-500 hover:text-md rounded-full"
                    >
                      {item.name}
                    </button>
                  </li>
                ) : null
              )}

              {authStatus && (
                <li>
                  <LogoutBtn />
                </li>
              )}
            </ul>
          </nav>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-zinc-300 hover:text-orange-400 transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="orange"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="bg-zinc-800 shadow-md md:hidden mt-2 rounded-lg overflow-hidden">
            <ul>
              {navItems.map(
                (item) =>
                  item.active && (
                    <li key={item.name}>
                      <button
                        onClick={() => handleNavigation(item.slug)}
                        className="block w-full text-left text-zinc-300 hover:bg-orange-400 hover:text-white px-4 py-3"
                      >
                        {item.name}
                      </button>
                    </li>
                  )
              )}
              {authStatus ? (
                <li>
                  <LogoutBtn className="block w-full text-left text-zinc-300 hover:bg-red-500 hover:text-white px-4 py-3" />
                </li>
              ) : null}
            </ul>
          </div>
        )}
      </Container>
    </header>
  );
}

export default Header;
