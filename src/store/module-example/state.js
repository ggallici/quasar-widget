export default () => ({
  menuItemDraggeado: null,
  items: [
    {
      id: 1,
      agregado: false,
      menuItem: {
        title: "Docs",
        caption: "quasar.dev",
        icon: "school"
      },
      gridItem: { w: 4, h: 1 },
      widget: {
        component: "WidgetTest1",
        props: { }
      }
    },
    {
      id: 2,
      agregado: false,
      menuItem: {
        title: "Github",
        caption: "github.com/quasarframework",
        icon: "code"
      },
      gridItem: { w: 1, h: 3 },
      widget: {
        component: "WidgetTest2"
      }
    },
    {
      id: 3,
      agregado: false,
      menuItem: {
        title: "Github",
        caption: "github.com/quasarframework",
        icon: "code"
      },
      gridItem: { w: 3, h: 2 },
      widget: {
        component: "WidgetTest2"
      }
    },
    {
      id: 4,
      agregado: false,
      menuItem: {
        title: "Github",
        caption: "github.com/quasarframework",
        icon: "code"
      },
      gridItem: { w: 3, h: 3 },
      widget: {
        component: "WidgetTest2"
      }
    },
    {
      id: 5,
      agregado: false,
      menuItem: {
        title: "Github",
        caption: "github.com/quasarframework",
        icon: "code"
      },
      gridItem: { w: 3, h: 5 },
      widget: {
        component: "WidgetTest2"
      }
    },
    {
      id: 6,
      agregado: false,
      menuItem: {
        title: "Github",
        caption: "github.com/quasarframework",
        icon: "code"
      },
      gridItem: { w: 7, h: 4 },
      widget: {
        component: "WidgetTest1"
      }
    },
  ]
})
