// DetailService.tsx
import { motion } from "framer-motion";
import ChevronRight from "@/public/svgs/chevron-right.svg";

interface ServiceSidebarItemProps {
  currentData: any;
  setSelectedItem: React.Dispatch<React.SetStateAction<any | null>>;
}

export default function ServiceSidebarItem({
  currentData,
  setSelectedItem,
}: ServiceSidebarItemProps) {
  return (
    <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
      <li
        className="text-black p-4 hover:bg-metal cursor-pointer shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] my-1 rounded-md"
        onClick={() => {
          setSelectedItem(currentData);
        }}
      >
        <a>
          {currentData.name}
          <ChevronRight className="w-4 h-4 ml-auto inline-block" />
        </a>
      </li>
    </motion.div>
  );
}
