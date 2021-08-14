type MenuItem = {
    id: string;
    label: string;
    icon?: string;
    path?: string;
    subMenu?: MenuList;
};

type MenuList = Array<MenuItem>;

/**
 * This is sidebar navigation structure
 * Icon is currently has support for Font Awesome only
 * In future will add more capability such as vector icons
 * and more icon packs!
 */

export const sidebarMenu: MenuList = [
    {
        id: "menu-dashboard",
        label: "Dashboard",
        icon: "faTachometerAlt",
        path: "/",
    },
    {
        id: "menu-basic-component",
        label: "Basics",
        icon: "faMousePointer",
        subMenu: [
            {
                id: "menu-text",
                label: "Text",
                icon: "faFont",
                path: "/basics/text",
            },
            {
                id: "menu-button",
                label: "Button",
                icon: "faHandPointUp",
                path: "/basics/button",
            },
        ],
    },
    {
        id: "menu-forms",
        label: "Forms",
        icon: "faClipboardList",
        subMenu: [
            {
                id: "menu-input",
                label: "Input",
                path: "/forms/input",
            },
        ],
    },
    {
        id: "menu-containers",
        label: "Containers",
        icon: "faBox",
        subMenu: [
            {
                id: "menu-card",
                label: "Card",
                path: "/containers/card",
            },
        ],
    },
    {
        id: "menu-layouts",
        label: "Layouts",
        icon: "faCalculator",
        subMenu: [
            {
                id: "menu-default",
                label: "Default",
                path: "/layouts/default",
            },
        ],
    },
    {
        id: "menu-themes",
        label: "Themes",
        icon: "faPaintBrush",
        path: "/themes",
    },
    {
        id: "menu-account",
        label: "1st Lvl Nav",
        icon: "faUser",
        subMenu: [
            {
                id: "menu-profile",
                label: "2nd Lvl Nav 1",
                path: "/test1",
            },
            {
                id: "menu-appearance",
                label: "2nd Lvl Nav 2",
                path: "/test2",
            },
            {
                id: "menu-domain",
                label: "2nd Lvl Nav 3",
                subMenu: [
                    {
                        id: "menu-domain-manage",
                        label: "3nd Lvl Nav 1",
                        path: "/test3",
                    },
                    {
                        id: "menu-domain-add",
                        label: "3nd Lvl Nav 2",
                        path: "/test4",
                    },
                ],
            },
        ],
    },
    {
        id: "menu-about",
        label: "About",
        icon: "faInfo",
        path: "/about",
    },
];
