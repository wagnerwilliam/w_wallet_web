import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="bg-white">
      <div className="flex justify-center h-screen">
        <div
          className="hidden bg-cover lg:block lg:w-2/3"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1616763355603-9755a640a287?auto=format&fit=crop&w=1470&q=80')",
          }}
        >
          <div className="flex items-center h-full px-20 bg-opacity-40">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Meraki UI
              </h2>

              <p className="max-w-xl mt-3 text-gray-100">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                autem ipsa, nulla laboriosam dolores, repellendus perferendis
                libero suscipit nam temporibus molestiae
              </p>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
