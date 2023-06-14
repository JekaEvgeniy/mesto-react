import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }){

	const ref = React.useRef();

	function handleSubmit(e) {
		e.preventDefault();

		onUpdateAvatar({
			avatar: ref.current.value,
		});
	}

	return(
		<PopupWithForm
			name="avatar"
			title="Обновить аватар"
			isOpen={isOpen}
			onClose={onClose}
			onSubmit={handleSubmit}
			children={(<>
				<input
					required
					id="avatar-url-input"
					className="popup__input popup__input_type_url"
					type="url"
					name="avatar"
					placeholder="Ссылка на картинку"
					autoComplete="off"
					ref={ref}
				/>
				<span className="popup__error" id="avatar-url-input-error"></span>
			</>)}
		/>
	)
}

export default EditAvatarPopup;
/*
https://images.unsplash.com/photo-1561948955-570b270e7c36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=601&q=80
*/