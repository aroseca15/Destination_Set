import { useEffect, useState } from 'react';
import axios from 'axios';
import NoteForm from '../components/NoteForm';
import AquizForm from '../components/AquizForm';
import useAuth from '../hooks/auth';
import Calender from '../components/Calender';

// import Calender from '../components/Calender';

const Notes = function () {
    const [notes, setNotes] = useState([]);
    const [aquizs, setAquiz] = useState([]);
    // so we can refresh the Page *after* we get a response back from the server on our new note!
    const [refresh, toggleRefresh] = useState(0);
    const refreshParent = () => {
        toggleRefresh(refresh + 1);
    };

    // Notice deps has refresh in there - this way when it increments from someone submitting
    // it calls fetch notes again.
    useEffect(() => {
        fetchNotes();
        fetchAquiz();
    }, [refresh]);

    // Check out that include!
    async function fetchNotes() {
        const { data } = await axios.get('/api/notes?include=User');
        setNotes(data);

    }

    async function fetchAquiz() {
        const { data } = await axios.get('/api/aquiz?include=User');
        setAquiz(data);
    }


    const deleteNote = async (id) => {
        await axios.delete('/api/notes/' + id);
        refreshParent();
    };

    const deleteAquiz = async (id) => {
        await axios.delete('/api/aquiz/' + id);
        refreshParent();
    };
    const style = {
        padding: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const { getProfile } = useAuth();
    return (
        <main className='container-fluid'>
            {/* Yes, I know the className is row1. Only a small margin to the left was needed for each page. But on this page alone it  */}
            <div>
                <section id='Bbanner' className='row1 align-items-center '>
                    <div style={style} className='col align-self-end'>
                        <h1 id='BbannerText'>Welcome Back, {getProfile().first}</h1>
                    </div>
                </section>
                <section className='row align-items-start'>
                    <div className='card col align-self-start' id='notes'>
                        <h2>Important Meeting Notes</h2>
                        <ol>
                            {notes.map(note => {
                                return (
                                    <li key={note.id}>
                                        <strong>{note.title}: </strong>
                                        {note.body} <button onClick={() => deleteNote(note.id)} className='btn-danger' type='submit'>X</button>
                                    </li>
                                );
                            })}
                        </ol>
                        <NoteForm didSubmit={refreshParent} />
                    </div>
        
                    <div className="dateTime">
                        <h1 id='schedule' className="display-4">Today's News and Weather </h1>
                        <Calender></Calender>
                    </div>
                </section>
                <section className='row'>
                    <div className='card col align-self-start' id='aquiz'>
                        <h2>New Acquisition Opportunities</h2>
                        <ol>
                            {aquizs.map(aquiz => {
                                return (
                                    <li key={aquiz.id}>
                                        <strong>{aquiz.title}: </strong>
                                        {aquiz.body} <button onClick={() => deleteAquiz(aquiz.id)} className='btn-danger' type='submit'>X</button>
                                    </li>
                                );
                            })}
                        </ol>
                        <AquizForm didSubmit={refreshParent} />
                    </div>
                </section>
            </div>
        </main>

    );
};

export default Notes;