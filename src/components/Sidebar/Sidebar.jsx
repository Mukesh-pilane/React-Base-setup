
import { Avatar, Box, Drawer, Flex, Group, Image, ScrollArea, Text } from '@mantine/core';
import LinksGroup from './LinksGroup';
import classes from './Sidebar.module.css';
import { useMediaQuery } from '@mantine/hooks';
import { sideBarMenu } from '../../utility/constants';


export default function SideBar({sidebarOpened, sidebarClose}) {

  const matches = useMediaQuery('(min-width: 56.25em)');
  const links = sideBarMenu
  .map(item => <LinksGroup {...item} closeSidebar={sidebarClose} key={item.label} />);


  return (
    <Box
      component={matches ? "aside" : Drawer}
      opened={sidebarOpened}
      onClose={sidebarClose}
      offset={0}
      position="left"
      size="xs"
      withCloseButton={false}
      className={matches ? classes.navbar : ''}
      pt="3px"
    >
      <div className={classes.header}>
        <Group justify="space-between">
          <Flex justify="center" align="center" gap={5}>
            <Avatar color="#6F63E6" radius="50%" style={{ width: 35, height: 35, padding: 5, background: "#6F63E6" }}>
              <Image src="https://testffc.nimapinfotech.com/image/New%20Images/FFC/FFC-logo.png" style={{ fill: "#6F63E6" }} />
            </Avatar>
            <Text size='md' fw={600} c="blue">App name</Text>
          </Flex>
        </Group>
      </div>

      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>
    </Box>
  );
}
