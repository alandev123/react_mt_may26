import Header from './Header';
import { Outlet } from 'react-router-dom';

const PublicLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};

export default PublicLayout