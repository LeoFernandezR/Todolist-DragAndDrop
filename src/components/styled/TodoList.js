import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	padding: 8px;
	margin-bottom: 5px;
	background-color: white;
	border-radius: 10px;
	-webkit-box-shadow: -3px 6px 10px 0px rgba(0, 0, 0, 0.5);
	-moz-box-shadow: -3px 6px 10px 0px rgba(0, 0, 0, 0.5);
	box-shadow: -3px 6px 10px 0px rgba(0, 0, 0, 0.5);
	@media (min-width: 768px) {
		margin-bottom: 0;
	}
`
export const Title = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 5px;
	font-size: 22px;
`
export const Todos = styled.ul`
	border-radius: 5px;
	width: 80vw;
	flex-grow: 1;
	min-height: 100px;
	padding: 2px;
	transition: box-shadow 0.3s ease-in-out;
	${(props) => {
		if (props.isDragginOver) {
			return `-webkit-box-shadow:inset 1px 1px 5px 0px rgba(0,0,0,0.5);
							-moz-box-shadow:inset 1px 1px 5px 0px rgba(0,0,0,0.5);
							box-shadow:inset 1px 1px 5px 0px rgba(0,0,0,0.5);`
		}
	}};

	@media (min-width: 768px) {
		width: 25vw;
	}
`
