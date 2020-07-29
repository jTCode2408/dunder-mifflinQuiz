import React from 'react';

const Answers = props => {
const answerOptions=(props)=>{
let optionsArr=[
		"Michael",
		"Creed",
		"Kevin",
		"Pam",
		"Jim",
		"Stanley",
		"Ryan",
		"Kelly",
		"Dwight",
		"Andy",
		"Angela",
		"Karen",
		"Oscar",
		"Phyllis",
		"Toby",
		"Erin",
		"Gabe",
		"Darryl",
		"Robert California",
		"Jan",
]

let answerGroups= {
	1:["Michael","Jim","Kevin","Pam"],
	2:["Creed","Stanley","Ryan","Kelly"],
	3:[	"Dwight","Andy","Angela","Karen"],
	4:["Oscar","Phyllis","Toby","Erin"],
	5:[	"Gabe","Darryl","Robert California","Jan"]
}

return (
	<div>
		{answerGroups}
	</div>
)

}

	return (
		<div className="answers-cont">
			
			<h1 className="answers"> Who Said This?</h1>
<div className = "selections-list">
Answers: {answerOptions()}

</div>

		</div>
	);
};

export default Answers;