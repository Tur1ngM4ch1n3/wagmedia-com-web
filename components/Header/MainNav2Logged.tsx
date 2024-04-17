"use client"

import React, { FC } from "react"
import { DiscordIcon } from "@/images/icons"

import Logo from "@/components/Logo/Logo"
import MenuBar from "@/components/MenuBar/MenuBar"

import NavigationWag from "../Navigation/NavigationWag"
import SwitchDarkMode from "../SwitchDarkMode/SwitchDarkMode"
import AvatarDropdown from "./AvatarDropdown"
import NotifyDropdown from "./NotifyDropdown"
import SearchModal from "./SearchModal"

export interface MainNav2LoggedProps {}

const MainNav2Logged: FC<MainNav2LoggedProps> = () => {
  const renderContent = () => {
    return (
      <div className="h-20 flex justify-between">
        <div className="flex items-center lg:hidden ">
          <MenuBar />
        </div>

        <div className="flex flex-1 items-center">
          <Logo />
        </div>

        <div className="flex-[2] hidden lg:flex justify-center mx-4">
          <NavigationWag />
        </div>

        <div className="flex-1 flex items-center justify-end text-slate-700 dark:text-slate-100">
          <SearchModal />
          {/* <NotifyDropdown /> */}
          <SwitchDarkMode />
          <button
            className={`self-center text-2xl md:text-3xl w-12 h-12 rounded-full text-neutral-500 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none flex items-center justify-center`}
          >
            <span className="sr-only">Enable dark mode</span>
            <DiscordIcon size={38} />
          </button>

          {/* <AvatarDropdown /> */}
        </div>
      </div>
    )
  }

  return (
    <div className="nc-MainNav2Logged relative z-10 bg-white/80 lg:bg-white/50 dark:bg-neutral-900/50 lg:backdrop-blur-md">
      <div className="container ">{renderContent()}</div>
    </div>
  )
}

export default MainNav2Logged
