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
		border-radius: 10px;
		z-index: 1000;
		transition: all 0.3s ease-out;

		&:hover {
			background-color: rgba(0,0,0,0.2)
		}

		@media (min-width: 768px) {
			display: none;
		}
		&.transform span {
			&:nth-child(1) {
			transform:	translateY(8px) rotate(45deg) 
			}
			&:nth-child(2) {
				opacity: 0;
			}
			&:nth-child(3) {
				transform: translateY(-8px) rotate(-45deg);
			}
		}
	}
	button span {
		background-color: currentColor;
		min-height: 3px;
		display: block;
		left: calc(50% - 15px);
		position: absolute;
		width: 30px;
		transition: transform 0.3s ease-out;

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
		display: none;
		justify-content: space-between;
		align-items: center;
		flex-direction: column;
		background-color: white;
		border-radius: 10px;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
		margin-top: 10px;

		&.active {
			display: flex;
		}
		@media (min-width: 768px) {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			background-color: unset;
			flex: 0 0 calc(20% - 10px);
			box-shadow: none;

			&.active {
				display: flex;
			}
		}
	}

	a {
		color: #000000;
		text-shadow: none;
		font-weight: 600;
		font-size: 22px;
		transition: all 0.3s ease-out;
		width: 100%;
		text-align: center;

		&:hover {
			background-color: rgba(0,0,0,0.2);
			
		}

		&:first-child {
			border-radius: 10px 10px 0 0;
			padding: 15px 0 7.5px 0;

		}

		&:last-child {
			padding: 7.5px 0 15px 0;
			border-radius: 0 0 10px 10px;
		}

		@media (min-width: 768px) {
			text-shadow: inherit;
			color: #ffffff;
			font-size: 25px;
			font-weight: 500;
			padding: 0 12px 0 0 !important;
			&:last-child {
				padding-right: 0;
			}
			&:hover {
				color: #e1e1e1;
				background-color: transparent;
			}
		}
	}
`
