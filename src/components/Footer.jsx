export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="topSection">
                    <div className="flex-container">

                        <div className="left">
                            <div className="col">
                                <h3>DC COMIC</h3>
                                <ul className="list-unstyled">
                                    <li><a href="">Characters</a></li>
                                    <li><a href="">Comics</a></li>
                                    <li><a href="">Movies</a></li>
                                    <li><a href="">TV</a></li>
                                    <li><a href="">Games</a></li>
                                    <li><a href="">Videos</a></li>
                                    <li><a href="">News</a></li>
                                </ul>

                                <div className="col">
                                    <h3>SHOP</h3>
                                    <ul className="list-unstyled">
                                        <li><a href="">Shop DC</a></li>
                                        <li><a href="">Shop DC Collection</a></li>
                                    </ul>
                                </div>

                            </div>
                            <div className="col">
                                <h3>DC</h3>
                                <ul className="list-unstyled">
                                    <li><a href="">Terms of use</a></li>
                                    <li><a href="">Privacy policy</a></li>
                                    <li><a href="">Ad choices</a></li>
                                    <li><a href="">Advertising</a></li>
                                    <li><a href="">Jobs</a></li>
                                    <li><a href="">Terms of use</a></li>
                                    <li><a href="">Privacy policy</a></li>
                                    <li><a href="">Ad choices</a></li>
                                    <li><a href="">Terms of use</a></li>
                                    <li><a href="">Jobs</a></li>
                                </ul>
                            </div>

                            <div className="col">
                                <h3>SITES</h3>
                                <ul className="list-unstyled">
                                    <li><a href="">DC</a></li>
                                    <li><a href="">MAD Magazine</a></li>
                                    <li><a href="">DC Kids</a></li>
                                    <li><a href="">DC Universe</a></li>
                                    <li><a href="">DC Power Visas</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="right">
                            <div className="col">
                                <img id="logoBg" src="/images/dc-logo-bg.png" alt="" />
                            </div>
                        </div>

                    </div>
                </div>

                <div className="bottomSection">

                    <div className="flex-container">
                        <button className="btn">
                            SIGN-UP NOW!
                        </button>

                        <div className="socials">
                            <span>FOLLOW US</span>
                            <img src="/images/footer-facebook.png" alt="" />
                            <img src="/images/footer-twitter.png" alt="" />
                            <img src="/images/footer-youtube.png" alt="" />
                            <img src="/images/footer-pinterest.png" alt="" />
                            <img src="/images/footer-periscope.png" alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}