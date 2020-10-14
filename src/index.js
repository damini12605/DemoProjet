import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import { CommentDetail } from './CommentDetail';
import MyApprovalCard from './ApprovalCard'

const App = () => {
 return (
 <div className="ui container comments">
	<MyApprovalCard> <div><h4>Warning!</h4>
	 Are you sure you want to do this?</div> 
	</MyApprovalCard>
	<MyApprovalCard> 
	<CommentDetail 
	author="Prachi" 
	timeAgo="Today at 4:20PM" 
	content="Nice blog post"
	avatar={faker.image.avatar()}/>
	<p>Hello damini</p>
	</MyApprovalCard>
	<MyApprovalCard>
	<CommentDetail 
	author="Damini" 
	timeAgo="Today at 3:18AM" 
	content="I like the subject"
	avatar={faker.image.avatar()}/>
	</MyApprovalCard>
	<MyApprovalCard>
	<CommentDetail 
	author="Vasundhara" 
	timeAgo="Yesterday at 5:12AM" 
	content="I like the post"
	avatar={faker.image.avatar()}/>
	</MyApprovalCard>
	<MyApprovalCard>
	<CommentDetail 
	author="Aditya" 
	timeAgo="Today at 8:18AM" 
	content="I like the singing"
	avatar={faker.image.avatar()}/>
	</MyApprovalCard>
	<MyApprovalCard>
	<CommentDetail 
	author="YashVardhan" 
	timeAgo="Yesterday at 2:58PM" 
	content="I like the writing"
	avatar={faker.image.avatar()}/>
	</MyApprovalCard>	
</div>
 );
};


ReactDom.render(<App/>, document.querySelector('#root'));






