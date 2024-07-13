import Header from '../Header/Header';
function Layout({ children }) {
  return (
    <div className="main-wrap rel">
      <Header />
      {children}
    </div>
  );
}

export default Layout;
