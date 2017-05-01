export default {
  options: {
    name: 'Storybox',
    url: 'https://github.com/isuvorov/storybox',
    goFullScreen: false,
    showLeftPanel: true,
    showDownPanel: true,
    showSearchBox: false,
    downPanelInRight: true,
    sortStoriesByKind: false,
  },
  info: true,
  knob: true,
  isomorphicStyles: true,
  utils: {
    default: {
      root: {
        position: 'absolute',
        height:'100%',
        width: '100%',
        backgroundSize: 'cover',
      },
    },
    controls: [
      {
        name: 'Backgrounds',
        type: 'bg',
        items: [
          {
            name: 'No',
            root: {
              background: 'transparent',
            }
          },
          {
            name: 'Image',
            root: {
              enable: true,
              backgroundImage: 'url("//mcheck.mgbeta.ru/images/bg3.jpg")',
            }
          },
          {
            name: 'Gray',
            root: {
              background: '#eeeeee',
            }
          }
        ]
      },
      {
        name: 'Centered',
        items: [
          {
            name: 'No',
          },
          {
            name: 'Yes',
            enable: true,
            root: {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }
          },
        ]
      },
      {
        name: 'Border',
        items: [
          {
            name: 'No',
          },
          {
            name: 'Yes',
            wrap: {
              border: '1px black dotted'
            }
          },
          {
            name: 'Marks',
            marks: true,
            enable: true,
          },
        ]
      },
      {
        name: 'Paddings',
        items: [
          {
            name: 'No',
            enable: true,
          },
          {
            name: '10px',
            wrap: {
              padding: 10,
            }
          },
          {
            name: '50px',
            wrap: {
              padding: 50,
            }
          },
        ]
      },
      {
        name: 'Width',
        items: [
          {
            name: 'No fix',
            enable: true,
          },
          {
            name: '320px',
            content: {
              width: 320,
            }
          },
          {
            name: '480px',
            content: {
              width: 480,
            }
          },
          {
            name: '768px',
            content: {
              width: 768,
            }
          },
          {
            name: '1000px',
            content: {
              width: 1000,
            }
          },
        ]
      }
    ]
  }
};
