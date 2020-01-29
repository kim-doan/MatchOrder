// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
//custom icons
import Home from  "@material-ui/icons/Home"
import Setting from "@material-ui/icons/Settings";
import Store from "@material-ui/icons/Store";

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
    sidebarName: "HOME",
    navbarName: "HOME",
    icon: Home,
    component: TableList
  },
  {
    path: "/user",
    sidebarName: "환경설정",
    navbarName: "환경설정",
    icon: Setting,
    component: UserProfile
  },
  {
    path: "/product",
    sidebarName: "상품관리",
    navbarName: "상품관리",
    icon: "card_giftcard",
    component: TableList
    //component: MaterialTable
  },
  {
    path: "/order",
    sidebarName: "발주관리",
    navbarName: "발주관리",
    icon: "content_paste",
    component: TableList
    //component: MaterialTable
  },
  {
    path: "/cs",
    sidebarName: "C/S",
    navbarName: "C/S",
    icon: "library_books",
    component: DashboardPage
    //component: MaterialTable
  },
  {
    path: "/calculate",
    sidebarName: "정산",
    navbarName: "정산",
    icon: "attach_money",
    component: TableList
    //component: MaterialTable
  },
  {
    path: "/sales",
    sidebarName: "매출/통계",
    navbarName: "매출/통계",
    icon: "blur_off",
    component: NotificationsPage
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
