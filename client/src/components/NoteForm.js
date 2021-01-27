import { useState } from 'react';
import axios from 'axios';

const NoteForm = (props) => {
    const { didSubmit } = props;
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        submitNote();
    };
    const submitNote = async () => {
        await axios.post('/api/notes', { title: title, body: body });
        setBody('');
        setTitle('');
        didSubmit();
    };

    
    return (
        <div>
            {/* <h2>Note Form</h2> */}
            <form onSubmit={handleSubmit}>
                <label htmlFor="title"></label>
                <input
                    name='title'
                    placeholder='Title'
                    type='text'
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />
                <br />
                <br />
                <label htmlFor="body"></label>
                <textarea
                    name='body'
                    placeholder='Details'
                    value={body}
                    onChange={event => setBody(event.target.value)}
                />
                <br />
                <button className= 'btn btn-info' type='submit'>Save</button>
                {/* <button onClick={handleDelete} className= 'btn btn-danger' type='submit'>Delete</button> */}
            </form>
        </div>
    );
};

export default NoteForm;