function Main(){
	return (
		<main className="content">
			<section className="profile">
				<div className="profile__figure">
					<img className="profile__avatar" src="#" alt="Фотография" />
					<button className="profile__button profile__button_type_avatar" type="button" name="button"
						aria-label="Обновить фотографию"></button>
				</div>

				<div className="profile__description">
					<div className="profile__info">
						<h1 className="profile__header"></h1>
						<button className="profile__button profile__button_type_edit" type="button" name="button" aria-label="Редактировать"></button>
					</div>
					<p className="profile__subtitle"></p>
				</div>

				<button className="profile__button profile__button_type_add" type="button" name="button" aria-label="Добавить"></button>
			</section>

			<section id="cards" className="cards" aria-label="Посещенные места"></section>

			<section className="popup" id="popup-profile">

				<div className="popup__inside">
					<div className="popup__container">
						<h2 className="popup__title">Редактировать профиль</h2>

						<form action="#" name="profile" className="popup__form" novalidate>
							<input
								required
								id="profile-name-input"
								className="popup__input popup__input_type_name"
								type="text"
								name="name"
								placeholder="ФИО"
								minlength="2"
								maxlength="40"
								autocomplete="off"
							/>
							<span className="popup__error" id="profile-name-input-error"></span>

							<input
								required
								id="profile-about-input"
								className="popup__input popup__input_type_status"
								type="text"
								name="about"
								placeholder="Вид деятельности"
								minlength="2"
								maxlength="200"
								autocomplete="off"
							/>
							<span className="popup__error" id="profile-about-input-error"></span>

							<button className="popup__button" type="submit">Сохранить</button>
						</form>
					</div>
					<button className="popup__close" type="button" aria-label="Закрыть"></button>

				</div>

			</section>

			<section className="popup popup_dark_overlay" id="popup-image" aria-label="Попап с картинкой">

				<div className="popup__inside popup__inside_contains_image">

					<figure className="popup-figure">
						<img className="popup-figure__img image-contain" src="#" alt="Изображение" />
						<figcaption className="popup-figure__figcaption"></figcaption>
					</figure>
					<button className="popup__close" type="button" aria-label="Закрыть"></button>

				</div>

			</section>


			<section className="popup" id="popup-newcard">

				<div className="popup__inside">
					<div className="popup__container">
						<h2 className="popup__title">Новое место</h2>

						<form action="#" name="card" className="popup__form" novalidate>

							<input
								required
								id="newcard-title-input"
								className="popup__input popup__input_type_title"
								type="text"
								name="name"
								placeholder="Название"
								minlength="2"
								maxlength="30"
								autocomplete="off"
							/>
							<span className="popup__error" id="newcard-title-input-error"></span>

							<input
								required
								id="newcard-url-input"
								className="popup__input popup__input_type_url"
								type="url"
								name="link"
								placeholder="Ссылка на картинку"
								autocomplete="off"
							/>
							<span className="popup__error" id="newcard-url-input-error"></span>

							<button className="popup__button" type="submit">Создать</button>
						</form>
					</div>
					<button className="popup__close" type="button" aria-label="Закрыть"></button>

				</div>

			</section>


			<section className="popup" id="popup-avatar">

				<div className="popup__inside popup__inside_width_sm">
					<div className="popup__container">
						<h2 className="popup__title">Обновить аватар</h2>

						<form action="#" name="avatar" className="popup__form" novalidate>

							<input
								required
								id="avatar-url-input"
								className="popup__input popup__input_type_url"
								type="url"
								name="avatar"
								placeholder="Ссылка на картинку"
								autocomplete="off"
							/>
							<span className="popup__error" id="avatar-url-input-error"></span>

							<button className="popup__button" type="submit">Сохранить</button>
						</form>
					</div>
					<button className="popup__close" type="button" aria-label="Закрыть"></button>

				</div>

			</section>

			<section className="popup" id="popup-question">

				<div className="popup__inside popup__inside_width_sm">
					<div className="popup__container">
						<h2 className="popup__title">Вы уверены?</h2>

						<form action="#" name="qustion" className="popup__form" novalidate>
							<button className="popup__button" type="submit">Да</button>
						</form>
					</div>
					<button className="popup__close" type="button" aria-label="Закрыть"></button>

				</div>

			</section>

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