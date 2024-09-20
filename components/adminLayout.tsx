import AdminHeader from "./adminHeader";
import AdminSidebar from "./adminSidebar";

type Props = {};

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AdminHeader />
      <div>
        <AdminSidebar />
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
