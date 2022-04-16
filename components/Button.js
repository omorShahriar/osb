const Button = ({ link, children, className = "" }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={` block w-fit py-4 px-6 bg-green-200 duration-300 transition-all hover:bg-osb-green rounded-md font-semibold text-lg hover:text-white ${className} `}
    >
      {children}
    </a>
  );
};

export default Button;
