export default function Footer() {
  return (
    <footer className="bg-gray-100 py-4 px-6 border-t border-gray-200 mt-auto">
      <div className="container mx-auto text-center text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} AlgoLabs. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
