// Sidebar links
export const sidebarLinks = {
  instructions: [
    {
      path: "/instructions",
      title: "Instructions",
      subcategories: [
        {
          path: "instructions/introduction",
          title: "Introduction",
        },
        {
          path: "instructions/getting-started",
          title: "Getting Started",
        },
        {
          path: "instructions/customization",
          title: "Customization",
        },
      ],
    },
  ],
  frontend: [
    {
      path: "/frontend/components",
      title: "Components",
      subcategories: [
        { path: "/frontend/components/avatar", title: "Avatar" },
        { path: "/frontend/components/button", title: "Button" },
        { path: "/frontend/components/modal", title: "Modal" },
        { path: "/frontend/components/form", title: "Form" },
        { path: "/frontend/components/searchbar", title: "Search Bar" },
        { path: "/frontend/components/card", title: "Card" },
        { path: "/frontend/components/carousel", title: "Carousel" },
        { path: "/frontend/components/checkbox", title: "Checkbox" },
        { path: "/frontend/components/input", title: "Input" },
        { path: "/frontend/components/spinner", title: "Spinner" },
        { path: "/frontend/components/switch", title: "Switch" },
        { path: "/frontend/components/image", title: "Image" },
        { path: "/frontend/components/accordion", title: "Accordion" },
        { path: "/frontend/components/product-card", title: "Product Card" },
      ].sort((a, b) => a.title.localeCompare(b.title)),
    },
    // {
    //   path: "/frontend/hooks",
    //   title: "Hooks",
    //   subcategories: [
    //     { path: "/frontend/hooks/hook1", title: "Hook1" },
    //     { path: "/frontend/hooks/hook2", title: "Hook2" },
    //   ],
    // },
    // { path: "/frontend/routes", title: "Routes" },
  ],

  backend: [
    { path: "/backend/configurations", title: "Configurations" },
    {
      path: "/backend/controllers",
      title: "Controllers",
      subcategories: [
        {
          path: "/Backend/Controllers/Users",
          title: "Users",
        },
        {
          path: "/Backend/Controllers/Schedule",
          title: "Schedule",
        },
        {
          path: "/Backend/Controllers/ServiceRequest",
          title: "Service Request",
        },
      ],
    },
    { path: "/backend/middlewares", title: "Middleware" },
    { path: "/backend/models", title: "Models" },
    { path: "/backend/tests", title: "Tests" },
    { path: "/backend/utils", title: "Utils" },
    { path: "/backend/envFiles", title: "EnvFiles" },
  ],
};

// Navbar links
export const navbarLinks = [
  { path: "/instructions", title: "Instructions" },
  { path: "/frontend/components/button", title: "Frontend" },
  { path: "/backend/configurations", title: "Backend" },
];
