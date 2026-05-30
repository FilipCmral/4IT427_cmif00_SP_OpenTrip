import { Routes, Route, Navigate } from "react-router-dom";

import { SearchForPointsOfInterestPage } from "./pages/SearchForPointsOfInterestPage";
import { PointOfInterestDetailsPage } from "./pages/PointOfInterestDetailsPage";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<SearchForPointsOfInterestPage />} />
        <Route path="/points-of-interest/:id" element={<PointOfInterestDetailsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} /> {/* Redirect any unknown routes to the main page */}
      </Routes>
    </>
  )
}

export default App
