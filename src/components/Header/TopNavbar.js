import {
  Box,
  Button,
  Divider,
  HStack,
  Icon,
  IconButton,
  Input,
  Skeleton,
  SkeletonCircle,
} from "@chakra-ui/react";
import Link from "next/link";
import {
  RiChatSmile3Line,
  RiNotification3Line,
  RiSearchLine,
} from "react-icons/ri";
import { FaDev } from "react-icons/fa";
import { Fragment } from "react";
import MobileDrawer from "./MobileDrawer";
import ProfileMenu from "./ProfileMenu";
import { useAuthState } from "../../context/AuthProvider";
import { useRouter } from "next/router";

function TopNavbar() {
  const { isAuthenticated, userLoading, user } = useAuthState();
  const router=  useRouter()

  return (
    <Fragment>
      <Box
        m="auto"
        maxW={["container.xl"]}
        d="flex"
        alignItems="center"
        justifyContent="space-between"
        height={["7vh", "7vh", "6vh"]}
      >
        <HStack>
          {/* logo  */}
          <MobileDrawer />
          <Link href="/" passHref>
            <a>
              <Icon as={FaDev} h={10} w={10} />
            </a>
          </Link>
          <Input
            variant="filled"
            display={["none", "none", "block"]}
            w={[20, 40, 60, 96]}
            b="2px"
            placeholder="Search..."
          />
          {/* menu */}
        </HStack>

        <HStack>
          <IconButton
            isRound
            variant="ghost"
            display={["block", "block", "none"]}
            aria-label="Connect"
            icon={<Icon as={RiSearchLine} w={6} h={6} />}
          />
          {isAuthenticated ? (
            <Fragment>
              <Button onClick={()=>router.push("/new")} display={["none", "none", "block"]} colorScheme="blue">
                Write a Post
              </Button>
              <IconButton
                isRound
                variant="ghost"
                aria-label="Connect"
                icon={<Icon as={RiChatSmile3Line} w={6} h={6} />}
              />
              <IconButton
                isRound
                variant="ghost"
                aria-label="Connect"
                icon={<Icon as={RiNotification3Line} w={6} h={6} />}
              />
              {isAuthenticated && <ProfileMenu user={user} />}
            </Fragment>
          ) : userLoading ? (
            <HStack>
              <Skeleton h="10" w="32" />
              <SkeletonCircle size="10" />
              <SkeletonCircle size="10" />
              <SkeletonCircle size="10" />
            </HStack>
          ) : (
            <Fragment>
              <Link href="/auth/login" passHref>
                <Button variant="outline" display={["none", "none", "block"]}>
                  Login
                </Button>
              </Link>
              <Link href="/auth/register" passHref>
                <Button colorScheme="linkedin">Create Account</Button>
              </Link>
            </Fragment>
          )}
        </HStack>
      </Box>
      <Divider />
    </Fragment>
  );
}

export default TopNavbar;
