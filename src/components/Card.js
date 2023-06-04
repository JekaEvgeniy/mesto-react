function Card(props){

	function handleCardClick() {
		props.onCardClick(props.card);
	}

	return (

		<article className="card">
			<figure className="card__figure">
				<img onClick={handleCardClick} className="card__image image-cover" src={props.card.link} loading="lazy" alt={props.card.name} />
			</figure>
			<div className="card__info">
				<h2 className="card__title">{props.card.name}</h2>

				<div className="card__action">
					<button className="card__button" type="button" name="button" aria-label="Добавить в избранное"></button>
					<div className="card__counter">{props.card.likes.length}</div>
				</div>

			</div>
			<button className="card__button-remove" type="button" name="button" aria-label="Удалить карточку"></button>

		</article>

	)
}

export default Card;