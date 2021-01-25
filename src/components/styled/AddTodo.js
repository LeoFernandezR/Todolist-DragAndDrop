import styled from 'styled-components'

export const AddTodoForm = styled.form`
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 18px;
	margin-bottom: 10px;
	padding: 9px;
`
export const SubmitButton = styled.button`
	border: none;
	outline: none;
	cursor: pointer;
	border-radius: 10px;
	background-color: #71d6ea;
	text-shadow: -2px 1px 6px rgba(0, 0, 0, 0.4);
	color: #ffffff;
	font-weight: 600;
	font-size: 18px;
	flex: 0 0 calc(30% - 10px);
	padding: 7px 0;
	-webkit-box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.5);
	-moz-box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.5);
	box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.5);
	transition: background-color 0.3s ease-out;

	&:focus {
		background-color: #e1e1e1;
	}

	@media (min-width: 768px) {
		flex: 0 0 calc(12% - 10px);
	}
`
export const TodoInput = styled.input.attrs((props) => ({ type: 'text' }))`
	border: none;
	border-radius: 10px;
	flex: 0 0 70%;
	padding: 8px 0;
	-webkit-box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.5);
	-moz-box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.5);
	box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.5);

	@media (min-width: 768px){ 
		flex: 0 0 88%;
	} 
`
