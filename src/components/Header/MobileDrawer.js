import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  Icon,
  useDisclosure,
} from "@chakra-ui/react";
import { RiMenuFill } from "react-icons/ri";
import SiteMenus from "../LeftSidebar/SiteMenus";
import TagLists from "../LeftSidebar/TagLists";

function MobileDrawer(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        isRound
        variant="ghost"
        display={["block", "block", "none"]}
        aria-label="Connect"
        icon={<Icon as={RiMenuFill} w={6} h={6} />}
        onClick={onOpen}
      />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>DEV Community</DrawerHeader>

          <DrawerBody>
            <SiteMenus />
            <TagLists />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default MobileDrawer;
