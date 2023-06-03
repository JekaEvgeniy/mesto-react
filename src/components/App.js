import React from "react";

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import PopupWithForm from './PopupWithForm';

function App() {
	document.body.classList.add('body');

	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);

	const handleEditAvatarClick = () => {
		console.log('>>> handleEditAvatarClick');

		document.querySelector('#popup-avatar').classList.add('popup_opened');
	}

	const handleEditProfileClick = () => {
		console.log('>>> handleEditProfileClick');

		// document.querySelector('#popup-profile').classList.add('popup_opened');
		setIsEditProfilePopupOpen(true);
	}

	const handleAddPlaceClick = () => {
		console.log('>>> handleAddPlaceClick');

		document.querySelector('#popup-newcard').classList.add('popup_opened');
	}


	function closeAllPopups(){
		setIsEditProfilePopupOpen(false);
	}

  return (
	<div className="page">

		<Header />

		<Main
			onEditProfile={handleEditProfileClick}
		/>

		<Footer />

		<PopupWithForm
			name="profile"
			title="Редактировать профиль"
			isOpen={isEditProfilePopupOpen}
			onClose={closeAllPopups}
			children={(<>
				<input
					required
					id="profile-name-input"
					className="popup__input popup__input_type_name"
					type="text"
					name="name"
					placeholder="ФИО"
					minLength="2"
					maxLength="40"
					autoComplete="off"
				/>
				<span className="popup__error" id="profile-name-input-error"></span>

				<input
					required
					id="profile-about-input"
					className="popup__input popup__input_type_status"
					type="text"
					name="about"
					placeholder="Вид деятельности"
					minLength="2"
					maxLength="200"
					autoComplete="off"
				/>
				<span className="popup__error" id="profile-about-input-error"></span>
			</>)}
		/>

		{/* <PopupWithForm
			name="newcard"
			title="Новое место"
			children="children"
		/>

		<PopupWithForm
			name="avatar"
			title="Обновить аватар"
			children="children"
		/>

		<PopupWithForm
			name="question"
			title="Вы уверены?"
			children="children"
		/> */}

	</div>
  );
}

export default App;
