"use client"

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store'
import { increment, decrement } from '../store/counterSlice';
import Link from 'next/link';
import { useState } from "react";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"

  
const shadcn = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();
    const [state, setState] = useState("");

  return (
    <div>
    <h1>SHADCN UI MENU COMPONENT</h1>
      <br /><br />
    <Menubar>
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>New Window</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Share</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Print</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Share</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                Whatsapp <MenubarShortcut>⌘W</MenubarShortcut>

              </MenubarItem>
              <MenubarItem>Facebook</MenubarItem>
              {/* <MenubarSeparator /> */}
              <MenubarItem>Skype</MenubarItem>
              {/* <MenubarSeparator /> */}
              <MenubarItem>Gmail</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Permissions</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                Read<MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>Write</MenubarItem>
              {/* <MenubarSeparator /> */}
              <MenubarItem>Share</MenubarItem>
              {/* <MenubarSeparator /> */}
              <MenubarItem>Print</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
  </div>
  );
};

export default shadcn;
