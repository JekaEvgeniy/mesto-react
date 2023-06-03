import '../index.css';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
	document.body.classList.add('body');

  return (
	<div className="page">

		<Header />

		<Main />

		<Footer />

	</div>
  );
}

export default App;
