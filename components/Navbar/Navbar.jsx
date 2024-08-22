import ClientNavbar from "./NavbarHelper";

const Navbar = () => {

  return (
    <>
      <div className="flex justify-between h-16 py-2">
        <div className="flex items-center">
          <p className="text-2xl font-bold">SugarDaddyCane</p>
        </div>

        <ClientNavbar />
      </div>
    </>
  );
};

export default Navbar;
