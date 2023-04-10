import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Loader from '../components/Loader';
import Inscription from '../pages/Inscription';
import ValidationInscription from '../pages/ValidationInscription';
import Error from '../components/Error'

//const url = "http://164.90.149.95:5001/api/v1/transactions/b9c917b1-e2ad-4b3f-8a6a-6ddae535517e"

export default function App() {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(false)

    // useEffect(() => {
    //   async function fetchData() {
    //     try {
    //       const response = await fetch(url)
    //       const data = await response.json()
    //       setData(data)
    //     } catch (err) {
    //       setLoading(true)
    //     } finally {setLoading(false)
    //     }
    //   }
    //  fetchData()
    //   }, []);

  return (
    <Box width='100%' minHeight='100%' overflow='hidden'>
      {/* <Sidebar data={data} isLoading={isLoading} /> */}
      {/* <Header /> */}
      <Box paragraph 
                sx={{
                  // paddingTop: 4, 
                  minHeight: '100vh', 
                  overflowX: 'none', }}>
              {/* =============React-Router-DOM============= */}
              {isLoading ? (
                <Box marginTop='15%'>
                  <Loader />
                </Box>
              ) : (
                <Router>
                    <Routes>
                        <Route path='/*' element={<Error />} /> 
                        <Route path='/inscription' element={<Inscription />} />
                        <Route path='/inscription_validee' element={<ValidationInscription />} />
                    </Routes>
                </Router>
              )}
            </Box>
    </Box>
  );
}