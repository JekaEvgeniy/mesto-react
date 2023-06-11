import React from 'react';
import PopupWithForm from './PopupWithForm';
import CurrentUserContext from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose }){
	const currentUser = React.useContext(CurrentUserContext);

	const [name, setName] = React.useState('');
	const [description, setDescription] = React.useState('');

	React.useEffect(() => {

		if ( currentUser.name ){
			// Иначе Cannot read properties of undefined (reading 'name')
			setName(currentUser.name);
		}

		if (currentUser.about ){
			// Иначе Cannot read properties of undefined (reading 'name')
			setDescription(currentUser.about);
		}

	}, [currentUser]);

	function handleChangeName(e){
		setName(e.target.value);
	}

	function handleChangeDesc(e){
		setDescription(e.target.value);
	}

	return(
		<PopupWithForm
			name="profile"
			title="Редактировать профиль"
			isOpen={isOpen}
			onClose={onClose}
			children={(<>
				<input
					required
					id="profile-name-input"
					className="popup__input popup__input_type_name"
					onChange={handleChangeName}
					value={name ?? ''}
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
					onChange={handleChangeDesc}
					value={description ?? ''}
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
	)
}

export default EditProfilePopup;