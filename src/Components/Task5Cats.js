import getCats from "./Api/getCats";
import CatCard from "./CatCard";

function Task5Cats() {
    const cats = getCats();
    const items = [];
    for (const index in cats) {
        const catItem = cats[index];
        items.push(
            <div className="col">
                <CatCard title={catItem.title} image={catItem.image} description={catItem.description} />
            </div>
        )
    }

    return (
        <div className="conatainer">
            <div className="row">
                <div className="col">
                    <h1 style={{ marginTop: '30px', marginLeft: '20px' }}>Task 5 CATS</h1>
                </div>
            </div>
            <div className="row">
                {items}
            </div>
        </div>
    )
}



export default Task5Cats;