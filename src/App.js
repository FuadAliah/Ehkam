import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Layout from './Utilities/Layout';
// import { makeStyles } from '@mui/styles';
// import Theme from './useTheme';

// const useStyles = makeStyles({
//   btn: {
//     backgroundColor: Theme.palette.secondary.main
//   }
// });

const App = () => {
  // const classes = useStyles()

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;