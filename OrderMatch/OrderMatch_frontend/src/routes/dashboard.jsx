// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import MaterialTable from "views/MaterialTable/MaterialTable.jsx"
import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
//Auth
import RegisterPage from "views/Register/Register.jsx";
import LoginPage from "views/Login/Login.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "대시보드",
    navbarName: "대시보드",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/user",
    sidebarName: "회원관리",
    navbarName: "회원관리",
    icon: Person,
    component: UserProfile
  },
  {
    path: "/table",
    sidebarName: "재고관리",
    navbarName: "재고관리",
    icon: "content_paste",
    component: TableList
    //component: MaterialTable
  },
  {
    path: "/icons",
    sidebarName: "Icons",
    navbarName: "Icons",
    icon: BubbleChart,
    component: Icons
  },
  // {
  //   path: "/maps",
  //   sidebarName: "Maps",
  //   navbarName: "Map",
  //   icon: LocationOn,
  //   component: Maps
  // },
  {
    path: "/notifications",
    sidebarName: "이상현황관리",
    navbarName: "이상현황관리",
    icon: Notifications,
    component: NotificationsPage
  },
  {
    path: "/login",
    sidebarName: "로그인",
    navbarName: "로그인",
    icon: Notifications,
    component: LoginPage
  },
  {
    path: "/register",
    sidebarName: "회원가입",
    navbarName: "회원가입",
    icon: Notifications,
    component: RegisterPage
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
