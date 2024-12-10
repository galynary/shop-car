import { Outlet, Link } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/aboutus">About us</Link>
        <Link to="/catalog">Catalog</Link>
        <Link to="/contacts">Contacts</Link>
      </nav>
      <Outlet />
    </>
  );
};
