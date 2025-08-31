import Footer from "@/layout/Footer";
import Header from "@/layout/Header";

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="min-h-[380px]">{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
