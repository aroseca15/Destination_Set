import { useState, useRef } from 'react';
import data from '../data';

export const ConvertCurr = () => {
    const userInputRef = useRef();
    const convertedPostRef = useRef();
    const [currency, setCurrency] = useState('USD');
    // console.log(currency);
    return (
        <main id='CCC'>
            {/*First row is an input where user puts in amount in us dollars. User then makes a selection of currency symbol from drop down and the value is past to next row in convertedPostRef.   */}
            <section className='row'>
                <div className="input-group mb-3">
                    <span id='homeButtons' className="input-group-text">$</span>
                    <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" ref={userInputRef}></input>
                    <select id='homeButtons' onChange={(event) => { setCurrency(event.currentTarget.value); }}>
                        <option value='BRL'>R$</option>
                        <option value='EUR'>€</option>
                        <option value='GBP'>£</option>
                        <option value='JPY'>¥</option>
                    </select>
                </div>
            </section >
            <section className='row'>
                <div className="input-group mb-3">
                    <span id='homeButtons' className="input-group-text">Converted</span>
                    <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" ref={convertedPostRef}></input>
                </div>
                {/* Calculation is doing in an onClick event. */}
                <button id='homeButtons' type="button" className="btn btn-secondary d-grid gap-2 col-6 mx-auto btn-outline-warning" onClick={() => {
                    const userInputVal = userInputRef.current.value;
                    const currencyType = data.currencies.find((entry) => { return entry.code === currency; });
                    const sellRate = currencyType.sellRate;
                    const converted = Number(userInputVal) / sellRate;
                    convertedPostRef.current.value = converted;
                }}>Calculate Now!</button>
            </section >
        </main >

    );
};


export default ConvertCurr;

// To Be use with npm currency converter package:
//let promise = '';
//promise = new Promise((resolve, reject) => {
//resolve('resolve');
//reject('reject');

//     });

// promise.then((msg) => {
//console.log('then = ' + msg);
//     });

//     promise.catch((msg) => {
//console.log('then = ' + msg);
//     });

// convertCurrency(1, 'USD', 'BRL').then(response => response);
// convertCurrency(1, 'EUR', 'BRL', '2015-08-29').then(response => response);