import { useEffect, useState } from 'react';
import axios from 'axios';
import NoteForm from '../components/NoteForm';
import PostMeetingForm from '../components/PostMeetingOb';
import PresentNotesForm from '../components/PresentNotes';
import AquizForm from '../components/AquizForm';
import useAuth from '../hooks/auth';

const Notes = function () {
    const [notes, setNotes] = useState([]);
    const [aquizs, setAquiz] = useState([]);
    const [presentNotes, setPresentNotes] = useState([]);
    const [postMeetObs, setPostMeetObs] = useState([]);
    // so we can refresh the Page *after* we get a response back from the server on new note.
    const [refresh, toggleRefresh] = useState(0);
    const refreshParent = () => {
        toggleRefresh(refresh + 1);
    };


    useEffect(() => {
        fetchNotes();
        fetchAquiz();
        fetchPresentNotes();
        fetchPostMeetObs();
    }, [refresh]);


    async function fetchNotes() {
        const { data } = await axios.get('/api/notes?include=User');
        setNotes(data);

    }

    async function fetchAquiz() {
        const { data } = await axios.get('/api/aquiz?include=User');
        setAquiz(data);
    }

    async function fetchPresentNotes() {
        const { data } = await axios.get('/api/presentnotes?include=User');
        setPresentNotes(data);

    }

    async function fetchPostMeetObs() {
        const { data } = await axios.get('/api/postmeet?include=User');
        setPostMeetObs(data);

    }

    const deleteNote = async (id) => {
        await axios.delete('/api/notes/' + id);
        refreshParent();
    };

    const deleteAquiz = async (id) => {
        await axios.delete('/api/aquiz/' + id);
        refreshParent();
    };

    const deletePresentNotes = async (id) => {
        await axios.delete('/api/presentnotes/' + id);
        refreshParent();
    };

    const deletePostMeetObs = async (id) => {
        await axios.delete('/api/postmeet/' + id);
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
            <div>
                <section id='Bbanner' className='row1 align-items-center '>
                    <div style={style} className='col align-self-end'>
                        <h1 id='BbannerText'>Welcome Back, {getProfile().first}</h1>
                    </div>
                </section>
                <section className='row align-items-start'>
                    <div className='card col-6 align-self-start' id='notes' >
                        <h2 id='h2'>Meeting Objective List</h2>
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
                    <div className='card col align-self-start' id='presentation' >
                        <h2 id='h2'>Pre-Meeting Ideas</h2>
                        <ol>
                            {presentNotes.map(presentNote => {
                                return (
                                    <li key={presentNote.id}>
                                        <strong>{presentNote.title}: </strong>
                                        {presentNote.body} <button onClick={() => deletePresentNotes(presentNote.id)} className='btn-danger' type='submit'>X</button>
                                    </li>
                                );
                            })}
                        </ol>
                        <PresentNotesForm didSubmit={refreshParent} />
                    </div>
                </section>
                <section className='row align-items-start'>
                    <div className='card col-6 align-self-start' id='aquiz' >
                        <h2 id='h2'>Business Contacts</h2>
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
                    <div className='card col align-self-start' id='postMeet' >
                        <h2 id='h2'>Post-Meeting Notes</h2>
                        <ol>
                            {postMeetObs.map(postMeetOb => {
                                return (
                                    <li key={postMeetOb.id}>
                                        <strong>{postMeetOb.title}: </strong>
                                        {postMeetOb.body} <button onClick={() => deletePostMeetObs(postMeetOb.id)} className='btn-danger' type='submit'>X</button>
                                    </li>
                                );
                            })}
                        </ol>
                        <PostMeetingForm didSubmit={refreshParent} />
                    </div>


                </section>
            </div>
        </main>

    );
};

export default Notes;
