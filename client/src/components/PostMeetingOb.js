import { useState } from 'react';
import axios from 'axios';

const PostMeetingForm = (props) => {
    const { didSubmit } = props;
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        submitPostMeet();
    };
    
    const submitPostMeet = async () => {
        await axios.post('/api/postmeet', { title: title, body: body });
        setBody('');
        setTitle('');
        didSubmit();
    };

    return (
        <div className='container'>
            {/* <h2>Note Form</h2> */}
            <form className='form-group' onSubmit={handleSubmit}>
                <label htmlFor="title"></label>
                <input className='form-control'
                    name='title'
                    placeholder='Name '
                    type='text'
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />
                <br />
                <label htmlFor="body"></label>
                <textarea className='form-control'
                    name='body'
                    placeholder='Contact Information'
                    value={body}
                    onChange={event => setBody(event.target.value)}
                />
                <br />
                <button className= 'btn btn-info' type='submit'>Save</button>
            </form>
        </div>
    );
};

export default PostMeetingForm;