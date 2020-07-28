import React from 'react';

const Question = props => {
	return (
		<div className="question">
			
			<h1 className="content">{props.quote.content}</h1>


		</div>
	);
};

export default Question;