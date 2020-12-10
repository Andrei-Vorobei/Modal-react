import './Modal.scss';

function Modal(props) {
	const { modalHandler } = props;
	
	return (
		<div className="modal">
			<div 
				className="modal__overlay"
				onClick={() => modalHandler(false)}>
			</div>
			<div className="modal__container">
				<div className="modal__content">
					Modal content
				</div>
				<span 
					className="modal__close"
					onClick={() => modalHandler(false)}>
					&times;
				</span>
			</div>
		</div>
	);
}

export default Modal;
