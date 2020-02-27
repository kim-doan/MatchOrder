import Buttons from "views/Components/Buttons.js";
import Calendar from "views/Calendar/Calendar.js";
import Charts from "views/Charts/Charts.js";
import Dashboard from "views/Dashboard/Dashboard.js";
import ErrorPage from "views/Pages/ErrorPage.js";
import ExtendedForms from "views/Forms/ExtendedForms.js";
import ExtendedTables from "views/Tables/ExtendedTables.js";
import FullScreenMap from "views/Maps/FullScreenMap.js";
import GoogleMaps from "views/Maps/GoogleMaps.js";
import GridSystem from "views/Components/GridSystem.js";
import Icons from "views/Components/Icons.js";
import LockScreenPage from "views/Pages/LockScreenPage.js";
import LoginPage from "views/Pages/LoginPage.js";
import Notifications from "views/Components/Notifications.js";
import Panels from "views/Components/Panels.js";
import PricingPage from "views/Pages/PricingPage.js";
import RTLSupport from "views/Pages/RTLSupport.js";
import ReactTables from "views/Tables/ReactTables.js";
import RegisterPage from "views/Pages/RegisterPage.js";
import RegularForms from "views/Forms/RegularForms.js";
import RegularTables from "views/Tables/RegularTables.js";
import SweetAlert from "views/Components/SweetAlert.js";
import TimelinePage from "views/Pages/Timeline.js";
import Typography from "views/Components/Typography.js";
import UserProfile from "views/Pages/UserProfile.js";
import ValidationForms from "views/Forms/ValidationForms.js";
import VectorMap from "views/Maps/VectorMap.js";
import Widgets from "views/Widgets/Widgets.js";
import Wizard from "views/Forms/Wizard.js";
import Orderadd from "views/Order/Order_add.js";

//create/page
//발주등록
import OrderRegister from "views/Order/Order_add.js";
import OrderList from "views/Order/Order_list.js";
import SellerMatch from "views/Order/Sellermatch";
//빠른발주등록
import UnProductSearch from "views/Order/Order_add.js";
import Productlist from "views/Order/Order_list.js";
import UnOption from "views/Order/Sellermatch";
import OptionList from "views/Order/Sellermatch";
//발주관리
import TotalOrderpro from "views/Order/Order_add.js";
import NomalOrderpro from "views/Order/Order_list.js";
import PendingOrder from "views/Order/Sellermatch";
//발주현황
import TotalOrder from "views/Order/Order_add.js";
import OrderCreate from "views/Order/Order_list.js";
import MailSending from "views/Order/Sellermatch";
import MailApproved from "views/Order/Order_list.js";
import Trash from "views/Order/Sellermatch";
//송장등록현황
import InvoiceRegister from "views/Order/Order_add.js";
import UnInvoice from "views/Order/Order_list.js";
import InvoiceUpload from "views/Order/Sellermatch";
import SellerInvoice from "views/Order/Order_list.js";
//송장회신관리
import InvoiceReplyList from "views/Order/Order_add.js";
import PendingReply from "views/Order/Order_list.js";
//송장회신현황
import TotalInvoiceReply from "views/Order/Order_add.js";
import IRSCreate from "views/Order/Order_list.js";
import IRSMailSending from "views/Order/Sellermatch";
import IRSMailApproval from "views/Order/Order_list.js";
import IRSTrash from "views/Order/Order_list.js";
//송장회신관리
import BasicProductList from "views/Order/Order_add.js";
import ProductSeller from "views/Order/Order_list.js";
//CS관리
import CSList from "views/Order/Order_list.js";
//정산관리
import DeliveryHandwriting from "views/Order/Order_list.js";
import DeliveryUnculatedBreakdown from "views/Order/Order_list.js";
//판매사정산
import SellerSettlementTotal from "views/Order/Order_list.js";
import SellerSettlementHistory from "views/Order/Order_list.js";
import SellerSettlementStatus from "views/Order/Order_list.js";
//공급사정산
import SupplierSettlementTotal from "views/Order/Order_list.js";
import SupplierSettlementHistory from "views/Order/Order_list.js";
import SupplierSettlementStatus from "views/Order/Order_list.js";
//매출/통계
import SalesStatus from "views/Order/Order_list.js";
import ProductSalesStatus from "views/Order/Order_list.js";
import OptionSalesStatus from "views/Order/Order_list.js";
//채널별 매출/통계
import CSalesStatus from "views/Order/Order_list.js";
import CProductSalesStatus from "views/Order/Order_list.js";
import COptionSalesStatus from "views/Order/Order_list.js";
//옵션별 매출/통계
import OSalesStatus from "views/Order/Order_list.js";
import OProductSalesStatus from "views/Order/Order_list.js";
import OOptionSalesStatus from "views/Order/Order_list.js";
// @material-ui/icons
import Apps from "@material-ui/icons/Apps";
import DashboardIcon from "@material-ui/icons/Dashboard";
import DateRange from "@material-ui/icons/DateRange";
import GridOn from "@material-ui/icons/GridOn";
import Order from "@material-ui/icons/book";
import Image from "@material-ui/icons/Image";
import Place from "@material-ui/icons/Place";
import Timeline from "@material-ui/icons/Timeline";
import WidgetsIcon from "@material-ui/icons/Widgets";
import SettingIcon from "@material-ui/icons/Settings";


