import React, { FC, lazy, Suspense } from 'react';
import './assets/css/global.scss'
import { useSelector } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import 'bootstrap/dist/css/bootstrap.min.css';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#2196f3',
      dark: '#002884',
      contrastText: '#fff',

    },

    error: {
      main: "#FF0000"
    }

  },
  typography: {
    fontFamily: ['source_sans_proregular', 'source_sans_prosemibold',].join(','),
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          height: 35,
          width: 180,


          '& label.Mui-focused': {
            color: '#96bb3d',

            // height: 35,


          },

          // },
          '& .MuiOutlinedInput-root': {

            '&:hover fieldset': {
              borderColor: '#9e9e9e',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#9e9e9e',
            },
          },
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          height: 35,
          fontSize: 12,

        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          // alignItems: 'center',
          height: 35,
          fontSize: 12,
          backgroundColor: '#FFFFFF',

        }
      }
    },

    MuiFormControl: {
      styleOverrides: {
        root: {
          height: 35,
          fontSize: 12,

        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: 'green'

        }
      }
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          backgroundColor: '#FFFFFF',
          height: 15,
          fontSize: 12,

        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: 12,

        }
      }
    },
    MuiList: {
      styleOverrides: {
        root: {
          fontSize: 12,

        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: 12,

        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#EFEFEF",
          color: "white",
          fontWeight: 800,
          fontFamily: "source_sans_proregular",
          fontSize: 14,
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          height: 0.1,

        }
      }
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          height: 45,
        }
      }
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          height: 45,

        }
      }
    },
    MuiTable: {
      styleOverrides: {
        root: {
          height: 45,

        }
      }
    },




  },

  shape: {
    borderRadius: 7
  },


});


const Home = lazy(() => import('./pages/Home'));

const App: FC = () => {
  // const isLoggedIn = useSelector(
  //   (state: any) => state.auth.isAuthenticated
  // );
  const isLoggedIn = localStorage.getItem("token") ? true : false


  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>

  );
}


export default App;


