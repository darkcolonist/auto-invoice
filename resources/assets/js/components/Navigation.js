import HomeIcon from '@mui/icons-material/Home';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import WelcomeSection from '../sections/WelcomeSection';
import AgentsListSection from '../sections/AgentsListSection';
import AutoInvoiceListSection from '../sections/AutoInvoiceListSection';
export default {
  top: [
    {
      label: "Home",
      icon: <HomeIcon />,
      url: "/",
      section: <WelcomeSection />
    },
    {
      label: "Automatic Invoices",
      icon: <BookmarkIcon />,
      url: "/autoinvoice",
      section: <AutoInvoiceListSection />
    },
  ]
  , bottom: []
};