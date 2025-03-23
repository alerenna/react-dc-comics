import comics from '../../../comics'
import Card from './Card/Card'

export default function CardList() {
    return (
        <section className="cards">
            <div className="container">
                <div className="row">

                    {comics.map((comic) => (
                        <Card image={comic.thumb} title={comic.title} />
                    ))}

                </div>
            </div>
        </section>
    )
}