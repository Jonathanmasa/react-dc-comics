export default function ComicsCard(props) {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={props.comicInfo.thumb}
          alt={props.comicInfo.title}
        />
        <div className="card-body">
          <h5 className="card-text">{props.comicInfo.title}</h5>
        </div>
      </div>
    );
  }
