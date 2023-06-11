import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

/*
Теперь можно определить, должна ли в текущей карточке показываться иконка удаления. Для этого можно использовать следующий код:
1. Определяем, являемся ли мы владельцем текущей карточки
const isOwn = card.owner._id === currentUser._id;

2. Далее в разметке используем переменную для условного рендеринга
{isOwn && <button className='button_del' onClick={handleDeleteClick} />}
Похожим образом можем определить, поставили ли мы уже «лайк» этой карточке:

3. Определяем, есть ли у карточки лайк, поставленный текущим пользователем
const isLiked = card.likes.some(i => i._id === currentUser._id);

4. Создаём переменную, которую после зададим в `className` для кнопки лайка
const cardLikeButtonClassName = (
  `card__like-button ${isLiked && 'card__like-button_active'}`
);

https://images.unsplash.com/photo-1671600939684-b8d13dfa7e1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8SnBnNktpZGwtSGt8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=60

*/

function Card({ card, onCardClick, onCardLike, onCardDelete }){
	const currentUser = React.useContext(CurrentUserContext);
	const isOwn = card.owner._id === currentUser._id;
	const isLiked = card.likes.some(i => i._id === currentUser._id);

	function handleCardClick() {
		console.log(`handleCardClick =>>>`);
		onCardClick(card);
	}

	function handleCardLike() {
		console.log(`handleCardLike =>>>`);
		onCardLike(card);
	}

	function handleCardDelete() {
		onCardDelete(card);
	}

	return (

		<article className="card">
			<figure className="card__figure">
				<img onClick={handleCardClick} className="card__image image-cover" src={card.link} loading="lazy" alt={card.name} />
			</figure>
			<div className="card__info">
				<h2 className="card__title">{card.name}</h2>

				<div className="card__action">
					<button
						className={'card__button' + (isLiked ? ' card__button_active' : '') }
						onClick={handleCardLike}
						type="button"
						name="button"
						aria-label="Добавить в избранное"
					></button>
					<div className="card__counter">{card.likes.length}</div>
				</div>

			</div>
			{isOwn && (
				<button
					className="card__button-remove"
					onClick={handleCardDelete}
					type="button"
					name="button"
					aria-label="Удалить карточку"
				></button>
			)}


		</article>

	)
}

export default Card;