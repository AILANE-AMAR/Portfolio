export default function Footer() {
  return (
    <footer className="border-t border-base-200 py-8 px-6 text-center">
      <p className="text-sm opacity-40">
        © {new Date().getFullYear()} Amar Ailane · Fait avec React & DaisyUI
      </p>
    </footer>
  );
}