import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./components/Header/Header";
import UI from "./components/UI/UI";
import { Sidebar } from "./components/Sidebar/SidebarStyles";
import Albums from "./pages/Albums/Albums";
import Pictures from "./pages/Pictures/Pictures";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<UI />}>
          <Route path="/" element={<Navigate to="/" />} />
          <Route index path="/pictures" element={<Pictures />} />
          <Route
            path="albums"
            element={
              // <ProtectedRoute>
              <Albums />
              // </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
