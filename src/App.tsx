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
import { useState } from "react";
import { IsCelsiusContext } from "./context/Context";

function App() {
  const [isCelsius, setIsCelsius] = useState<boolean>(true);
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
      {" "}
      <IsCelsiusContext.Provider value={{ isCelsius, setIsCelsius }}>
        <RouterProvider router={router} />{" "}
      </IsCelsiusContext.Provider>
    </>
  );
}

export default App;
