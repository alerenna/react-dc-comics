import CardList from './CardList'

export default function Main() {
    return (

        <main>
            <div className="jumbotron">
                <span className="title">CURRENT SERIES</span>
            </div>
            <div className="container">
                <div className="cardSection">
                    <CardList />
                </div>

                <div className="buySection">
                    <div className="icon">
                        <img src="/images/buy-comics-digital-comics.png" alt="" />
                        <span id="iconName">DIGITAL COMICS</span>
                    </div>
                    <div className="icon">
                        <img src="/images/buy-comics-merchandise.png" alt="" />
                        <span id="iconName">DC MERCHANDISE</span>
                    </div>
                    <div className="icon">
                        <img src="/images/buy-comics-subscriptions.png" alt="" />
                        <span id="iconName">SUBSCRIPTION</span>
                    </div>
                    <div className="icon">
                        <img src="/images/buy-comics-shop-locator.png" alt="" />
                        <span id="iconName">COMIC SHOP LOCATOR</span>
                    </div>
                    <div className="icon">
                        <img src="/images/buy-dc-power-visa.svg" alt="" />
                        <span id="iconName">DC POWER VISA</span>
                    </div>
                </div>
            </div>
        </main>

    )
}