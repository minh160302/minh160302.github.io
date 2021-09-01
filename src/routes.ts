import DescriptionIcon from '@material-ui/icons/Description';
import CodeIcon from '@material-ui/icons/Code';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import PersonIcon from '@material-ui/icons/Person';
import PhoneIcon from '@material-ui/icons/Phone';
import ColorLensIcon from '@material-ui/icons/ColorLens';
// components
import About from 'views/About';
import Projects from 'views/Projects';
import Resume from 'views/Resume';
import Contact from 'views/Contact';
import Playground from 'views/Playground';

const routes = [
  {
    path: "/about",
    name: "About",
    icon: PersonIcon,
    components: About
  },
  {
    path: "/projects",
    name: "Projects",
    icon: CodeIcon,
    components: Projects
  },
  {
    path: "/resume",
    name: "Resume",
    icon: DescriptionIcon,
    components: Resume
  },
  {
    path: "/contact",
    name: "Contact",
    icon: PhoneIcon,
    components: Contact
  },
  {
    path: "/playground",
    name: "Playground",
    icon: SportsEsportsIcon,
    components: Playground
  },
  {
    path: "/theme",
    name: "Theme",
    icon: ColorLensIcon,
    components: About
  }
]

export default routes;