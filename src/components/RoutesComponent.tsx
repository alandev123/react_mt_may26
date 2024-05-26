import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
import PublicLayout from "../layouts/PublicLayout";
import ListImage from "../pages/ListImage";

const RoutesComponent: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='*' element={<NotFound />} />
                <Route element={<PublicLayout />}>
                    <Route path="/" element={<ListImage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default RoutesComponent;
