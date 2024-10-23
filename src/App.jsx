import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Layout from './pages/layout';
import { useContext } from 'react';
import { AuthContext } from './provider/AuthProvider';
import { Toaster } from 'sonner';
import Projects from './pages/projects';
import Blogs from './pages/blogs';
import Skills from './pages/skills';

function App() {
  const { user } = useContext(AuthContext);

  if (!user) {
    return (
      <>
        <Toaster richColors />
        <Login />
      </>
    );
  } else {
    return (
      <Router>
        <Toaster richColors />
        <Routes>
          <Route
            path='/'
            element={
              <Layout container>
                <Blogs />
              </Layout>
            }
          />
          <Route
            path='/blogs'
            element={
              <Layout container>
                <Blogs />
              </Layout>
            }
          />
          <Route
            path='/projects'
            element={
              <Layout container>
                <Projects />
              </Layout>
            }
          />
          <Route
            path='/skills'
            element={
              <Layout container>
                <Skills />
              </Layout>
            }
          />
        </Routes>
      </Router>
    );
  }
}

export default App;
