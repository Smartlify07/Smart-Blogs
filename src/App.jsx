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
import fetchBlogPosts from "./functions/loaderfunctions/fetchBlogPosts";
import BlogDetails from "./routes/BlogDetails/BlogDetails";
import fetchBlogPost from "./functions/loaderfunctions/fetchBlogPost";
import CreateBlog from "./routes/CreateBlog/CreateBlog";
import FetchErrorPage from "./routes/ErrorPages/FetchErrorPage";
import ProfileLayout from "./layout/ProfileLayout";
import EditProfile from "./routes/Profile/EditProfile";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<RootLayout />}>
          <Route
            path="/"
            index
            element={<HomeLayout />}
            loader={fetchBlogPosts}
            errorElement={<FetchErrorPage />}
          />

          <Route
            path="blogs/:title/:id"
            element={<BlogDetails />}
            loader={fetchBlogPost}
          />
          <Route path="/dashboard" element={<ProfileLayout />} />
          <Route path="/dashboard/edit" element={<EditProfile />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="write" element={<CreateBlog />} />
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
