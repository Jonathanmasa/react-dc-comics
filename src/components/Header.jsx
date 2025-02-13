// Header.jsx
export default function Header({links}) {
    return (
    <header>
         <nav className="navbar navbar-expand-lg navbar-light navbar-header">
            <div className="container">

                <a className="navbar-brand" href="#">
                    <img src="/public/dc-logo.png" alt="DC Logo" />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                {/* Contenitore della navbar con i link */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {links.map((link) => (
                            <li key={link.id} className="nav-item">
                                <a
                                    className={`nav-link ${link.current ? "active" : ""}`}
                                    href={link.url}
                                >
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                 </div>

            </div>
      </nav>
  </header>
 );
}
