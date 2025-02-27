import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "./pages/Home";
import WeatherOutfit from "./pages/WeatherOutfit";
import Forecast from "./pages/Forecast";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="weather_outfit/:city_name" element={<WeatherOutfit />} />
        <Route path="forecast/:city_name" element={<Forecast />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
