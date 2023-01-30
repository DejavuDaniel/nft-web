
const Body1 = () => {
    return (
        < >
            <div style={{ paddingTop: "50px", paddingBottom: "50px" }}>
                <div className="container px- py-5">
                    <div className="row featurette d-flex" style={{ justifyContent: "centre", alignItems: "center" }}>
                        <div className="col-md-7">
                            <h5 className='tR'>Something</h5>
                            <br/>
                            <h1 className='text-white' >Something something</h1>
                            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={require('./img/Z5.png')} width={"600px"} />
                        </div>
                        <div className="col-md-4  text-center">
                            <div class="container">
                                <input type="checkbox" id="card-1"/>
                                <label className="card-container" htmlFor="card-1">
                                    <div className="card-flip">
                                        <div className="card front card-style">
                                            <img src={require("./img/Z1.png")} className="card-img-top img-fluid" style={{ padding: "50px" }} />
                                        </div>

                                        <div className="card back card-style">
                                            <div className="card-block">
                                            </div>
                                        </div>
                                    </div>
                                </label>

                                <input type="checkbox" id="card-2" />
                                <label className="card-container" htmlFor='card-2'>
                                    <div className="card-flip">
                                        <div className="card front card-style">
                                            <img src={require("./img/Z6.png")} width={"100px"} className="card-img-top img-fluid" style={{ padding: "50px" }} />
                                        </div>

                                        <div className="card back card-style">
                                            <div className="card-header">
                                            </div>
                                            <div className="card-block">
                                            </div>
                                        </div>
                                    </div>
                                </label>

                                <input type="checkbox" id="card-3" />
                                <label className="card-container" htmlFor='card-3'>
                                    <div className="card-flip">
                                        <div className="card front card-style">
                                            <img src={require("./img/Z4.png")} className="card-img-top img-fluid" style={{ padding: "50px" }} />
                                        </div>

                                        <div className="card back text-center card-style">
                                            <div className="card-header">
                                            </div>
                                            <div className="card-block">
                                            </div>
                                            <div className="card-footer text-muted">
                                            </div>
                                        </div>
                                    </div>
                                </label>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Body1;