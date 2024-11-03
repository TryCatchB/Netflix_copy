import About from "../components/pages/about/About.tsx";
import Auth from "../components/pages/auth/Auth.tsx";
import Films from "../components/pages/films/Films.tsx";
import Home from "../components/pages/home/Home.tsx";
import Popular from "../components/pages/popular/Popular.tsx";
import TVshows from "../components/pages/TVshows/TVshows.tsx";
import CompleteProfilePage from "../components/UI/completeProfilePage/CompleteProfilePage.tsx";
import Favorites from "../components/pages/favourites/Favorites.tsx";
import UserProfile from "../components/pages/profile/UserProfile.tsx";

export const routes = [
  {
    path: "/auth",
    element: Auth,
  },
  {
    path: "/",
    element: Home,
  },
  {
    path: "/films",
    element: Films,
  },
  {
    path: "/popular",
    element: Popular,
  },
  {
    path: "/tvshows",
    element: TVshows,
  },
  {
    path: "/profile",
    element: UserProfile,
  },
  {
    path: "/complete-profile",
    element: CompleteProfilePage,
  },
  {
    path: "/favorites/:name",
    element: Favorites,
  },
  {
    path: "/about/:type/:title",
    element: About,
  },
];
