import "./AboutUs.css"
function AboutUs() {
    return (
        <div className="acerca p-5 m-5">
            <div className="position-absolute top-25 start-50">
                <h2 className="translate-middle fw-bold text-light">About Us</h2>
            </div>

            <div>
                <img className="mt-5" src="/imgs/ogden-store-5.jpg" alt="" />
            </div>

            <div className="mt-3"> 
                <h3>Fully Loaded</h3>
                <div style={{color:"white"}}>
                    <span >One of the first online firearms sellers and a major force in the market, Impact Guns was founded in 1997 by 3 avid shooters.  We saw (and still see) the need to provide access to the best and latest gear at the best prices to anyone anywhere with access to a computer or phone.</span>
                <br /> <br />
                <span>Our focus on firearms and shooting related equipment allows us to buy in large quantities, and pass the savings to you. Everyone who works at Impact, from the owners to the shipping crew, are shooters first. We absolutely love what we do!</span>
                <br /> <br />
                <span>A dedicated crew reviews and adds new items when found to perform as advertised. If feedback indicates a product is not up to expectations, we pull it.</span>
                <br /> <br />
                <span>We pioneered the `Lifetime Guarantee` for any new gun we sell, and continue to stand behind every firearm- providing an extra level of confidence, and another reason to consider purchasing with us.</span>
                <br /> <br />
                <span>Impact Guns also matches prices- if you find the item you want elsewhere at a lower price, just let us know, we will try our best to `meet it or beat it`.</span>
                </div>
            </div>

            <div className="pt-5">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/CUhocL_Bnoc" title="Impact Guns Store Tour - Ogden, Utah" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

        </div>
    )
}

export default AboutUs