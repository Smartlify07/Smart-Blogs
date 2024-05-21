import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";
import Login from "./routes/AuthenticationPage/Login";
import SignUp from "./routes/AuthenticationPage/SignUp";
import RootLayout from "./layout/RootLayout";
import AuthenticationProvider from "./Context/AuthenticationContext";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomeLayout />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </>
    )
  );
  return (
    <>
      <AuthenticationProvider>
        <RouterProvider router={router} />
      </AuthenticationProvider>
    </>
  );
}

export default App;
