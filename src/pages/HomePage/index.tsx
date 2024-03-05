import * as React from "react";
import { Route, Routes } from "react-router-dom";


import { Navbar, Footer } from "@/constants/components";
import { HomeLayout, BoardLayout } from "@/constants/layout";

interface IAppProps {}

const index: React.FunctionComponent<IAppProps> = (props) => {
  console.log(props);  
  
  return (
    <div className="w-full min-h-[100vh]">
      <Navbar />
      <Routes>
        <Route index element={<HomeLayout />}/>
        <Route path="/tim-du-thuyen" element={<BoardLayout />}/>
        <Route path="/tim-ve-may-bay" element={<BoardLayout />}/>
        <Route path="/doanh-nghiep" element={<BoardLayout />}/>
        <Route path="/blog" element={<BoardLayout />}/>
        <Route path="/lien-he" element={<BoardLayout />}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default index;
