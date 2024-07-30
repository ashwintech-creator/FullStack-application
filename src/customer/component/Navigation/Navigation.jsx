import { Fragment, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const navigation = {
  categories: [
    {
      id: "ActionFigures",
      name: "Action Figures",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://i.pinimg.com/564x/3d/1a/1f/3d1a1f33cbc1f84e85996c8b65c199e0.jpg",
          imageAlt:
            "A collection of action figures with various designs and colors.",
        },
        {
          name: "Superheroes",
          href: "#",
          imageSrc:
            "https://i.pinimg.com/564x/42/56/f8/4256f8dcb8f244ba618721219f550054.jpg",
          imageAlt:
            "Action figures of popular superheroes displayed on a shelf.",
        },
      ],
      sections: [
        {
          id: "figures",
          name: "Figures",
          items: [
            { name: "Superheroes", href: "#" },
            { name: "Dinosaurs", href: "#" },
            { name: "Fantasy Characters", href: "#" },
            { name: "Vehicles", href: "#" },
            { name: "Buildable Figures", href: "#" },
            { name: "Browse All", href: "#" },
          ],
        },
        {
          id: "playsets",
          name: "Playsets",
          items: [
            { name: "Adventure Playsets", href: "#" },
            { name: "Superhero Lairs", href: "#" },
            { name: "Dinosaurs Arenas", href: "#" },
            { name: "Fantasy Worlds", href: "#" },
            { name: "Vehicles Sets", href: "#" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "LEGO", href: "#" },
            { name: "Mattel", href: "#" },
            { name: "Hasbro", href: "#" },
            { name: "Playmobil", href: "#" },
          ],
        },
      ],
    },
    {
      id: "EducationalToys",
      name: "Educational Toys",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://i.pinimg.com/564x/2b/53/11/2b5311f0d0070a08f7e7a385e99b1a26.jpg",
          imageAlt:
            "Various educational toys including puzzles and learning games.",
        },
        {
          name: "Learning Games",
          href: "#",
          imageSrc:
            "https://i.pinimg.com/564x/98/b8/79/98b879683ca27c05d1cdfad0af3dfa54.jpg",
          imageAlt:
            "Educational games designed to enhance learning and problem-solving skills.",
        },
      ],
      sections: [
        {
          id: "puzzles",
          name: "Puzzles",
          items: [
            { name: "Jigsaw Puzzles", href: "#" },
            { name: "3D Puzzles", href: "#" },
            { name: "Interactive Puzzles", href: "#" },
            { name: "Educational Puzzles", href: "#" },
            { name: "Browse All", href: "#" },
          ],
        },
        {
          id: "games",
          name: "Games",
          items: [
            { name: "Board Games", href: "#" },
            { name: "Card Games", href: "#" },
            { name: "STEM Games", href: "#" },
            { name: "Memory Games", href: "#" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Melissa & Doug", href: "#" },
            { name: "Fisher-Price", href: "#" },
            { name: "VTech", href: "#" },
            { name: "LeapFrog", href: "#" },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "About Us", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "Customer Service", href: "#" },
    { name: "Careers", href: "#" },
  ],
};

export default function NavigationBar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId, sectionId, itemId) => {
    navigate(`/${categoryId}/${sectionId}/${itemId}`);
    setOpen(false);
  };

  return (
    <div className="bg-red-800">
      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-40">
        {" "}
        {/*altered here*/}
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />
        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <div className="flex px-4 pb-2 pt-5">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>

            {/* Links */}
            <TabGroup className="mt-2">
              <div className="border-b border-gray-200">
                <TabList className="-mb-px flex space-x-8 px-4">
                  {navigation.categories.map((category) => (
                    <Tab
                      key={category.name}
                      className="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900 data-[selected]:border-indigo-600 data-[selected]:text-indigo-600"
                    >
                      {category.name}
                    </Tab>
                  ))}
                </TabList>
              </div>
              <TabPanels as={Fragment}>
                {navigation.categories.map((category) => (
                  <TabPanel
                    key={category.name}
                    className="space-y-10 px-4 pb-8 pt-10"
                  >
                    <div className="grid grid-cols-2 gap-x-4">
                      {category.featured.map((item) => (
                        <div key={item.name} className="group relative text-sm">
                          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                            <img
                              alt={item.imageAlt}
                              src={item.imageSrc}
                              className="object-cover object-center"
                            />
                          </div>
                          <p
                            onClick={() => navigate(item.href)}
                            className="mt-6 block font-medium text-gray-900 cursor-pointer"
                          >
                            <span
                              aria-hidden="true"
                              className="absolute inset-0 z-10"
                            />
                            {item.name}
                          </p>
                          <p aria-hidden="true" className="mt-1">
                            Shop now
                          </p>
                        </div>
                      ))}
                    </div>
                    {category.sections.map((section) => (
                      <div key={section.name}>
                        <p
                          id={`${category.id}-${section.id}-heading-mobile`}
                          className="font-medium text-gray-900"
                        >
                          {section.name}
                        </p>
                        <ul
                          role="list"
                          aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                          className="mt-6 flex flex-col space-y-6"
                        >
                          {section.items.map((item) => (
                            <li key={item.name} className="flow-root">
                              <p
                                onClick={() =>
                                  handleCategoryClick(
                                    category.id,
                                    section.id,
                                    item.name
                                  )
                                }
                                className="-m-2 block p-2 text-gray-500 cursor-pointer"
                              >
                                {item.name}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>
          </DialogPanel>
        </div>
      </Dialog>

      <header className="relative z-10 bg-white">
        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <a href="#">
                  <span className="sr-only">Your Company</span>
                  <img
                    alt=""
                    className="h-8 w-auto"
                    src="https://i.pinimg.com/564x/80/a6/84/80a6846ed15fe79939da6bbf5ac27944.jpg"
                  />
                </a>
              </div>

              {/* Flyout menus */}
              <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <PopoverButton
                              className={`${
                                open
                                  ? "border-indigo-600 text-indigo-600"
                                  : "border-transparent text-gray-700 hover:text-gray-800"
                              } relative z-10 flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out`}
                            >
                              {category.name}
                            </PopoverButton>
                          </div>

                          <PopoverPanel className="absolute inset-x-0 top-full text-sm text-gray-500">
                            {/* Mega menu */}
                            <div
                              className="absolute inset-0 top-1/2 bg-white shadow"
                              aria-hidden="true"
                            />
                            <div className="relative bg-white">
                              <div className="mx-auto max-w-7xl px-8">
                                <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                  <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                    {category.featured.map((item) => (
                                      <div
                                        key={item.name}
                                        className="group relative text-base sm:text-sm"
                                      >
                                        <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                          <img
                                            alt={item.imageAlt}
                                            src={item.imageSrc}
                                            className="object-cover object-center"
                                          />
                                        </div>
                                        <p
                                          onClick={() => navigate(item.href)}
                                          className="mt-6 block font-medium text-gray-900 cursor-pointer"
                                        >
                                          <span
                                            aria-hidden="true"
                                            className="absolute inset-0 z-10"
                                          />
                                          {item.name}
                                        </p>
                                        <p aria-hidden="true" className="mt-1">
                                          Shop now
                                        </p>
                                      </div>
                                    ))}
                                  </div>
                                  <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                    {category.sections.map((section) => (
                                      <div key={section.name}>
                                        <p
                                          id={`${section.id}-heading`}
                                          className="font-medium text-gray-900"
                                        >
                                          {section.name}
                                        </p>
                                        <ul
                                          role="list"
                                          aria-labelledby={`${section.id}-heading`}
                                          className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                        >
                                          {section.items.map((item) => (
                                            <li
                                              key={item.name}
                                              className="flex"
                                            >
                                              <p
                                                onClick={() =>
                                                  handleCategoryClick(
                                                    category.id,
                                                    section.id,
                                                    item.name
                                                  )
                                                }
                                                className="hover:text-gray-800 cursor-pointer"
                                              >
                                                {item.name}
                                              </p>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </PopoverPanel>
                        </>
                      )}
                    </Popover>
                  ))}
                </div>
              </PopoverGroup>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Sign in
                  </a>
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Create account
                  </a>
                </div>

                <div className="hidden lg:ml-8 lg:flex">
                  <a
                    href="#"
                    className="flex items-center text-gray-700 hover:text-gray-800"
                  >
                    <img
                      alt=""
                      src="https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/india-flag-icon.png"
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium">INR</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon
                      aria-hidden="true"
                      className="h-6 w-6"
                    />
                  </a>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <a href="#" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      aria-hidden="true"
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      0
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
