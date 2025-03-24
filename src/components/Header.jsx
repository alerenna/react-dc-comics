export default function Header({ menuItems }) {
    return (
        <header>
            <div className="flex-container">
                < div className="col" >
                    <img id="logo" src="/images/dc-logo.png" alt="" />
                </ div>
                <div className="col">
                    <nav className="menu">
                        <ul>
                            {menuItems.map((item) => (
                                <li key={item.id}>
                                    <a className={item.active ? 'active' : ''} href={item.url}>{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div >

        </header>

    )
}