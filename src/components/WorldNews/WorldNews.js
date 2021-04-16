import classes from "./WorldNews.module.css";

const WorldNews = () => {
    return ( 
        <div className={classes.WorldNews}>
            <h1>This page Price</h1>
            <p>Price List</p>
            <div className={classes.big}>
                <div className={classes.min}>
                    <h2>Price 1</h2>
                    <ul>
                        <li>product 1 10000</li>
                        <li>product 1 10000</li>
                        <li>product 1 10000</li>
                        <li>product 1 10000</li>
                        <li>product 1 10000</li>
                    </ul>
                </div>
                <div className={classes.min}>
                    <h2>Price 1</h2>
                    <ul>
                        <li>product 1 10000</li>
                        <li>product 1 10000</li>
                        <li>product 1 10000</li>
                        <li>product 1 10000</li>
                        <li>product 1 10000</li>
                    </ul>
                </div>
            </div>
            <img src="https://edit.org/img/blog/7pr-price-list-templates-edit-editable-personalize-free-easy-fast-print-bandamp-w-black-white-pricing.jpg" alt=""/>
        </div>
    );
}
 
export default WorldNews;