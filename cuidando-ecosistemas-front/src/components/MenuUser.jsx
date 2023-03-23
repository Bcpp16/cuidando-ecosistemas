import { RiUserLine } from "react-icons/ri";

function MenuUser() {
  return (
    <>

<button id="dropdownUserAvatarButton" data-dropdown-toggle="dropdownAvatar" class="flex text-sm bg-gray-900 p-2"  type="button">
    <RiUserLine className="icon text-white"></RiUserLine>
</button>



    </>
  );
}

export default MenuUser;
