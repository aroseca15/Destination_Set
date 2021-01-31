
export const Convert$ = () => {
    return (
        <main id='CCC'>
            <section className='row'>
                <div className='col-md currencyInput'>
                    <h3 className='flag'>Currency Input</h3>
                    {/* Input goes here? */}
                    <div className='inputGroup'>
                        <span>$</span>
                        <input/>
                        <span>AUD</span>
                    </div>

                </div>
                <div className="col-md">
                    <h3>United States Dollars</h3>
                    {
                        //Currency B input
                    }
                    <div>
                        <span>$</span>
                        <input/>
                        <span>USD</span>
                    </div>

                </div>

                <div className="row">
                    <div className="col-md-12">
                        {
                            //Update to currently selected currency
                        }
                        <p>
                            Exchange Rate $ 1 AUD = $ 0.7041 USD
                        </p>
                    </div>
                </div>

            </section >
        </main >

    );
};

export default Convert$;
