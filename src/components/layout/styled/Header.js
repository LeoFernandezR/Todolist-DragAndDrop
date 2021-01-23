import styled from 'styled-components'

export const Container = styled.header`
	max-width: 85%;
	margin: 20px auto;
	text-shadow: -2px 1px 6px rgba(0, 0, 0, 0.4);

	@media (min-width: 768px) {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	div {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	h1 {
		font-size: 50px;
		font-weight: 600;
		margin: 0;
		color: #ffffff;
		flex: 0 0 calc(65% - 10px);
	}
	button {
		cursor: pointer;
		display: block;
		color: #ffffff;
		width: 3.25rem;
		height: 3.25rem;
		position: relative;
		margin-left: auto;
		background-color: transparent;
		outline: none;
		border: none;
		z-index: 1000;

		@media (min-width: 768px) {
			display: none;
			opacity: 1;
		}
	}
	button span {
		background-color: currentColor;
		min-height: 3px;
		border-radius: 25%;
		display: block;
		left: calc(50% - 15px);
		position: absolute;
		width: 30px;

		&:nth-child(1) {
			top: calc(50% - 9px);
		}
		&:nth-child(2) {
			top: calc(50% - 1px);
		}
		&:nth-child(3) {
			top: calc(50% + 7px);
		}
	}
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: column;

		&.hidden {
			display: none;
		}
		@media (min-width: 768px) {
			flex-direction: row;
			justify-content: space-between;
			background-color: unset;
			flex: 0 0 calc(20% - 10px);

			&.hidden {
				display: flex;
			}
		}
	}

	a {
		color: #ffffff;
		font-size: 25px;
		font-weight: 500;
		transition: color 0.3s ease-out;

		&:hover {
			color: #e1e1e1;
		}

		@media (min-width: 768px) {
			margin-right: 12px;
			&:last-child {
				margin-right: 0;
			}
		}
	}
`
