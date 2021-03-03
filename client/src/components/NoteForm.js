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
        <div className='container'>
            {/* <h2>Note Form</h2> */}
            <form className= 'form-group' onSubmit={handleSubmit}>
                <label htmlFor="title"></label>
                <input className='form-control'
                    name='title'
                    placeholder='Title'
                    type='text'
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />
                <label htmlFor="body"></label>
                <textarea className='form-control' 
                    name='body'
                    placeholder='Details'
                    value={body}
                    onChange={event => setBody(event.target.value)}
                />
                <br />
                <button className= 'btn btn-info' type='submit'>Save</button>
            </form>
        </div>
    );
};

export default NoteForm;