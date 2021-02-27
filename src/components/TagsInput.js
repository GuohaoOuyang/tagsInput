import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import './TagsInput.css';

export const TagsInput= props => {
    const { addTag, tags } = useContext(GlobalContext);
	const addTags = (e) => {
        e.preventDefault();
		if (e.key === "Enter" && e.target.value !== "") {
            // add tag object to global array tags 
            const tag = e.target.value;
            const id = props.id;
            const newTag = {
                id,
                tag
            }
            addTag(newTag);
            e.target.value = ""; 
        }
	};
    return (
        <>
        {/* list to display tags */}
        <div>
            <ul className="tags">
                {tags.filter(tag => tag.id === props.id).map((tag) => (
                    <li key={`${tag.id}_${tag.tag}`} className="tag"><span className='tagName'>{tag.tag}</span></li>
                    ))}
            </ul>
        </div>
        {/* text input field to add tags */}
        <div>
            <label htmlFor="tags"></label>
            <input 
                type="text" 
                className="tagInput"
                onKeyUp={(e) => addTags(e)}
                placeholder="Add a tag" />
        </div>
        </>
    )
}




