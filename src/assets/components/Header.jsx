export default function Header() {
    return (
        <header>
            <div className="flex-container">
                < div className="col" >
                    <img src="/images/dc-logo.png" alt="" />
                </ div>
                <div className="col">
                    <nav className="menu">
                        <ul>
                            <li><a href="">CHARACTERS</a></li>
                            <li><a className="active" href="">COMICS</a></li>
                            <li><a href="">MOVIES</a></li>
                            <li><a href="">TV</a></li>
                            <li><a href="">GAMES</a></li>
                            <li><a href="">COLLECTIBLES</a></li>
                            <li><a href="">VIDEOS</a></li>
                            <li><a href="">FANS</a></li>
                            <li><a href="">NEWS</a></li>
                            <li><a href="">SHOP</a></li>
                        </ul>
                    </nav>
                </div>
            </div >

        </header>

    )
}