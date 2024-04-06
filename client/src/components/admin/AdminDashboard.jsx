const AdminDashboard = () => {
  return (
    <div className="relative w-full h-fit overflow-auto">
      <div className="relative w-full h-fit flex flex-wrap p-10 box-border gap-2 justify-between">
        <div className="relative w-full text-3xl font-bold">
          Basic Statistics
        </div>
        <div className="relative w-[350px] h-[200px] bg-primary text-white flex flex-col rounded items-center justify-center">
          <i className="fa-solid fa-users text-5xl"></i>
          <div className="text-6xl font-bold">100</div>
          <div className="uppercase text-sm absolute bottom-2">Total Users</div>
        </div>
        <div className="relative w-[350px] h-[200px] bg-primary text-white flex flex-col rounded items-center justify-center">
          <i className="fa-solid fa-rocket text-5xl"></i>
          <div className="text-6xl font-bold">100</div>
          <div className="uppercase text-sm absolute bottom-2">Total Trips</div>
        </div>
        <div className="relative w-[350px] h-[200px] bg-primary text-white flex flex-col rounded items-center justify-center">
          <i className="fa-solid fa-shirt text-5xl"></i>
          <div className="text-6xl font-bold">100</div>
          <div className="uppercase text-sm absolute bottom-2">Total Sales</div>
        </div>
        <div className="relative w-[350px] h-[200px] bg-primary text-white flex flex-col rounded items-center justify-center">
          <i className="fa-solid fa-user-shield text-5xl"></i>
          <div className="text-6xl font-bold">100</div>
          <div className="uppercase text-sm absolute bottom-2">Total Staff</div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
