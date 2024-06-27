import Header from '../Header/Header';

function Layout({ children }) {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
}

export default Layout;
