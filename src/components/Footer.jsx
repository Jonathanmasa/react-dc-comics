// Footer.jsx
export default function Footer() {
    return (
    <footer>
         <div className="container-fluid pt-3 foot-jumbotron d-flex">
                <div className="jumbo-width">
                    <div className="row">
                        <div className="col-md-2">
                            <h5>DC COMICS</h5>
                            <ul className="list-unstyled">
                                <li><a href="#">Characters</a></li>
                                <li><a href="#">Comics</a></li>
                                <li><a href="#">Movies</a></li>
                                <li><a href="#">TV</a></li>
                                <li><a href="#">Games</a></li>
                                <li><a href="#">Videos</a></li>
                                <li><a href="#">News</a></li>
                            </ul>
                            <h5>SHOP</h5>
                            <ul className="list-unstyled">
                                <li><a href="#">Shop DC</a></li>
                                <li><a href="#">Shop DC Collectibles</a></li>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <h5>DC</h5>
                            <ul className="list-unstyled">
                                <li><a href="#">Terms Of Use</a></li>
                                <li><a href="#">Privacy policy</a></li>
                                <li><a href="#">Ad Choices</a></li>
                                <li><a href="#">Advertising</a></li>
                                <li><a href="#">Jobs</a></li>
                                <li><a href="#">Subscriptions</a></li>
                                <li><a href="#">Talent Workshops</a></li>
                            </ul>
                        </div>
                        <div className="col-md-8">
                            <h5>SITES</h5>
                            <ul className="list-unstyled">
                                <li><a href="#">DC</a></li>
                                <li><a href="#">MAD Magazine</a></li>
                                <li><a href="#">DC Kids</a></li>
                                <li><a href="#">DC Universe</a></li>
                                <li><a href="#">DC Power Visa</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <img src="/public/dc-logo-bg.png" alt="dc logo" />
            </div>
        <div className="footer-bar">
                <div className="last-footer d-flex justify-content-between pb-2">
                    <div className="text-center mt-3">
                        <button className="btn btn-outline-primary">SIGN-UP NOW!</button>
                    </div>
                    <div class="mt-3 social-icons">
                        <h5>FOLLOW US</h5>
                        <a href="#"><img className="fab fa-facebook" src="/public/footer-facebook.png" alt="facebook"/></a>
                        <a href="#"><img className="fab fa-twitter" src="/public/footer-twitter.png" alt="facebook"/></a>
                        <a href="#"><img className="fab fa-youtube" src="/public/footer-youtube.png" alt="facebook"/></a>
                        <a href="#"><img className="fab fa-pinterst" src="/public/footer-pinterest.png" alt="facebook"/></a>
                        <a href="#"><img className="fab fa-google" src="/public/footer-periscope.png" alt="facebook"/></a>
                    </div>
                </div>
        </div>
    </footer>);
    }