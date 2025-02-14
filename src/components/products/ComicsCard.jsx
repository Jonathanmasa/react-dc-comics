export default function ComicsCard({ thumb, title }) {

    return {
        <div className="card" style={{ width: "18rem" }}>
            <img src={thumb} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-text">{title}</h5>
            </div>
        </div>  
    };
}
