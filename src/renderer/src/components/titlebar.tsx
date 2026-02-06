import {
  VscChromeMinimize,
  VscChromeMaximize,
  VscChromeClose,
} from "react-icons/vsc";
import { ReactNode } from "react";

type TitleBarButtonProps = {
  message: string;
  children: ReactNode;
  danger?: boolean;
}

function TitleBarButton({ message, children, danger }: TitleBarButtonProps) {
  return (
    <button
      onClick={() => window.electron.ipcRenderer.send(message)}
      className={`h-10 px-4 flex items-center text-white text-xs no-drag
        ${danger ? "hover:bg-red-600" : "hover:bg-neutral-700"}`}
    >
      {children}
    </button>
  );
}

export default function TitleBar() {
  return (
    <div className="flex drag-region items-center justify-end relative z-10">
      <div className="flex items-center no-drag">
        <TitleBarButton message="minimizeApp">
          <VscChromeMinimize size={12} />
        </TitleBarButton>
        <TitleBarButton message="maximizeApp">
          <VscChromeMaximize size={12} />
        </TitleBarButton>
        <TitleBarButton message="closeApp" danger>
          <VscChromeClose size={12} />
        </TitleBarButton>
      </div>
    </div>
  )
}