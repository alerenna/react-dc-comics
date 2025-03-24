import CardList from './CardList'

export default function Main() {
    return (

        <main>

            <div className="jumbotron">

            </div>
            <div className="container">
                <div className="cardSection">
                    <div className="flex-container">
                        <span className="mainTitle">CURRENT SERIES</span>
                        <CardList />

                    </div>

                    <button className='btn'>
                        <a href="#">LOAD MORE</a>
                    </button>

                </div>


                <div className="buySection">
                    <div className="flex-container">
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
            </div>

        </main>

    )
}