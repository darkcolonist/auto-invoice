// import AgentsListSection from '../sections/AgentsListSection';
// import AutoInvoiceListSection from '../sections/AutoInvoiceListSection';
// import WelcomeSection from '../sections/WelcomeSection';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HomeIcon from '@mui/icons-material/Home';
import loadable from '@loadable/component';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import SettingsIcon from '@mui/icons-material/Settings';
import { loadableParams } from './MyLoadable';

const kwa = { something: "fornothing" };

export default {
  top: [
    {
      label: "Home",
      icon: <HomeIcon />,
      url: "/",
      section: loadable(() => import("../sections/WelcomeSection"), loadableParams),
      exact: true
    },
    {
      label: "Automatic Invoices",
      icon: <BookmarkIcon />,
      url: "/autoinvoice",
      section: loadable(() => import("../sections/AutoInvoiceListSection"), loadableParams),
      exact: false
    },
  ]
  , 
  bottom: [
    {
      label: "Settings",
      icon: <SettingsIcon />,
      url: "/settings",
      section: loadable(() => import("../sections/UnderConstructionSection"), loadableParams),
      exact: false
    },
    {
      label: "Login",
      icon: <LoginIcon />,
      url: "/login",
      section: loadable(() => import("../sections/UnderConstructionSection"), loadableParams),
      exact: false
    },    
    {
      label: "Logout",
      icon: <LogoutIcon />,
      url: "/logout",
      section: loadable(() => import("../sections/UnderConstructionSection"), loadableParams),
      exact: false
    },
  ]
};