
const Header = () => {
    return (
         < >
            <div style={{ paddingTop: "100px" }}>
                <div className="container px-3 py-5 matrix">
                    <div className="row featurette d-flex" style={{justifyContent:"centre", alignItems:"center"}}>
                        <div className="col-md-6  text-center">
                            <h1 className="display-4  lh-1 text-white">The artist who aims at perfection</h1>
                            <h1 className="display-4  lh-1 gR">In everything achieves it in nothing.</h1>
                            <br />
                            <p className="lead tW">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from</p>
                            <br/>
                            <button type="button" className="btn-grad">EXPLORE</button>
                        </div>
                        <div className="col-md-6">
                            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={require('./img/H1.png')} width={"500px"}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;

 