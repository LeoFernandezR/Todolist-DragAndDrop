import styled from 'styled-components'

export const DeleteButton = styled.button`
	opacity: 0;
	color: grey;
	background-color: white;
	cursor: pointer;
	border: none;
	padding: 4px 5px;
	transition: opacity .5s ease-in-out;
	font-size: 18px;
	font-weight: 500;
`
export const Todo = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 18px;
	list-style: none;
	margin-bottom: 8px;
	padding: 8px;
	border-radius: 5px;
	background-color: white;
	-webkit-box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.5);
	-moz-box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.5);
	box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.5);

	&:last-child {
		margin: 0;
	}

	&:hover {
		${DeleteButton} {
			opacity: 1;
		}
	}
`
