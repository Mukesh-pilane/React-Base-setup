import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from "./HomeLayout.module.scss"
import SideBar from '../../Sidebar/Sidebar'
import TopBar from '../../TopBar/TopBar'
import { useDisclosure } from '@mantine/hooks'

const HomeLayout = () => {
    const [sidebarOpened, {close: sidebarClose, toggle:sidebarToggle}] = useDisclosure(false);

    return (
            <div className={styles?.main_container}>
                <SideBar sidebarOpened={sidebarOpened} sidebarClose={sidebarClose}/>
                <div className={styles?.rightSideContainer}>
                    <TopBar sidebarToggle={sidebarToggle}/>
                    <div className={styles?.outlet_content}>
                        <Outlet />
                    </div>
                </div>
            </div>
    )
}

export default HomeLayout