
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayOut from './pages/LayOut';
import Home from './pages/Home';
import MovieGrid from './pages/Movie/MovieGrid';
import MovieList from './pages/Movie/MovieList';
import MovieDetails from './pages/Movie/MovieDetails';
import MovieDetails2 from './pages/Movie/MovieDetails2';
import MovieTicketPlan from './pages/Movie/MovieTicketPlan';
import MovieSeatPlan from './pages/Movie/MovieSeatPlan';
import MovieCheckOut from './pages/Movie/MovieCheckOut';
import MoviePopcorn from './pages/Movie/MoviePopcorn';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayOut/>}>
          <Route index element={<Home /> }/>
          <Route path='movie-grid' element={<MovieGrid />} />
          <Route path='movie-list' element={<MovieList />} />
          <Route path='movie-details' element={<MovieDetails />} />
          <Route path='movie-details-2' element={<MovieDetails2 />} />
          <Route path='movie-ticket-plan' element={<MovieTicketPlan />} />
          <Route path='movie-seat-plan' element={<MovieSeatPlan />} />
          <Route path='movie-checkout' element={<MovieCheckOut />} />
          <Route path='movie-popcorn' element={<MoviePopcorn />} />
          <Route path='contact' element={<Contact />} />
          <Route path='blog' element={<Blog />} />
          <Route path='blog-details' element={<BlogDetails />} />
        </Route>
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
      
  );
}

export default App;
