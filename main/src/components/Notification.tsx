import { AiOutlineCheckCircle } from "react-icons/ai";
import { motion } from "framer-motion";

const Notification = ({ message }: { message: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, right: "-250px" }}
      animate={{ opacity: 1, right: "10px" }}
      exit={{ opacity: 0, right: "-250px" }}
      transition={{ duration: 0.5 }}
      style={{
        top: "2vh",
        position: "fixed",
        zIndex: 10000,
      }}
    >
      <div
        className="flex flex-col gap-y-2 p-4 mb-4 text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
        role="alert"
      >
        <div className="flex gap-x-2 items-center">
          <AiOutlineCheckCircle />
          <h3 className="text-lg font-medium">Successfully copied!</h3>
        </div>
        <div className="text-sm">{message}</div>
      </div>
    </motion.div>
  );
};

export default Notification;
