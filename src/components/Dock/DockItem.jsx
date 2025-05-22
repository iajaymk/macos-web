const DockItem = ({ icon, label }) => {

  return (
    <div className="flex flex-col items-center group relative">
      <img
        src={icon}
        alt={label}
        className="h-14 w-14 hover:scale-110 transition-transform"
      />
      {/* Label appears on hover only */}
      <div className="absolute -top-10 bg-black text-white text-xs px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        {label}
      </div>
    </div>
  )

};

export default DockItem;