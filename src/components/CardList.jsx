import comics from '../../../comics'
import Card from './Card/Card'

export default function CardList() {
    return (
        <section className="cards">
            <div className="flex-container">
                <div className="row">

                    {comics.map((comic) => (
                        <Card key={comic.id} image={comic.thumb} title={comic.title} />
                    ))}

                </div>
            </div>
        </section>
    )
}