import Sidebar from "../Components/Admin/Sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="text-zinc-900 w-full flex ">
      <div className="w-1/6 h-screen bg-zinc-900">
        <Sidebar />
      </div>
      <div className="w-5/6 h-screen bg-slate-300 flex flex-col">
        {children}
      </div>
    </div>
  );
}
