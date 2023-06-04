import React from "react";
import api from '../utils/Api';

function Main(props){

	const [userName, setUserName] = React.useState('');
	const [userDescription, setUserDescription] = React.useState('');
	const [userAvatar, setUserAvatar] = React.useState('#');

	React.useEffect( () => {
		api.getUserInfo()
			.then( res => {
				// console.log(res);

				setUserName(res.name);
				setUserDescription(res.about);
				setUserAvatar(res.avatar);
			})
			.catch( err => console.error(err) );
	})

	return (
		<main className="content">
			<section className="profile">
				<div className="profile__figure">
					<img className="profile__avatar" src={userAvatar} alt="Фотография" />
					<button onClick={props.onEditAvatar} className="profile__button profile__button_type_avatar" type="button" name="button"
						aria-label="Обновить фотографию"></button>
				</div>

				<div className="profile__description">
					<div className="profile__info">
						<h1 className="profile__header">{userName}</h1>
						<button onClick={props.onEditProfile} className="profile__button profile__button_type_edit" type="button" name="button" aria-label="Редактировать"></button>
					</div>
					<p className="profile__subtitle">{userDescription}</p>
				</div>

				<button onClick={props.onAddPlace} className="profile__button profile__button_type_add" type="button" name="button" aria-label="Добавить"></button>
			</section>

			<section id="cards" className="cards" aria-label="Посещенные места"></section>


			<template id="card">
				<article className="card">
					<figure className="card__figure">
						<img className="card__image image-cover" src="#" loading="lazy" alt="" />
					</figure>
					<div className="card__info">
						<h2 className="card__title"></h2>

						<div className="card__action">
							<button className="card__button" type="button" name="button" aria-label="Добавить в избранное"></button>
							<div className="card__counter">0</div>
						</div>

					</div>
					<button className="card__button-remove" type="button" name="button" aria-label="Удалить карточку"></button>

				</article>
			</template>

		</main>
	)
}

export default Main;