import React from "react";
import api from '../utils/Api';
import Card from '../components/Card';

import CurrentUserContext from '../contexts/CurrentUserContext';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick, handleCardLike }){

	const [cards, setCards] = React.useState([]);
	const currentUser = React.useContext(CurrentUserContext);
	// console.log('currentUser =', currentUser);

	// const [userName, setUserName] = React.useState('');
	// const [userDescription, setUserDescription] = React.useState('');
	// const [userAvatar, setUserAvatar] = React.useState('#');

	// React.useEffect( () => {
	// 	api.getUserInfo()
	// 		.then( res => {

	// 			setUserName(res.name);
	// 			setUserDescription(res.about);
	// 			setUserAvatar(res.avatar);

	// 		})
	// 		.catch( err => console.error(err) );
	// }, [])

	function handleCardLike(card) {
		// Снова проверяем, есть ли уже лайк на этой карточке
		const isLiked = card.likes.some(i => i._id === currentUser._id);
		console.log(`isLiked = ${isLiked}`);

		// Отправляем запрос в API и получаем обновлённые данные карточки
		api.toggleLike(card._id, isLiked)
			.then((newCard) => {
				setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
			})
			.catch( err => console.error(err) );
	}

	React.useEffect( () => {
		api.getCards()
			.then( res => {

				setCards(res);

			})
			.catch( err => console.error(err) );
	}, [])

	if ( !currentUser ) {
		// При обновлении данные не успевают загружаться и вываливаются ошибки оО
		return;
	}

	return (

		<main className="content">
			<section className="profile">
				<div className="profile__figure">
					<img className="profile__avatar" src={currentUser.avatar} alt="Фотография" />
					<button onClick={onEditAvatar} className="profile__button profile__button_type_avatar" type="button" name="button"
						aria-label="Обновить фотографию"></button>
				</div>

				<div className="profile__description">
					<div className="profile__info">
						<h1 className="profile__header">{currentUser.name}</h1>
						<button onClick={onEditProfile} className="profile__button profile__button_type_edit" type="button" name="button" aria-label="Редактировать"></button>
					</div>
					<p className="profile__subtitle">{currentUser.about}</p>
				</div>

				<button onClick={onAddPlace} className="profile__button profile__button_type_add" type="button" name="button" aria-label="Добавить"></button>
			</section>

			<section id="cards" className="cards" aria-label="Посещенные места">
				{
					cards.map((card) => (
						<Card
							key={card._id}
							card={card}
							onCardClick={onCardClick}
							onCardLike={handleCardLike}
						/>
					))
				}
			</section>

		</main>
	)
}

export default Main;