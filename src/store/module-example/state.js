export default () => ({
  items: [
    {
      key: 1,
      agregado: true,
      menuItem: {
        title: "Docs",
        caption: "quasar.dev",
        icon: "school",
        link: "https://quasar.dev"
      },
      gridItem: { x: 0, y: 0, w: 4, h: 1 }, //X e Y tienen que ser dinamicos
      widget: {
        component: "WidgetTest1",
        props: { }
      }
    },
    {
      key: 2,
      agregado: true,
      menuItem: {
        title: "Github",
        caption: "github.com/quasarframework",
        icon: "code",
        link: "https://github.com/quasarframework"
      },
      gridItem: { x: 2, y: 0, w: 2, h: 2 },
      widget: {
        component: "WidgetTest2"
      }
    }
  ]
})
