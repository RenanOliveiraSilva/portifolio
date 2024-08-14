
import { Button, CustomFlowbiteTheme, Flowbite, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import imgLogo from '../../imgs/logoIcon.png'
import flagEUA from '../../imgs/estados-unidos.png'

const customTheme: CustomFlowbiteTheme = {
  navbar: {
    "root": {
      "base": "bg-coolGray dark:bg-coolGray px-2 py-2.5 dark:border-gray-700 sm:px-4",
      "rounded": {
        "on": "rounded",
        "off": ""
      },
      "bordered": {
        "on": "border",
        "off": ""
      },
      "inner": {
        "base": "mx-auto flex flex-wrap items-center justify-between",
        "fluid": {
          "on": "",
          "off": "container"
        }
      }
    },
    "brand": {
      "base": "flex items-center"
    },
    "collapse": {
      "base": "w-full md:block md:w-auto",
      "list": "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
      "hidden": {
        "on": "hidden",
        "off": ""
      }
    },
    "link": {
      "base": "block py-2 pl-3 pr-4 md:p-0",
      "active": {
        "on": "bg-cyan-700 text-white dark:text-white md:bg-transparent md:text-cyan-700",
        "off": "border-b border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
      },
      "disabled": {
        "on": "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
        "off": ""
      }
    },
    "toggle": {
      "base": "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden",
      "icon": "h-6 w-6 shrink-0"
    }
  },
};

export function Component() {
  return (
    <Flowbite theme={{ theme: customTheme}}>
      <Navbar fluid rounded>
        <NavbarBrand href="https://flowbite-react.com">
          <img src={imgLogo} className="mr-3 h-6 sm:h-9" alt="Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Renan Silva</span>
        </NavbarBrand>
        <div className="flex md:order-2 items-center">
          <Button> <img src={flagEUA} className="mr-3 h-6 sm:h-9" alt="Logo" /> English Version</Button>
          <NavbarToggle />
        </div>
        <NavbarCollapse>
          <NavbarLink href="#">
            Sobre mim
          </NavbarLink>
          <NavbarLink href="#">Formação</NavbarLink>
          <NavbarLink href="#">Meus Projetos</NavbarLink>
          <NavbarLink href="#">Meus Serviços</NavbarLink>
          <NavbarLink href="#">Contatos</NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </Flowbite>
  );
}

