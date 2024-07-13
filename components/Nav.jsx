const Nav = () => {
  return (
    <header>
      <nav className="flex fixed w-full top-0 right-0 z-10 justify-between px-16 py-6 bg-zinc-200">
        <h1 className=" text-2xl font-bold cursor-pointer">FindUser</h1>
        <div>
          <ul className="flex gap-4 text-gray-50 cursor-pointer">
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
