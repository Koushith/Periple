import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import AddPost from './components/screens/AddPosts';
import FeatureRequest from './components/screens/FeatureRequest';
import HomeScreen from './components/screens/HomeScreen';
import ProfileScreen from './components/screens/ProfileScreen';
// import WritePost from './components/screens/WritePost';
import ViewPost from './components/screens/ViewPost';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' exact component={HomeScreen} />
          <Route path='/addpost' exact component={AddPost} />
          <Route path='/featurerequest' exact component={FeatureRequest} />
          <Route path='/profile' exact component={ProfileScreen} />
          <Route path='/post/:id' exact component={ViewPost} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
