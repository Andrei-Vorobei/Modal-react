import './App.scss';
import { useEffect, useState } from 'react';

import Modal from './Modal';

function App() {
	const [ isOpenModal, setOpenModal ] = useState();

	useEffect(() => {
		if (isOpenModal) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}

		document.addEventListener('keydown', (e) => {
			if (isOpenModal && e.code === 'Escape') setOpenModal(false);
		});
	});
	
	return (
		<div className="app">
			<button onClick={() => setOpenModal(true)}>
				Open modal
			</button>
			{ isOpenModal ? <Modal modalHandler={setOpenModal} /> : null }
		</div>
	);
}

export default App;
