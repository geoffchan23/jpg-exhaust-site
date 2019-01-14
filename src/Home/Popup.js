const React = require('react');
const Modal = require('react-modal');

const ModalStyles = {
	overlay : {
		zIndex          : 1010,
		backgroundColor : 'rgba(0,0,0,0.85)',
		cursor          : 'pointer',
	},
	content : {
		zIndex          : 2,
		cursor          : 'auto',
		width           : '50%',
		height          : 'fit-content',
		top             : '50%',
		left            : '50%',
		transform       : 'translate(-50%,-50%)',
		overflow        : 'visible',
		position        : 'absolute',
		backgroundColor : 'white',
    padding         : '20px',
    color           : 'darkgray',
    textAlign : 'center',
    fontSize: '2em',
	},
};

Modal.setAppElement('#root');

const Popup = ({
	popupIsOpen,
	closePopup,
}) => {
	return (
		<Modal
			isOpen={popupIsOpen}
			onRequestClose={closePopup}
			contentLabel={`Message sent`}
			style={ModalStyles}
			closeTimeoutMS={500}
		>
			<div className='content'>
				<p>Your message has been sent! We will get back to you as soon as we can.</p>
				<button onClick={closePopup}>Close</button>
			</div>
		</Modal>
	);
};

module.exports = Popup;
