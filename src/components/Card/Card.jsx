import styles from './Card.module.css'

export default function Card({ image, title }) {
    return (
        <section className="col-12 col-sm-6 col-lg-4">
            <div className={styles.card}>
                <img src={image} alt={title} />
                <div className="title">{title}</div>
            </div>
        </section>
    )
}