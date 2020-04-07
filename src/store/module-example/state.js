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
      gridItem: { w: 2, h: 2 },
      widget: {
        component: "WidgetTest2"
      }
    }
  ]
})
