import { Avatar, Flex, Group, Menu, Text } from '@mantine/core';
import classes from './TopBar.module.css';
import { IconLayoutSidebarLeftCollapse } from '@tabler/icons-react';
import { IconLogout } from '@tabler/icons-react';

export default function TopBar({ sidebarToggle }) {

  return (
    <header className={classes.header}>
      <Flex size="lg" align="center" className={classes.topBarWrapper} justify="space-between" flex={1} p="10px 20px">
        <IconLayoutSidebarLeftCollapse className={classes.sidebarMenuBtn} onClick={sidebarToggle} />
        <Menu withArrow>
          <Menu.Target>
            <Group>
              <Text size="lg" fw={500}>
                test
              </Text>
              <Avatar src={"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"} radius="xl" />
            </Group>
          </Menu.Target>
          <Menu.Dropdown position="bottom-end">
            <Menu.Label>Profile</Menu.Label>
            <Menu.Item
              leftSection={<IconLogout />}
              component="button">
              Mantine website
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Flex>
    </header>
  );
}