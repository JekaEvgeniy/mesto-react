/*

# ТЗ: Значение пропса name будет использоваться не только
# в имени CSS-класса контейнера,
# но и для атрибута name тега form.

*/

function PopupWithForm(props){
	return (
		<section className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : '' }`} id={`popup-${props.name}`}>

			<div className="popup__inside">
				<div className="popup__container">
					<h2 className="popup__title">{props.title}</h2>

					<form action="#" name="${props.name}" className="popup__form" noValidate>

						{props.children}

						<button className="popup__button" type="submit">Сохранить</button>
					</form>
				</div>
				<button onClick={props.onClose} className="popup__close" type="button" aria-label="Закрыть"></button>

			</div>

		</section>
	)
};


export default PopupWithForm;