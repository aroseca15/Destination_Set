import clothes from '../assets/images/Wardrobe_Search.jpg';
import techU from '../assets/images/tech_upgrade.jpg';
import Header from '../components/Header';
import useAuth from '../hooks/auth';
// import { Link } from 'react-router-dom';

function Business() {
    // if (Destination.params.id === 1) {
    //     console.log('Paris');
    // }
    // const history = useHistory();
    // const location = useLocation();
    // onClick={() => toggleRedirect(true)}
    const { isLoggedIn } = useAuth();
    return (

        <div className='App'>
            {/* width={1000} height={50}  */}
            {/* Try Using container-fluid for banner */}
            <main className='container'>
                {isLoggedIn() ?
                    <>
                        <Header></Header>
                        <h1>Need a Tech Upgrate or Repair?</h1>
                        <img id='clothes' src={clothes} class="img-fluid" alt="Destination Set"></img><br/>
                        <h1>Need a Tech Upgrate or Repair?</h1>
                        <img id='tech' src={techU} class="img-fluid" alt="Destination Set"></img>
                        <section className='row'>
                            {/* <button>Click Here!</button> */}
                        </section>

                        <section className='row'>

                        </section>

                        <section className='row'>

                        </section>
                    </>
                    :
                    <>
                        <h1>Not Logged In</h1>
                        {/* <li><button><Link to="/signup">Signup</Link></button></li>
                        <li><button><Link to="/login">Login</Link></button></li> */}
                    </>
                }
            </main>


        </div>

    );
}


export default Business;
