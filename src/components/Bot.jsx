import React from "react";

import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';
import { Link } from "react-router-dom";






const Bot = () => {

  


  
  return (
    <div className="fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-designColor text-4xl bg-cyan-600 w-16 h-16 flex items-center justify-center rounded-full animate-bounce">
    <ChatBubbleLeftRightIcon className="icon-chat"/> 
    </div>
  );
};

export default Bot;

