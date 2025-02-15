export default function ComicsCard(props) {
    return (
      <div className="card col-lg-2 col-md-3 col-sm-5 p-2 ">
        <img 
          src={props.comicInfo.thumb}
          className="card-img-top"
          alt={props.comicInfo.series}
        />
        <div className="card-body">
          <h5 className="card-title pt-1 text-light">{props.comicInfo.series}</h5>
        </div>
      </div>
    );
  }
