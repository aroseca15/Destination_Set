import { useState } from 'react';
import axios from 'axios';

const PresentNotesForm = (props) => {
    const { didSubmit } = props;
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        submitPresentNote();
    };
    const submitPresentNote = async () => {
        await axios.post('/api/presentnotes', { title: title, body: body });
        setBody('');
        setTitle('');
        didSubmit();
    };

    
    return (
        <div className='container'>
            <form className= 'form-group' onSubmit={handleSubmit}>
                <label htmlFor="title"></label>
                <input className='form-control'
                    name='title'
                    placeholder='Meeting Name'
                    type='text'
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />
                <br />
                <label htmlFor="body"></label>
                <textarea className='form-control' 
                    name='body'
                    placeholder='Presentation Ideas'
                    value={body}
                    onChange={event => setBody(event.target.value)}
                />
                <br />
                <button className= 'btn btn-info' type='submit'>Save</button>
            </form>
        </div>
    );
};

export default PresentNotesForm;