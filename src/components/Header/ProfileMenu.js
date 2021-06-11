import {
  Avatar,
  Box,
  HStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
function ProfileMenu({ user }) {
  const router = useRouter();
  return (
    <Menu isLazy>
      <MenuButton>
        <Avatar size="sm" name={user.name} src={user.avatar} />
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => router.push(`/${user.username}`)}>
          <HStack>
            <Avatar src={user.avatar} w="10" h="10" />

            <Box>
              <Text>{user.name}</Text>
              <Text fontSize="sm">{user.username}</Text>
            </Box>
          </HStack>
        </MenuItem>
        <MenuDivider />

        {menus.map((m) => (
          <MenuItem onClick={() => router.push(m.to)} key={m.name}>
            {m.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

const menus = [
  { name: "Dashboard", to: "/dashboard" },
  { name: "Write a Post", to: "/new" },
  { name: "Settings", to: "/settings" },
  { name: "Logout", to: "/auth/signout_confirm" },
];

export default ProfileMenu;
