import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';

const AskQuestion = ({ addPost }) => {
    const [formData, setFormData] = useState({
        title: '',
        text: '',
        tags: ''
    });

    const { title, text, tags } = formData;
    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    return (
        <div className="QuestionsF">
            <div className="containerQF">
                <h1>New Post</h1>
                <form
                    className="newPostForm"
                    onSubmit={e => {
                        e.preventDefault();
                        addPost({ formData });
                        setFormData({
                            title: '',
                            text: '',
                            tags: ''
                        });
                    }}
                >
                    <div className="postTitle">
                        <label>Title:</label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Subject"
                            value={title}
                            onChange={e => onChange(e)}
                        />
                    </div>
                    <div className="postTitle">
                        <label>Tags:</label>
                        <input
                            type="text"
                            name="tags"
                            placeholder="e.g. etf data-structures 2018"
                            value={tags}
                            onChange={e => onChange(e)}
                        />
                    </div>
                    <div className="postQuestion">
                        <label>Question:</label>
                        <textarea
                            required
                            name="text"
                            value={text}
                            onChange={e => onChange(e)}
                        ></textarea>
                    </div>
                    <input type="Submit" name="postSubmit" />
                </form>
            </div>
        </div>
    );
};

AskQuestion.propTypes = {
    addPost: PropTypes.func.isRequired
};

export default connect(null, { addPost })(AskQuestion);
