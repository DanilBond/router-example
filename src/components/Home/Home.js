import classes from "./Home.module.css";

const Home = () => {
    return ( 
        <div className={classes.Home}>
            <h1>Tourist places</h1>
            <div className={classes.Flexable}>
            <div className={classes.Cont}><img src="https://www.usnews.com/dims4/USNEWS/22c54a0/2147483647/thumbnail/640x420/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F93%2F08%2F63d7674d439ca41b4d9a312f0e9f%2F2-giza-getty.jpg" alt=""/></div>

            <div className={classes.Cont}><img src="https://www.planetware.com/photos-large/I/italy-colosseum-day.jpg" alt=""/></div>

            <div className={classes.Cont}><img src="https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=2000&h=1333&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2014%2F11%2F201411-w-worlds-most-visited-tourist-attractions-sydney-opera-house-2000.jpg" alt=""/></div>

            <div className={classes.Cont}><img src="https://themysteriousworld.com/wp-content/uploads/2014/06/LONDONeye.jpg" alt=""/></div>

            <div className={classes.Cont}><img src="https://www.touropia.com/gfx/b/2011/03/palace_of_westminster1.jpg" alt=""/></div>

            <div className={classes.Cont}><img src="https://lh3.googleusercontent.com/proxy/hP3v5lHdszNhPkOvrEKTfDCRqNgAq948L4aVXWh-H-KcStNKDoZ5dJZpwX2GMMsPQqgtfXV6Ztbb_IFhcL5spJ3zBloO0rThCH0tJqz4uzKEpEfPrW9baCBOcF48nSw3ZJgSNsY4ynVAFrcMYXrhKxvQnA" alt=""/></div>
            </div>
        </div>
    );
}
 
export default Home;