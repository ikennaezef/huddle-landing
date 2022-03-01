import {StyledCard} from './styles/Card.styled'

const Card = ({data}) => {
	return (
		<StyledCard reverse={ data.id % 2 === 0 ? true : false }>
			<div>
				<h2>{ data.title }</h2>
				<p> { data.body } </p>
			</div>
			<div>
				<img src={`./images/${data.image}`} alt={`${data.title} Illustration`}/>
			</div>
		</StyledCard>
	)
}

export default Card