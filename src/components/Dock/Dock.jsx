import DockItem from "./DockItem"

const Dock = () => {
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg flex gap-4">
      <DockItem icon="src/assets/icons/Contacts.png" label="Contacts" />
      <DockItem icon="src/assets/icons/Messages.png" label="Messages" />
      <DockItem icon="src/assets/icons/Launchpad.png" label="Launchpad" />
      <DockItem icon="src/assets/icons/Notes.png" label="Notes" />
      <DockItem icon="src/assets/icons/Settings.png" label="Settings" />
      <DockItem icon="src/assets/icons/Bin.png" label="Bin" />
    </div>
  )
}

export default Dock;