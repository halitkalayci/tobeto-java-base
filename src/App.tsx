import {BrowserRouter, Route, Routes} from "react-router-dom";
import OverlayLoader from "./components/OverlayLoader/OverlayLoader";
import Homepage from "./pages/Homepage/Homepage";

function App() {
	return (
		<>
			<OverlayLoader />

			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Homepage />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
