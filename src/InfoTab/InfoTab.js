import React, { useState, useEffect } from 'react';

const InfoTab = () => {
    const [route, setRoute] = useState('L1');


    return (
        <>
            <div style={{ paddingTop: "50px", paddingBottom: "50px", alignItems: "center", margin: "30px" }}>
                <div className="container px-4  block">
                    <nav className="navbar" style={{ paddingTop: "10px" }}>
                        <header class="d-flex flex-wrap justify-content-space-between py-3 mb-4" style={{ width: "100%" }}>
                            <a class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                                <span class="fs-4 text-white" style={{ paddingLeft: "20px", marginTop: "10px" }}>Something something</span>
                            </a>

                            <ul class="nav nav-pills" style={{ paddingLeft: "10px" }} >
                                <button type="button" onClick={() => setRoute("L1")} class="btn btn-outline-dark text-white btnH" data-mdb-ripple-color="dark" style={{ marginRight: "20px", marginTop: "20px", padding: "10px 30px" }} value={"L1"} >L1-Dark</button>
                                <button type="button" onClick={() => setRoute("L2")} class="btn btn-outline-dark text-white btnH" data-mdb-ripple-color="dark" style={{ marginRight: "20px", marginTop: "20px", padding: "10px 30px" }} value={"L2"} >L2-Dark</button>
                                <button type="button" onClick={() => setRoute("L3")} class="btn btn-outline-dark text-white btnH" data-mdb-ripple-color="dark" style={{ marginRight: "20px", marginTop: "20px", padding: "10px 30px" }} value={"L3"} >L3-Dark</button>
                                <button type="button" onClick={() => setRoute("L4")} class="btn btn-outline-dark text-white btnH" data-mdb-ripple-color="dark" style={{ marginRight: "20px", marginTop: "20px", padding: "10px 30px" }} value={"L4"} >L4-Dark</button>
                            </ul>
                        </header>
                    </nav>
                    <div className="row " style={{ justifyContent: "centre", alignItems: "center" }}>
                        <div className="col-md-6  text-center" style={{ padding: "20px" }}>
                            {route === "L1"
                                ?
                                <>
                                    <h1 className='lh-1 text-white'>What is Lorem Ipsum?</h1>
                                    <br />
                                    <p className='lead' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                </>
                                : (
                                    route === "L2"
                                        ?
                                        <>
                                            <h1 style={{ color: 'red' }}>Why do we use it?</h1>
                                            <br />
                                            <p className='lead' >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                        </>
                                        : (
                                            route === "L3"
                                                ?
                                                <>
                                                    <h1 style={{ color: 'blue' }}>Where does it come from?</h1>
                                                    <br />
                                                    <p className='lead' >There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                                                </>
                                                :
                                                <>
                                                    <h1 style={{ color: 'yellow' }}>Where can I get some?</h1>
                                                    <br />
                                                    <p className='lead' >Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC</p>
                                                </>
                                        )

                                )

                            }
                        </div>
                        <div className="col-md-6">
                            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={require(`./img/${route}.png`)} style={{ padding: "20px" }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default InfoTab;