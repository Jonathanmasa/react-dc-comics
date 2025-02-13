// Header.jsx
export default function Header() {
    // dati ricavati per la gestione dei link navbar
    const links = [
        { id: 1, text: 'Characters', url: '#', current: false },
        { id: 2, text: 'Comics', url: '#', current: true },
        { id: 3, text: 'Movies', url: '#', current: false },
        { id: 4, text: 'TV', url: '#', current: false },
        { id: 5, text: 'Games', url: '#', current: false },
        { id: 6, text: 'Collectionables', url: '#', current: false },
        { id: 7, text: 'Videos', url: '#', current: false },
        { id: 8, text: 'Fans', url: '#', current: false },
        { id: 9, text: 'Views', url: '#', current: false },
        { id: 10, text: 'Shop', url: '#', current: false },
    ];
    
    return (
    <header>
         <nav className="navbar navbar-expand-lg navbar-light navbar-header">
            <div className="container">
                <a className="navbar-brand" href="#"><img src="/public/dc-logo.png" alt="DC Logo"/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a className="nav-link" href="#">Characters</a></li>
                        <li className="nav-item   nav-active"><a className="nav-link" href="#">Comics</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Movies</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">TV</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Games</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Collectionables</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Videos</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Fans</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Views</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Shop</a></li>
                    </ul>
                </div>
            </div>
        </nav>
  
    </header>);
    }