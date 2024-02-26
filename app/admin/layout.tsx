import Sidebar from "../Components/Admin/Sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="text-zinc-900 w-full h-auto flex z-10">
      <div className="w-1/6 h-auto bg-zinc-900">
        <Sidebar />
      </div>
      <div className="w-5/6 h-auto bg-slate-300 flex flex-col z-10">{children}</div>
    </div>
  );
}
