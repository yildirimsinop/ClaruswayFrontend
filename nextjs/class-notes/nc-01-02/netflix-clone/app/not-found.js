//? next.js olmayan route'lar defaul 404 sayfasi sunmaktadir. Istersek bizde 404 sayfasi olusturabiliriz.
export default function NotFound() {
  return (
    <div className="h-screen flex justify-center items-center">
      <img src="/images/404-page-not-found.png" />
    </div>
  );
}
