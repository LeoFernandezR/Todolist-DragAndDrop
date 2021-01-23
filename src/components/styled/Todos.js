import styled from 'styled-components'

export const Container = styled.div`
	max-width: 85%;
	margin: 0 auto;
`
export const Columns = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	@media (min-width: 768px) {
		flex-direction: row;
		justify-content: space-space-between;
		align-items: unset;
		padding: 8px;
	}
`
