import {
  VscChromeMinimize,
  VscChromeMaximize,
  VscChromeClose,
} from "react-icons/vsc";

export default function TitleBar() {
  const buttons = [
    { message: "minimizeApp", icon: <VscChromeMinimize size={12} /> },
    { message: "maximizeApp", icon: <VscChromeMaximize size={12} /> },
    { message: "closeApp", icon: <VscChromeClose size={12} />, danger: true },
  ];

  return (
    <div className="flex drag-region items-center justify-end relative z-10">
      <div className="flex items-center no-drag">
        {buttons.map((button) => (
          <button
            key={button.message}
            onClick={() => window.electron.ipcRenderer.send(button.message)}
            className={`h-10 px-4 flex items-center text-white text-xs no-drag
              ${button.danger ? "hover:bg-red-600" : "hover:bg-neutral-700"}`}
          >
            {button.icon}
          </button>
        ))}
      </div>
    </div>
  )
}