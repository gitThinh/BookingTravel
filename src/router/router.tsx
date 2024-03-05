import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HomePage } from '@/constants/pages';


const index: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/*' element={<HomePage/>}/>
        </Routes>
    </BrowserRouter>
  );
};

export default index;
