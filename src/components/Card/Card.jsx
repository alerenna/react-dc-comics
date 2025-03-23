export default function Card({ image, title }) {
    return (
        <section className="col 12 col-sm-6 col-lg-4">
            <div className="card">
                <img src={image} alt={title} />
                <div>{title}</div>
            </div>
        </section>
    )
}