var dashRoutes = [
  {
    path: "/dashboard",
    name: "홈",
    icon: DashboardIcon,
    component: Dashboard,
    layout: "/admin"
  },
  {
    collapse: true,
    name: "발주관리",
    icon: Order,
    state: "pageCollapse",
    views: [
      {
        collapse: true,
        name: "발주등록",
        mini: "B",
        state: "orderCollapse",
        views: [
          {
            path: "/order_add",
            name: "발주서등록",
            mini: "OA",
            component: OrderRegister,
            layout: "/admin"
          },
          {
            path: "/order_state",
            name: "발주서등록현황",
            mini: "OS",
            component: OrderList,
            layout: "/admin"
          },
          {
            path: "/seller_match",
            name: "판매사매칭",
            mini: "SM",
            component: SellerMatch,
            layout: "/admin"
          }
        ]
      },
      {
        collapse: true,
        name: "빠른발주매칭",
        mini: "QM",
        state: "QMCollapse",
        views: [
          {
            path: "/qm_unknow1",
            name: "상품 미매칭건 조회/매칭",
            mini: "PS",
            component: UnProductSearch,
            layout: "/admin"
          },
          {
            path: "/qm_unknow2",
            name: "매칭상품조회",
            mini: "PL",
            component: Productlist,
            layout: "/admin"
          },{
            path: "/qm_unknow3",
            name: "옵션 미매칭건 조회/매칭",
            mini: "UO",
            component: UnOption,
            layout: "/admin"
          },{
            path: "/qm_unknow4",
            name: "매칭한 옵션 조회",
            mini: "OL",
            component: OptionList,
            layout: "/admin"
          }
        ]
      },
      {
        collapse: true,
        name: "발주관리",
        mini: "OM",
        state: "OMCollapse",
        views: [
          {
            path: "/om_unknow1",
            name: "발주처리(집계)",
            mini: "TO",
            component: TotalOrderpro,
            layout: "/admin"
          },
          {
            path: "/om_unknow2",
            name: "발주처리(일반)",
            mini: "NO",
            component: NomalOrderpro,
            layout: "/admin"
          },{
            path: "/om_unknow3",
            name: "발주보류조회",
            mini: "PO",
            component: PendingOrder,
            layout: "/admin"
          }
        ]
      },
      {
        collapse: true,
        name: "발주현황",
        mini: "OS",
        state: "OSCollapse",
        views: [
          {
            path: "/os_unknow1",
            name: "전체",
            mini: "T",
            component: TotalOrder,
            layout: "/admin"
          },
          {
            path: "/os_unkonw2",
            name: "발주서 생성",
            mini: "OC",
            component: OrderCreate,
            layout: "/admin"
          },{
            path: "/os_unkonw3",
            name: "메일 발송 중",
            mini: "MS",
            component: MailSending,
            layout: "/admin"
          },{
            path: "/os_unkonw4",
            name: "수신확인",
            mini: "MA",
            component: MailApproved,
            layout: "/admin"
          },{
            path: "/os_unkonw5",
            name: "휴지통",
            mini: "TR",
            component: Trash,
            layout: "/admin"
          }
        ]
      }
    ]
  },
  {
    collapse: true,
    name: "송장관리",
    icon: Image,
    state: "invoiceCollapse",
    views: [
      {
        collapse: true,
        name: "송장등록현황",
        mini: "IR",
        state: "invoiceRegisterCollapse",
        views: [
          {
            path: "/iv_unknow1",
            name: "송장 일괄등록",
            mini: "IR",
            component: InvoiceRegister,
            layout: "/admin"
          },
          {
            path: "/iv_unknow2",
            name: "송장미등록건",
            mini: "UI",
            component: UnInvoice,
            layout: "/admin"
          },
          {
            path: "/iv_unknow3",
            name: "송장업로드현황",
            mini: "IU",
            component: InvoiceUpload,
            layout: "/admin"
          },
          {
            path: "/iv_unknow4",
            name: "판매사별 회신현황",
            mini: "SI",
            component: SellerInvoice,
            layout: "/admin"
          }
        ]
      },
      {
        collapse: true,
        name: "송장회신관리",
        mini: "IR",
        state: "IRCollapse",
        views: [
          {
            path: "/ir_unknow1",
            name: "송장회신 대상조회",
            mini: "IR",
            component: InvoiceReplyList,
            layout: "/admin"
          },
          {
            path: "/ir_unknow2",
            name: "회신보류",
            mini: "PR",
            component: PendingReply,
            layout: "/admin"
          }
        ]
      },
      {
        collapse: true,
        name: "송장회신현황",
        mini: "IRS",
        state: "IRSCollapse",
        views: [
          {
            path: "/irs_unknow1",
            name: "전체",
            mini: "TIR",
            component: TotalInvoiceReply,
            layout: "/admin"
          },
          {
            path: "/irs_unknow2",
            name: "회신파일생성",
            mini: "IRC",
            component: IRSCreate,
            layout: "/admin"
          },
          {
            path: "/irs_unknow3",
            name: "메일발송중",
            mini: "IRM",
            component: IRSMailSending,
            layout: "/admin"
          },
          {
            path: "/irs_unknow4",
            name: "수신확인",
            mini: "IRA",
            component: IRSMailApproval,
            layout: "/admin"
          },
          {
            path: "/irs_unknow5",
            name: "휴지통",
            mini: "IRT",
            component: IRSTrash,
            layout: "/admin"
          }
        ]
      }
    ]
  },
  {
    collapse: true,
    name: "상품관리",
    icon: Apps,
    state: "productCollapse",
    views: [
      {
        path: "/product_list",
        name: "기본상품목록",
        mini: "PL",
        component: BasicProductList,
        layout: "/admin"
      },{
        path: "/product_seller_price",
        name: "판매사별 개별단가 설정",
        mini: "PSP",
        component: ProductSeller,
        layout: "/admin"
      }
    ]
  },
  {
    collapse: true,
    name: "C/S관리",
    icon: "content_paste",
    state: "formsCollapse",
    views: [
      {
        path: "/cs_list",
        name: "C/S 리스트",
        mini: "C/S",
        component: CSList,
        layout: "/admin"
      }
    ]
  },
  {
    collapse: true,
    name: "정산",
    icon: GridOn,
    state: "CalculateCollapse",
    views: [
      {
        collapse: true,
        name: "배송비",
        mini: "D",
        state: "DeliveryCollapse",
        views: [
          {
            path: "/d_unknow1",
            name: "배송비 수기 조정",
            mini: "DH",
            component: DeliveryHandwriting,
            layout: "/admin"
          },
          {
            path: "/d_unknow2",
            name: "배송비 미계산 내역",
            mini: "DUB",
            component: DeliveryUnculatedBreakdown,
            layout: "/admin"
          }
        ]
      },
       {
        collapse: true,
        name: "판매사 정산",
        mini: "SS",
        state: "SellerCollapse",
        views: [
          {
            path: "/ss_unknow1",
            name: "정산집계",
            mini: "SST",
            component: SellerSettlementTotal,
            layout: "/admin"
          },
          {
            path: "/ss_unknow2",
            name: "정산내역",
            mini: "SSH",
            component: SellerSettlementHistory,
            layout: "/admin"
          },
          {
            path: "/ss_unknow3",
            name: "정산현황",
            mini: "SSS",
            component: SellerSettlementStatus,
            layout: "/admin"
          }
        ]
      },
      {
        collapse: true,
        name: "공급사 정산",
        mini: "SU",
        state: "SupplierCollapse",
        views: [
          {
            path: "/su_unknow1",
            name: "정산집계",
            mini: "SUT",
            component: SupplierSettlementTotal,
            layout: "/admin"
          },
          {
            path: "/su_unknow2",
            name: "정산내역",
            mini: "SUH",
            component: SupplierSettlementHistory,
            layout: "/admin"
          },
          {
            path: "/su_unknow3",
            name: "정산현황",
            mini: "SUS",
            component: SupplierSettlementStatus,
            layout: "/admin"
          }
        ]
      }
    ]
  },
  {
    collapse: true,
    name: "매출/통계",
    icon: Place,
    state: "SalesStatisticsCollapse",
    views: [
      {
        collapse: true,
        name: "매출/통계",
        mini: "STS",
        state: "STSCollapse",
        views: [
          {
            path: "/sts_unknow1",
            name: "매출 현황",
            mini: "STS",
            component: SalesStatus,
            layout: "/admin"
          },
          {
            path: "/sts_unknow2",
            name: "상품별 매출 현황",
            mini: "SPS",
            component: ProductSalesStatus,
            layout: "/admin"
          },
          {
            path: "/sts_unknow3",
            name: "옵션별 매출 현황",
            mini: "SOS",
            component: OptionSalesStatus,
            layout: "/admin"
          }
        ]
      },
      {
        collapse: true,
        name: "채널별 매출/통계",
        mini: "CSTS",
        state: "ChanelSTSCollapse",
        views: [
          {
            path: "/csts_unknow1",
            name: "매출 현황",
            mini: "CSTS",
            component: CSalesStatus,
            layout: "/admin"
          },
          {
            path: "/csts_unknow2",
            name: "상품별 매출 현황",
            mini: "CSPS",
            component: CProductSalesStatus,
            layout: "/admin"
          },
          {
            path: "/csts_unknow3",
            name: "옵션별 매출 현황",
            mini: "CSOS",
            component: COptionSalesStatus,
            layout: "/admin"
          }
        ]
      },
      {
        collapse: true,
        name: "옵션별 매출/통계",
        mini: "OSTS",
        state: "OptionSTSCollapse",
        views: [
          {
            path: "/osts_unknow1",
            name: "매출 현황",
            mini: "OSTS",
            component: OSalesStatus,
            layout: "/admin"
          },
          {
            path: "/osts_unknow2",
            name: "상품별 매출 현황",
            mini: "OSPS",
            component: OProductSalesStatus,
            layout: "/admin"
          },
          {
            path: "/osts_unknow3",
            name: "옵션별 매출 현황",
            mini: "OSOS",
            component: OOptionSalesStatus,
            layout: "/admin"
          }
        ]
      }
    ]
  },
  {
    path: "/setting",
    name: "설정",
    icon: SettingIcon,
    component: Widgets,
    layout: "/admin"
  },
  {
    collapse: true,
    name: "기타",
    icon: Image,
    state: "etcCollapse",
    views: [
  {
    path: "/login-page",
    name: "Login Page",
    mini: "L",
    component: LoginPage,
    layout: "/auth"
  },
  {
    path: "/register-page",
    name: "Register Page",
    mini: "R",
    component: RegisterPage,
    layout: "/auth"
  },
      {
        path: "/google-maps",
        name: "Google Maps",
        mini: "GM",
        component: GoogleMaps,
        layout: "/admin"
      },
      {
        path: "/full-screen-maps",
        name: "Full Screen Map",
        mini: "FSM",
        component: FullScreenMap,
        layout: "/admin"
      },
      {
        path: "/vector-maps",
        name: "Vector Map",
        mini: "VM",
        component: VectorMap,
        layout: "/admin"
      },
      {
        path: "/regular-tables",
        name: "Regular Tables",
        mini: "RT",
        component: RegularTables,
        layout: "/admin"
      },
      {
        path: "/extended-tables",
        name: "Extended Tables",
        mini: "ET",
        component: ExtendedTables,
        layout: "/admin"
      },
      {
        path: "/react-tables",
        name: "React Tables",
        mini: "RT",
        component: ReactTables,
        layout: "/admin"
      },
      {
        path: "/regular-forms",
        name: "Regular Forms",
        mini: "RF",
        component: RegularForms,
        layout: "/admin"
      },
      {
        path: "/extended-forms",
        name: "Extended Forms",
        mini: "EF",
        component: ExtendedForms,
        layout: "/admin"
      },
      {
        path: "/validation-forms",
        name: "Validation Forms",
        mini: "VF",
        component: ValidationForms,
        layout: "/admin"
      },
      {
        path: "/wizard",
        name: "Wizard",
        mini: "W",
        component: Wizard,
        layout: "/admin"
      },
      {
        path: "/rtl-support-page",
        name: "RTL Support",
        mini: "RS",
        component: RTLSupport,
        layout: "/rtl"
      },
      {
        path: "/timeline-page",
        name: "Timeline Page",
        mini: "T",
        component: TimelinePage,
        layout: "/admin"
      },
      {
        path: "/lock-screen-page",
        name: "Lock Screen Page",
        mini: "LS",
        component: LockScreenPage,
        layout: "/auth"
      },
      {
        path: "/user-page",
        name: "User Profile",
        mini: "UP",
        component: UserProfile,
        layout: "/admin"
      },
      {
        path: "/error-page",
        name: "Error Page",
        mini: "E",
        component: ErrorPage,
        layout: "/auth"
      },
      {
        collapse: true,
        name: "Multi Level Collapse",
        mini: "MC",
        state: "multiCollapse",
        views: [
          {
            path: "/buttons",
            name: "Buttons",
            mini: "B",
            component: Buttons,
            layout: "/admin"
          }
        ]
      },
      {
        path: "/buttons",
        name: "Buttons",
        mini: "B",
        component: Buttons,
        layout: "/admin"
      },
      {
        path: "/grid-system",
        name: "Grid System",
        mini: "GS",
        component: GridSystem,
        layout: "/admin"
      },
      {
        path: "/panels",
        name: "Panels",
        mini: "P",
        component: Panels,
        layout: "/admin"
      },
      {
        path: "/sweet-alert",
        name: "Sweet Alert",
        mini: "SA",
        component: SweetAlert,
        layout: "/admin"
      },
      {
        path: "/notifications",
        name: "Notifications",
        mini: "N",
        component: Notifications,
        layout: "/admin"
      },
      {
        path: "/icons",
        name: "Icons",
        mini: "I",
        component: Icons,
        layout: "/admin"
      },
      {
        path: "/typography",
        name: "Typography",
        mini: "T",
        component: Typography,
        layout: "/admin"
      }
    ]
  },
//   {
//     path: "/charts",
//     name: "Charts",
//     rtlName: "الرسوم البيانية",
//     icon: Timeline,
//     component: Charts,
//     layout: "/admin"
//   },
//   {
//     path: "/calendar",
//     name: "Calendar",
//     rtlName: "التقويم",
//     icon: DateRange,
//     component: Calendar,
//     layout: "/admin"
//   }
];
export default dashRoutes;
