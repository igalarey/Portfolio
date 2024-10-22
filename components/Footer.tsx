const Footer = () => {
  return (
    <footer className="py-6 px-4 sm:px-6 lg:px-8 animate-fadeIn">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Imanol Galarza</p>
        <div className="flex space-x-4">
          <a
            href="https://github.com/igalarey"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/igalarey"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            LinkedIn
          </a>
          <a
            href="https://www.behance.net/igalarey"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            Behance
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
