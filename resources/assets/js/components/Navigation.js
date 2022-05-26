import HomeIcon from '@mui/icons-material/Home';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import WelcomeSection from '../sections/WelcomeSection';
import AgentsListSection from '../sections/AgentsListSection';
import LeavesSection from "../sections/LeavesSection";
export default {
  top: [
    {
      label: "Home",
      icon: <HomeIcon />,
      url: "/",
      section: <WelcomeSection />
    },
    {
      label: "Agents",
      icon: <BookmarkIcon />,
      section: <AgentsListSection />
    },
    {
      label: "Leaves",
      icon: <BookmarkIcon />,
      section: <LeavesSection />
    },
  ]
  , bottom: []
};