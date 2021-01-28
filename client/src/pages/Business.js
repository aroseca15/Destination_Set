import clothes from '../assets/images/Wardrobe_Search.jpg';
import techU from '../assets/images/tech_upgrade.jpg';
import searchI from '../assets/images/search_icon.jpg';
import Header from '../components/Header';
import useAuth from '../hooks/auth';
// import { Link } from 'react-router-dom';

function Business(props) {
    console.log(props);
    // if (Destination.params.id === 1) {
    //     console.log('Paris');
    // }
    // const history = useHistory();
    // const location = useLocation();
    // onClick={() => toggleRedirect(true)}
    const { isLoggedIn } = useAuth();
    return (

        < div className='App container' >
            {/* width={1000} height={50}  */}
            {/* Try Using container-fluid for banner */}
            <main className='container'>
                {isLoggedIn() ?
                    <>
                        <Header></Header>
                        <section className='row align-items-center'>
                            <div className='col align-self-start'>
                                <figure className="overlay">
                                    <h1 id='h1'>Need a Tech Upgrate or Repair?</h1>
                                    <img id='tech' src={techU} class="img-fluid" alt="Destination Set"></img>

                                    <div id='searchI' className='iconCenter'>
                                        <button type="button" class="btn btn-info"><img id='tech' src={searchI} width={50} class="img-fluid" alt="Destination Set"></img></button>
                                    </div>
                                </figure>
                            </div>
                        </section><br /><br />

                        <section className='row align-items-center'>
                            <div className='col align-self-start'>
                                <figure className="overlay">
                                    <h1 id='h1'>Need a Quick Wardrobe Solution?</h1>
                                    <img id='clothes' src={clothes} className="img-fluid" alt="Destination Set"></img><br />
                                    <div className='iconCenter' id='searchI'>
                                        <button type="button" class="btn btn-info"><img id='tech' src={searchI} width={50} className="img-fluid" alt="Destination Set"></img></button>
                                    </div>
                                </figure>
                            </div>
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


        </div >

    );
}


export default Business;
// {/* <img id='clothes' src={searchI} width={50} class="img-fluid" alt="Destination Set"></img> */ }
{/* <figure class="overlay">
          <a href="/employee"><img id="employee" class="icons shadow"
              src="/icons/employee-working-icon-vector-20994542.jpg" alt="employee management" height="300px"
              width="100%">
            <div class="textCenter">
              <div class="text">Manage Employees</div>
            </div>
          </a>
        </figure> */}