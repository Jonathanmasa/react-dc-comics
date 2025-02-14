// importo comicslist
import ComicsList from "./products/ComicsList.jsx";


// Main.jsx
export default function Main() {
    return (
    <main>

        <div className="container-fluid head-jumbo">
            <button type="button" class="btn btn-primary">CURRENT SERIES</button>
        </div>
        
        

        <div className="content">
            <div className="card-contain">
                <ComicsList />
            </div>
        </div>
        
        <div className="blue-bar text-white loghi-main py-3">
            <div className="container col-9 d-flex flex-wrap justify-content-between align-items-center ">

                <div className="d-flex align-items-center col-2">
                    <img
                    src="/public/buy-comics-digital-comics.png"
                    alt="Digital Comic"
                    className="img-fluid"
                    />
                    <span>Digital Comics</span>
                </div>

                <div className="d-flex align-items-center col-2">
                    <img
                    src="/public/buy-comics-merchandise.png"
                    alt="DC Merchandise"
                    className="img-fluid"
                    />
                    <span>DC Merchandise</span>
                </div>

                <div className="d-flex align-items-center col-2">
                    <img
                    src="/public/buy-comics-subscriptions.png"
                    alt="Subscription"
                    className="img-fluid"
                    />
                    <span>Subscription</span>
                </div>

                <div className="d-flex align-items-center col-2">
                    <img
                    src="/public/buy-comics-shop-locator.png"
                    alt="Comic Shop Locator"
                    className="img-fluid"
                    />
                    <span>Comic Shop Locator</span>
                </div>

                <div className="d-flex align-items-center col-2">
                    <img
                    src="/public/buy-dc-power-visa.svg"
                    alt="DC Power Visa"
                    className="img-fluid"
                    />
                    <span>DC Power Visa</span>
                </div>
            </div>
      </div>
   </main>);
    }