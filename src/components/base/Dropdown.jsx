const DropDown = () => {
  return (
    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-xl py-2 animate-fadeIn">
      <a
        href="#"
        className="block px-4 py-3 text-sm text-gray-600 hover:bg-gray-100"
      >
        Your profile
      </a>

      <a
        href="#"
        className="block px-4 py-3 text-sm text-gray-600 hover:bg-gray-100"
      >
        Settings
      </a>

      <a
        href="#"
        className="block px-4 py-3 text-sm text-red-500 hover:bg-gray-100"
      >
        Sign out
      </a>
    </div>
  );
};

export default DropDown;
