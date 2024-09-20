import UsersideHeader from "./usersideHeader";
import UsersideFooter from "./usersideFooter";

type Props = {};

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full z-10 mx-auto max-w-[1500px] h-full flex flex-col justify-between">
      <UsersideHeader />
      {children}
    </div>
  );
};

export default UserLayout;
