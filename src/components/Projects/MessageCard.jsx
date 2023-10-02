import { IconMessageChatbot } from "@tabler/icons-react";

export const MessageCard = () => {
  return (
    <div className="w-full my-3 h-24 bg-gradient-to-r from-green-200 to-blue-300 rounded-3xl shadow-xl flex items-center mt-10">
      <IconMessageChatbot size={38} className="mx-4" />
      <h2 className="text-xl font-titles text-gray-800 flex items-center pr-4">
        You can also check my
        <a
          href="https://github.com/joajo13"
          target="_blank"
          className="ml-3 hover:text-primary hover:scale-110 underline underline-offset-4"
        >
          GitHub
        </a>
      </h2>
    </div>
  );
};
