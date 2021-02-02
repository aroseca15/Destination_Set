// const convertCurrency = require('nodejs-currency-converter');
// import ChooseCurrency from './ChooseCurrency';

// HERE:
// import data from '../data';

// export const Convert$ = () => {
//     let promise = '';
//     promise = new Promise((resolve, reject) => {
//         resolve('resolve');
//         reject('reject');

//     });

//     promise.then((msg) => {
//         console.log('then = ' + msg);
//     });

//     promise.catch((msg) => {
//         console.log('then = ' + msg);
//     });

// convertCurrency(1, 'USD', 'BRL').then(response => response);
// convertCurrency(1, 'EUR', 'BRL', '2015-08-29').then(response => response);
// HERE:
//     this.state = {
//         currencies: data.currencies,
//         currencyA: data.currencies[0],
//         currencyB: data.currencies[1],
//         sellA: data.currencies[0].sellRate,
//         sellB: data.currencies[1].sellRate
//     };

//     const { currencies } = this.state;

//     onChooseCurrency(){
//         console.log('You Have Selected')
//     }

//     return (
//         <main id='CCC'>
//             <ChooseCurrency currencies={currencies} onChooseCurrency={this.onChooseCurrency} />

//             <section className='row'>
//                 <div className="input-group mb-3">
//                     <span className="input-group-text">$</span>
//                     <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)"></input>
//                 </div>

//                 <div className="input-group mb-3">
//                     <span className="input-group-text">$</span>
//                     <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)"></input>
//                 </div>
//                 <button type="button" className="btn btn-secondary d-grid gap-2 col-6 mx-auto btn-outline-warning">Calculate Now!</button>
//             </section >

//         </main >

//     );
// };

// export default Convert$;
