import React from "react";

import api from '../utils/Api';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';

import CurrentUserContext from '../contexts/CurrentUserContext';

function App() {
	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
	const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

	const [selectedCard, setSelectedCard] = React.useState(null);

	const [currentUser, setCurrentUser] = React.useState({});

	const handleEditAvatarClick = () => {
		setIsEditAvatarPopupOpen(true);
	}

	const handleEditProfileClick = () => {
		setIsEditProfilePopupOpen(true);
	}

	const handleAddPlaceClick = () => {
		setIsAddPlacePopupOpen(true);
	}

	function closeAllPopups(){
		setIsEditProfilePopupOpen(false);
		setIsEditAvatarPopupOpen(false);
		setIsAddPlacePopupOpen(false);

		setSelectedCard(null);
	}

	function handleCardClick(card) {
		setSelectedCard(card);
	}

	React.useEffect(() => {
		api.getUserInfo()
			.then(setCurrentUser)
			.catch(err => console.warn(err));
	}, []);

  return (
		<CurrentUserContext.Provider value={currentUser}>
			<div className="page">

				<Header />

				<Main
					onEditProfile={handleEditProfileClick}
					onEditAvatar={handleEditAvatarClick}
					onAddPlace={handleAddPlaceClick}
					onCardClick={handleCardClick}
				/>

				<Footer />

				<EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />

				<PopupWithForm
					name="avatar"
					title="Обновить аватар"
					isOpen={isEditAvatarPopupOpen}
					onClose={closeAllPopups}
					children={(<>
						<input
							required
							id="avatar-url-input"
							className="popup__input popup__input_type_url"
							type="url"
							name="avatar"
							placeholder="Ссылка на картинку"
							autoComplete="off"
						/>
						<span className="popup__error" id="avatar-url-input-error"></span>
					</>)}
				/>

				<PopupWithForm
					name="newcard"
					title="Новое место"
					isOpen={isAddPlacePopupOpen}
					onClose={closeAllPopups}
					children={(<>
						<input
							required
							id="newcard-title-input"
							className="popup__input popup__input_type_title"
							type="text"
							name="name"
							placeholder="Название"
							minLength="2"
							maxLength="30"
							autoComplete="off"
						/>
						<span className="popup__error" id="newcard-title-input-error"></span>

						<input
							required
							id="newcard-url-input"
							className="popup__input popup__input_type_url"
							type="url"
							name="link"
							placeholder="Ссылка на картинку"
							autoComplete="off"
						/>
						<span className="popup__error" id="newcard-url-input-error"></span>
					</>)}
				/>

				<ImagePopup
					title="Попап с картинкой"
					card={selectedCard}
					onClose={closeAllPopups}
				/>

			</div>
		</CurrentUserContext.Provider>
  );
}

export default App;
