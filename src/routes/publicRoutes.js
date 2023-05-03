import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import Contact from "../pages/Contact";
import MovieCheckOut from "../pages/Movie/MovieCheckOut";
import MovieDetails from "../pages/Movie/MovieDetails";
import MovieDetails2 from "../pages/Movie/MovieDetails2";
import MovieGrid from "../pages/Movie/MovieGrid";
import MovieList from "../pages/Movie/MovieList";
import MoviePopcorn from "../pages/Movie/MoviePopcorn";
import MovieSeatPlan from "../pages/Movie/MovieSeatPlan";
import MovieTicketPlan from "../pages/Movie/MovieTicketPlan";

export const allPublicRoutes = [
    {path:"movie-grid", element: <MovieGrid /> },
    {path:"movie-list", element: <MovieList /> },
    {path:"movie-details", element:<MovieDetails/> },
    {path:"movie-details-2", element: <MovieDetails2 /> },
    {path:"movie-ticket-plan", element:<MovieTicketPlan /> },
    {path:"movie-seat-plan", element: <MovieSeatPlan />},
    {path:"movie-checkout", element:<MovieCheckOut /> },
    {path:"movie-popcorn", element:<MoviePopcorn /> },
    {path:"contact", element: <Contact />},
    {path:"blog", element: <Blog /> },
    {path:"blog-details", element: <BlogDetails /> },
]