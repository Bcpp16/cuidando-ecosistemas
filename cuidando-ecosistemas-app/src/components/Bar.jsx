import { Link } from "react-router-dom";

import {
  RiSeedlingLine,
  RiHomeLine,
  RiMessage3Line,
  RiNotificationLine,
} from "react-icons/ri";

function Navbar() {
  return (
<div className="flex justify-center items-center ">

    <div className="w-10/12 h-16 rounded-full  bg-gray-900 flex justify-evenly items-center gap-1 z-50 shadow-2xl fixed bottom-5 ">
      <Link
        to=""
        className="text-gray-400  focus:ring-transparent  focus:text-emerald-500 "
      >
        <RiHomeLine className="text-2xl"></RiHomeLine>
      </Link>
      <Link
        to=""
        className="text-gray-400  focus:ring-transparent  focus:text-emerald-500 "
      >
        <RiSeedlingLine className="text-2xl"></RiSeedlingLine>
      </Link>
      <Link
        to=""
        className="text-gray-400  focus:ring-transparent  focus:text-emerald-500 "
      >
        <RiNotificationLine className="text-2xl"></RiNotificationLine>
      </Link>
      <Link
        to=""
        className="text-gray-400  focus:ring-transparent  focus:text-emerald-500 "
      >
        <RiMessage3Line className="text-2xl"></RiMessage3Line>
      </Link>
    </div>
</div>

  
  
  );
}

export default Navbar;
