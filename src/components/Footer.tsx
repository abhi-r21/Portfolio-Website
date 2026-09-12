import SocialLinks from "./SocialLinks";
function Footer() {
  return(
    <footer className="border-t border-white-800 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5">
        <SocialLinks />

        <p className="text-sm text-gray-400">
          Built with React & TypeScript
        </p>

        <p className="text-sm text-gray-500">
          © 2026 Abhiram Bojja. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;