import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Checkbox from "@material-ui/core/Checkbox";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import customSelectStyle from "assets/jss/material-dashboard-pro-react/customSelectStyle.js";
import customCheckboxRadioSwitch from "assets/jss/material-dashboard-pro-react/customCheckboxRadioSwitch.js";

const style = {
  root: {
    width: "100%",
    maxHeight: "50%"
  },
  infoText: {
    fontWeight: "300",
    margin: "10px 0 30px",
    textAlign: "center"
  },
  inputAdornmentIcon: {
    color: "#555"
  },
  choiche: {
    textAlign: "center",
    cursor: "pointer",
    marginTop: "20px"
  },
  upStyle: {
    padding: "10px"
  },
  ...customSelectStyle,
  ...customCheckboxRadioSwitch
};

class CheckStep1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simpleSelect: "",
      desgin: false,
      code: false,
      develop: false,
      checkedA: false,
      checkedB: false,
      checkedC: false
    };
  }
  sendState() {
    return this.state;
  }
  handleChange = name => event => {
    if (name === "checkedA") {
      this.setState({ ["checkedA"]: event.target.checked });
      this.setState({ ["checkedB"]: event.target.checked });
      this.setState({ ["checkedC"]: event.target.checked });
    } else if (name === "checkedB") {
      this.setState({ [name]: event.target.checked });
      if (event.target.checked === this.state.checkedC) {
        this.setState({ ["checkedA"]: event.target.checked });
      } else {
        this.setState({ ["checkedA"]: false });
      }
    } else if (name === "checkedC") {
      this.setState({ [name]: event.target.checked });
      if (event.target.checked === this.state.checkedB) {
        this.setState({ ["checkedA"]: event.target.checked });
      } else {
        this.setState({ ["checkedA"]: false });
      }
    }
  }
  isValidated() {
    if (this.state.checkedA) { return true; }
    return false;
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <h4 className={classes.infoText}>이용약관</h4>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={12} >
            <div className={classes.upStyle}>
              <FormControlLabel
                control={
                  <Checkbox checked={this.state.checkedA} onChange={this.handleChange('checkedA')} value="checkedA" />
                }
                label="이용약관(필수), 개인정보 수집 및 이용(필수)에 모두 동의합니다."
              /></div></GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <GridContainer>
              <GridItem xs={12} sm={12}>
                <div className={classes.root}>
                  <ExpansionPanel>
                    <ExpansionPanelSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-label="Expand"
                      aria-controls="additional-actions1-content"
                      id="additional-actions1-header"
                    >
                      <FormControlLabel
                        aria-label="Acknowledge"
                        onClick={event => event.stopPropagation()}
                        onFocus={event => event.stopPropagation()}
                        control={<Checkbox checked={this.state.checkedB} onChange={this.handleChange('checkedB')} value="checkedB" />}
                        label="발주모아 이용약관 동의 (필수)"
                      />
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography color="textSecondary" variant="body2" gutterBottom>
                        제 1조 [목적]
                        본 약관은 (이하 “회사”)이 제공하는 발주모아 서비스(이하 "서비스")의 이용과 관련하여 회사와 이용자의 권리ㆍ의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.

                        제 2조 [용어의 정의]
                        본 약관에서 사용하는 용어의 정의는 다음과 같습니다.

                        1. 서비스 : 이용자가 주문서, 발주서의 엑셀파일 전송을 편리하게 발송 및 주문조회 할 수 있도록 자동발주, 송장 메일 회신, 주문검색 등을 할 수 있는 서비스를 말합니다.
                        2. 이용자 : 본 약관에 따라 회사와 서비스 이용계약을 체결하고 회사가 제공하는 서비스를 이용하는 개인 또는 기업을 의미합니다.
                        3. 아이디(ID) : 이용자 식별과 이용자의 서비스 이용을 위하여 이용자가 선정하고 회사가 승인하는 문자와 숫자의 조합을 의미합니다.
                        4. 비밀번호 : 아이디(ID)와 일치된 이용자임을 확인하고, 이용자의 비밀을 보호하기 위해 이용자가 설정한 문자와 숫자의 조합을 의미합니다.
                        5. 스팸 : 수신자가 원하지 않는데도 불구하고 정보통신망을 통해 일방적으로 전송 또는 게시되는 영리목적의 광고성 정보를 말합니다.
                        6. 피싱메시지 : 메시지 내용 중 인터넷 주소를 클릭하면 악성코드가 설치되어 수신자가 모르는 사이에 금전적 피해 또는 개인·금융정보 탈취 피해를 야기하는 메시지를 말합니다.
                        제 3조 [약관의 게시와 개정]
                        ① 회사는 본 약관의 내용을 이용자가 쉽게 알 수 있도록 홈페이지 초기 화면(www.baljumoa.com)에 게시합니다.
                        ② 회사는 전기통신사업법, 약관 규제에 관한 법률, 개인정보보호법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률(이하 “정보통신망법”), 전자상거래 등에서의 소비자 보호에 관한 법률 등 관련법을 위배하지 않는 범위에서 본 약관을 개정할 수 있습니다.
                        ③ 회사가 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 제1항의 방식에 따라 그 개정약관의 적용일자 7일 전부터 적용일자 전까지 홈페이지에 공지합니다. 다만, 이용자의 권리 또는 의무에 관한 중요한 규정의 변경은 최소한 30일 전에 공지하고 이용자가 사전에 등록한 이메일, 전화번호로 메일, 문자메시지 등의 전자적 수단을 통해 별도로 명확히 통지하도록 합니다.
                        ④ 회사가 본 조 제3항에 따라 개정약관을 공지 또는 통지하면서 이용자에게 약관 변경 적용 일까지 거부의사를 표시하지 않으면 동의한 것으로 본다는 뜻을 명확하게 공지 또는 통지하였음에도 이용자가 명시적으로 거부의 의사표시를 하지 아니한 경우 이용자가 개정약관에 동의한 것으로 봅니다.
                        ⑤ 이용자가 개정약관의 적용에 동의하지 않을 경우 회사는 개정약관의 내용을 적용할 수 없으며, 이 경우 이용자는 이용계약을 해지할 수 있습니다. 다만, 기존 약관을 적용할 수 없는 특별한 사정이 있는 경우에는 회사는 이용계약을 해지할 수 있습니다.
                        ⑥ 본 약관은 이용자가 약관의 내용에 동의함으로써 효력이 발생하며 이용계약 종료 일까지 적용됩니다. 단, 채권 또는 채무관계가 있을 경우에는 채권, 채무의 완료 일까지로 규정합니다.
                        제 4조 [약관 외 준칙]
                        본 약관에서 정하지 않은 사항과 본 약관의 해석에 관하여는 전기통신사업법, 개인정보보호법, 정보통신망법, 전자상거래 등에서의 소비자보호에 관한 법률, 약관의 규제에 관한 법률 및 기타 관계법령 또는 상관례에 따릅니다.

                        제 5조 [이용계약의 체결]
                        ① 이용계약은 이용자가 되고자 하는 자(이하 "가입신청자")가 약관의 내용에 대하여 동의를 한 다음 회원가입신청을 하고 회사가 이러한 신청에 대하여 승낙함으로써 체결됩니다.
                        ② 제1항에 따른 회사 승낙에도 불구하고 이용자는 회사와 서비스 이용에 대한 상담 또는 회사가 정한 기간 동안 무료서비스를 이용할 수 있을 뿐 이용요금을 선납하기 전까지는 유료서비스의 이용을 개시할 수 없습니다.
                        ③ 회사는 가입신청자의 신청에 대하여 서비스 이용을 승낙함을 원칙으로 합니다. 다만, 회사는 다음 각 호에 해당하는 신청에 대하여는 승낙을 하지 않거나 사후에 이용계약을 해지할 수 있습니다.
                        1. 가입신청자가 본 약관에 의하여 이전에 이용자자격을 상실한 적이 있는 경우, 단 회사의 이용자 재가입 승낙을 얻을 경우에는 예외로 함
                        2. 실명이 아니거나 타인의 명의를 이용한 경우
                        3. 허위의 정보를 기재하거나, 회사가 제시하는 내용을 기재하지 않은 경우
                        4. 만 14세 미만의 가입자인 경우
                        5. 이용자가 서비스의 정상적인 제공을 저해하거나 다른 이용자의 서비스 이용에 지장을 줄 것으로 예상되는 경우
                        6. 이용자의 귀책사유로 인하여 승인이 불가능하거나 기타 규정한 제반 사항을 위반하며 신청하는 경우
                        7. 제20조 제3항에 의하여 회사로부터 계약해지를 당한 이후 1년이 경과하지 않은 경우
                        8. 기타 회사가 관련법령 등을 기준으로 하여 명백하게 사회질서 및 미풍양속에 반할 우려가 있음을 인정하는 경우
                        ④ 본 조 제1항에 따른 신청에 있어 회사는 이용자의 종류에 따라 전문기관을 통한 실명확인 및 본인인증을 요청하거나 증빙자료를 요청할 수 있습니다.
                        ⑤ 회사는 본 조 제3항 각호에 따라 이용신청이 이루어지지 않는지 관리·감독할 수 있습니다.
                        ⑥ 회사는 다음 각호에 해당하는 신청에 대해서는 승낙을 지연할 수 있습니다.
                        1. 회사의 설비에 여유가 없거나 기술적 장애가 있는 경우
                        2. 서비스 상의 장애 또는 서비스 이용요금 결제수단의 장애가 발생한 경우
                        3. 기타 회사가 재정적, 기술적으로 필요하다고 인정하는 경우
                        ⑦ 회사와 이용자가 서비스 이용에 관하여 별도의 계약을 체결한 경우, 당해 별도의 계약이 본 약관에 우선하여 적용됩니다.
                        제 6조 [개인정보 수집]
                        ① 회사는 적법하고 공정한 수단에 의하여 이용계약의 성립 및 이행에 필요한 최소한의 개인정보를 수집합니다.
                        ② 회사는 개인정보의 수집 시 관련법규에 따라 개인정보처리방침에 그 수집범위 및 목적을 사전 고지합니다.
                        ③ 회사는 서비스 화면에서 회사가 수집한 개인정보의 수집, 이용 또는 제공에 대한 동의를 철회할 수 있도록 필요한 조치를 취해야 합니다.
                        제 7조 [개인정보보호 의무]
                        ① 회사는 개인정보보호법, 정보통신망법 등 관계 법령이 정하는 바에 따라 이용자의 개인정보를 보호하기 위해 노력합니다.
                        ② 개인정보의 보호 및 사용에 대해서는 관련법 및 회사의 개인정보처리방침이 적용됩니다. 다만, 회사의 공식 사이트 이외의 링크된 사이트에서는 회사의 개인정보처리방침이 적용되지 않습니다.
                        제 8조 [이용자의 아이디 및 비밀번호의 관리에 대한 의무]
                        ① 이용자는 서비스 이용을 위한 아이디 및 비밀번호의 관리에 대한 책임, 본인 아이디의 제3자에 의한 부정사용 등 이용자의 고의 또는 과실로 인해 발생하는 모든 불이익에 대한 책임을 부담합니다.
                        ② 이용자에게 통보된 서비스 ID 또는 비밀번호에 의하여 발생되는 제3자에 의한 부정사용 또는 회사의 의사와 무관한 서비스 사용상의 불법행위 내지 과실에 대한 모든 책임은 이용자에게 있습니다. 다만, 회사의 고의 또는 과실이 있는 경우에는 그러하지 아니합니다.
                        ③ 회사는 이용자의 아이디가 개인정보 유출 우려가 있거나 반사회적 또는 미풍양속에 어긋나거나 회사 또는 회사의 운영자로 오인할 우려가 있는 경우 해당 아이디의 활용을 제한할 수 있습니다.
                        ④ 이용자는 아이디 및 비밀번호가 도용되거나 제3자가 사용하고 있음을 인지한 경우에는 이를 즉시 회사에 통지하고 회사의 안내에 따라야 합니다.
                        ⑤ 본 조 제4항의 경우에 해당 이용자가 회사에 그 사실을 통지하지 않거나 통지한 경우에도 회사의 안내에 따르지 않아 발생한 불이익에 대하여 회사는 책임지지 않습니다.
                        제 9조 [이용자 정보의 변경]
                        ① 이용자는 개인정보관리화면을 통하여 본인의 개인정보를 열람하고 수정할 수 있습니다. 다만, 서비스 관리를 위해 필요한 실명, 아이디 등은 홈페이지에 기재된 회사의 전화번호 또는 이메일로 수정을 요청하여야 합니다.
                        ② 이용자는 서비스 이용신청 시 기재한 사항이나 서비스 이용 과정에서 회사에 제공한 정보가 변경되었을 경우 본 조 제1항의 방법으로 이용자 정보를 변경하여야 하며, 변경사항을 수정하지 않아 발생한 불이익에 대하여 회사는 책임지지 않습니다.
                        제 10조 [이용자에 대한 통지]
                        ① 회사가 이용자에 대한 통지를 하는 경우 본 약관에 별도 규정이 없는 한 이용자의 등록된 이메일, 전화번호 등으로 통지할 수 있습니다.
                        ② 회사는 전체에 대한 통지의 경우 7일 이상 서비스 공지사항에 게시함으로써 제1항의 통지에 갈음할 수 있습니다.
                        ③ 이용자는 회사에 실제로 연락이 가능한 이메일, 전화번호 등의 정보를 제공하고 해당 정보들을 최신으로 유지하여야 하며 회사의 통지를 확인하여야 합니다.
                        제 11조 [회사의 의무]
                        ① 회사는 관련법과 본 약관이 금지하거나 미풍양속에 반하는 행위를 하지 않으며, 계속적이고 안정적으로 서비스를 제공하기 위하여 최선을 다하여 노력합니다.
                        ② 회사는 이용자가 안전하게 서비스를 이용할 수 있도록 개인정보 보호를 위해 보안시스템을 갖추어야 하며 개인정보처리방침을 공시하고 준수합니다.
                        ③ 회사는 서비스 제공과 관련하여 알고 있는 이용자의 개인정보를 이용자의 승낙 없이 제3자에게 누설, 배포하지 않습니다. 다만, 관계법령에 의한 관계기관으로부터의 요청 등 법률의 규정에 따른 적법한 절차에 의한 경우에는 그러하지 않습니다.
                        ④ 회사는 이용자에게 제공하는 서비스(무료 서비스 제외)를 계속적이고 안정적으로 제공하기 위하여 설비에 장애가 생기거나 멸실 되었을 때 지체 없이 이를 수리 또는 복구합니다. 다만, 천재지변이나 비상사태 등 부득이한 경우에는 서비스를 일시 중단하거나 영구 중지할 수 있습니다.
                        ⑤ 회사는 이용자로부터 제기되는 의견이나 불만이 정당하다고 인정할 경우에는 즉시 처리하여야 합니다. 다만, 즉시 처리가 곤란한 경우는 이용자에게 그 사유와 처리일정을 전자메일 등으로 통보하여야 합니다.
                        ⑥ 회사는 서비스 제공목적에 맞는 서비스 이용 여부를 확인하기 위하여 상시적으로 모니터링을 실시합니다.
                        제 12조 [이용자의 의무]
                        ① 이용자는 다음 행위를 하여서는 안 됩니다.
                        1. 서비스 이용 신청 또는 서비스 내용 변경 시 허위내용을 등록하는 행위
                        2. 타인의 정보나 명의를 도용하거나 부정하게 사용하는 행위
                        3. 다른 이용자의 개인정보를 동의 없이 수집, 저장, 공개하는 행위
                        4. 회사가 게시한 정보를 변경하거나 제3자에게 제공하는 행위
                        5. 회사 또는 제3자의 저작권 등 지식재산권에 대한 침해 행위
                        6. 회사 또는 제3자의 명예를 손상시키거나 업무를 방해하는 행위
                        7. 외설 또는 폭력적인 메시지, 팩스, 음성, 메일, 기타 공서양속에 반하는 정보를 서비스에 공개 또는 게시하는 행위
                        8. 회사의 동의 없이 본 약관의 목적 범위를 벗어나 영리를 목적으로 서비스를 사용하는 행위
                        9. 타인의 의사에 반하는 내용을 지속적으로 전송하는 행위
                        10. 범죄행위를 목적으로 하거나 범죄행위를 교사하는 행위
                        11. 선량한 풍속 또는 기타 사회질서를 해치는 행위
                        12. 현행 법령, 회사가 제공하는 서비스에 정한 약관, 이용안내 및 서비스와 관련하여 공지한 주의사항, 회사가 통지하는 사항, 기타 서비스 이용에 관한 규정을 위반하는 행위
                        13. 서비스의 안정적인 운영에 지장을 주거나 줄 우려가 있는 일체의 행위
                        14. 제3자에게 임의로 서비스를 임대하는 행위
                        15. 전기통신사업법 제84조의2 제1항을 위반하여 메시지 전송 시 발신번호를 변작하는 등 거짓으로 표시하는 행위
                        16. 서비스를 불법스팸 전송에 이용하는 행위
                        17. 기타 불법적이거나 부당한 행위
                        ② 이용자는 관계법, 본 약관의 규정, 이용안내 및 서비스와 관련하여 공지한 주의사항, 회사가 통지하는 사항 등을 준수하여야 하며, 기타 회사의 업무에 방해되는 행위를 하여서는 안 됩니다.
                        ③ 이용자는 회사가 정한 서비스 이용요금을 지정된 날짜에 납입할 의무가 있습니다.
                        ④ 이용자는 정보통신망법의 광고성 정보 전송 시 의무사항 및 회사의 이용약관을 준수하여야 합니다.
                        ⑤ 이용자는 불법스팸 전송 등 불법행위를 하거나 전기통신사업법 등 관련 법령을 준수하지 않아 발생하는 모든 민ㆍ형사상의 책임을 부담합니다.
                        ⑥ 전기통신사업법 제84조의2에 의거 이용자는 본인의 발신번호를 사전에 등록하고 등록된 번호로만 발송해야 하며, 메시지 전송 시 발신번호를 변작하는 등 거짓으로 표시하여서는 안됩니다.
                        제 13조 [불만처리]
                        ① 회사는 개인정보와 관련하여 이용자의 의견을 수렴하고 불만을 처리하기 위한 절차를 마련하여야 합니다.
                        ② 회사는 전화, 전자우편 또는 서비스 화면의 상담창구를 통하여 이용고객의 불만사항을 접수, 처리하여야 합니다.
                        제 14조 [서비스 제공]
                        ① 회사는 이용자에게 제공하는 서비스를 홈페이지에 게시합니다.
                        ② 서비스는 연중무휴, 1일 24시간 제공함을 원칙으로 합니다. 단, 회사는 서비스 제공에 필요한 경우 정기점검을 실시할 수 있으며 정기점검시간은 회사가 사전에 통지한 바에 따릅니다.
                        ③ 회사는 서비스를 일정범위로 분할하여 각 범위 별로 이용가능 시간을 별도로 지정할 수 있습니다. 다만 이러한 경우에는 그 내용을 사전에 공지합니다.
                        ④ 회사는 다음 각 호에 해당하는 경우 서비스의 전부 또는 일부를 제한하거나 중지할 수 있습니다.
                        1. 서비스용 설비의 보수 등 공사로 인한 부득이한 경우
                        2. 정전, 제반 설비의 장애 또는 이용량의 폭주 등으로 정상적인 서비스 이용에 지장이 있는 경우
                        3. 천재지변, 국가비상사태 등 불가항력적 사유가 있는 경우
                        4. 기타 서비스를 유지할 수 없는 중대한 사유가 발생한 경우
                        ⑤ 본 조 제4항의 경우 회사는 제10조에서 정한 방법으로 이용자에게 통지합니다. 다만, 회사가 사전에 통지할 수 없는 부득이한 사유가 있는 경우 사후에 통지할 수 있습니다.
                        ⑥ 회사는 서비스의 제공에 필요한 경우 정기점검을 실시할 수 있으며 정기점검시간은 서비스 제공 화면에 공지한 바에 따릅니다.
                        ⑦ 이용자의 서비스 이용기간, 서비스 이용요금, 납부절차 등은 별도의 서비스 약정서를 통하여 정합니다.
                        ⑧ 회사는 이용자의 무료서비스 이용 시 이용자가 업로드 하는 데이터를 관리해야 할 의무가 없으며 무료서비스 이용과 관련한 어떠한 책임도 부담하지 않습니다.
                        제 15조 [서비스의 변경 또는 중단]
                        ① 회사는 상당한 이유가 있는 경우에 회사의 정책상, 운영상, 기술상의 필요에 따라 제공하고 있는 서비스의 전부 또는 일부를 변경 또는 중단할 수 있으며, 이에 대하여 관련 법에 특별한 규정이 없는 한 이용자에게 별도 보상을 하지 않습니다.
                        ② 서비스의 내용, 이용방법, 이용시간에 대하여 변경 또는 중단이 있는 경우에는 변경 또는 중단 사유, 변경 또는 중단될 서비스의 내용 및 제공일자 등을 그 변경 또는 중단 전에 제10조의 방법으로 이용자에게 통지합니다.
                        제 16조 [서비스 이용의 제한 및 정지]
                        ① 회사는 주민등록법을 위반한 명의도용 및 결제도용, 저작권법을 위반한 불법프로그램의 제공 및 운영방해, 정보통신망법을 위반한 불법통신, 해킹, 악성프로그램의 배포, 접속권한 초과행위 등과 같이 관련법을 위반한 경우에는 즉시 영구이용정지를 할 수 있습니다. 본 항에 따른 서비스 이용정지 시 서비스 내의 혜택 및 권리 등도 모두 소멸되며 회사는 이에 대해 별도로 보상하지 않습니다.
                        ② 회사는 다음 각 호에 해당하는 경우에 이용자의 서비스 이용을 제한할 수 있습니다.
                        1. 이용자가 서비스 이용 기간 만료일 경과 후에도 이용요금을 납부하지 않을 경우
                        2. 제12조 규정에 의한 이용자의 의무를 이행하지 아니한 경우
                        3. 이용자의 이름 등 이용자 정보가 정확하지 않은 경우
                        4. 다른 이용자 또는 제3자의 지식재산권을 침해하거나 명예를 손상시킨 경우
                        5. 방송통신심의위원회의 시정요구가 있거나 불법선거운동과 관련하여 선거관리위원회의 유권해석을 받은 경우
                        6. 공공질서 및 미풍양속에 저해되는 내용을 고의로 유포시킨 경우
                        7. 이용자가 서비스를 임의로 재판매 하거나 변형하여 제3자가 이용하도록 하는 경우
                        8. 서비스를 이용하여 얻은 정보를 이용고객의 개인적인 이용 이외에 복사, 가공, 번역, 2차적 저작물 등을 제작하여 복제, 공연, 방송, 전시, 배포, 출판 등에 사용하는 경우
                        9. 기타 회사가 이용자로 부적당하다고 판단한 경우
                        ③ 회사가 본 조 제2항 내지 제3항의 규정에 의하여 서비스를 제한 또는 정지하는 경우, 그 사실을 이용자에게 사전 통보하여야 합니다. 다만, 사전에 통보하는 것이 곤란할 경우 이용정지 조치 후 통보할 수 있습니다.
                        ④ 회사는 12개월 이상 서비스를 이용하지 아니하는 이용자의 개인정보를 보호하기 위해 이용자의 계정을 휴면계정으로 분류하고 서비스 이용계약을 해지하거나 개인정보의 파기 또는 별도 분리보관 등 필요한 조치를 할 수 있습니다. 단, 휴면계정으로 분류된 이용자의 계정에 선불 충전금이 존재하는 경우, 회사는 해당 이용자의 선불 충전금의 상사소멸시효가 완성되는 시점에 서비스 이용계약을 해지할 수 있습니다.
                        ⑤ 회사는 휴면계정으로 분류되기 30일 전까지 개인정보가 파기되거나 분리되어 저장되는 사실과 기간 만료일 및 해당 개인정보의 항목을 이메일, 서면, 모사전송, 전화 또는 유사한 방법 중 하나의 방법으로 이용자에게 알리도록 합니다. (단, 이용자의 정보가 정확하지 않은 경우 알림 대상에서 제외될 수 있습니다.)
                        ⑥ 본 조에 의한 서비스 이용 정지 또는 이용 계약의 해지 시 데이터 삭제에 대한 책임은 이용자가 부담하며, 회사는 고의 또는 과실이 없는 한 데이터 삭제에 따른 책임을 부담하지 않습니다.
                        ⑦ 회사가 사업종목의 전환, 사업의 포기, 업체 간의 통합 등의 이유로 서비스를 제공할 수 없게 되는 경우, 회사는 제10조에서 정한 방법으로 이용자에게 통지하고 서비스를 종료할 수 있습니다.
                        제 17조 [이용요금 등의 종류]
                        ① 서비스 이용과 관련하여 이용자가 납부하여야 할 이용요금은 개별 서비스 약정서 또는 홈페이지에 게재한 바에 따릅니다. 단, 개별 서비스 약정서와 홈페이지에 게재된 이용요금이 상이한 경우 개별 서비스 약정서가 우선하여 적용됩니다.
                        ② 이용자가 서비스 이용 시 납입해야 하는 이용요금의 종류는 다음과 같습니다.
                        1. 가입비 : 신규 서비스 개통 또는 서비스 이용 중에 재설치, 변경을 하는 경우에 지급하는 1회성 요금
                        2. 기본 이용요금 : 서비스 종류별 정해져 있는 기본요금
                        3. 부가서비스 요금 : 서비스 종류 별 기준 초과에 따른 추가비용 또는 자동화 서비스 등 별도의 부가 서비스에 대한 이용요금
                        ③ 서비스 이용요금은 선불결제를 원칙으로 합니다.
                        ④ 이용자는 문자메시지 발송 서비스 이용 시 이용요금을 선불 충전하여 이용하여야 하며 문자메시지 서비스 이용요금은 서비스 화면에 게시한 바에 따릅니다.
                        ⑤ 이용자의 문자메시지 발송 서비스 이용요금은 이용자의 메시지 발송 성공 건수에 따라 계산되며, 성공 건수는 수신자가 속한 이동통신사에서 전달하는 성공 값을 기준으로 합니다.
                        제 18조 [불법 면탈 요금의 청구]
                        ① 이용자가 불법으로 서비스 이용요금 등을 면탈할 경우에는 면탈한 금액의 2배에 해당하는 금액을 청구합니다.
                        제 19조 [이용요금 등의 환불]
                        ① 회사는 서비스 이용요금 등의 과납 또는 오납이 있을 때에는 그 과납 또는 오납된 서비스 이용요금을 반환하고, 회사의 귀책사유로 과납 또는 오납이 발생한 경우에는 법정이율로서 적정이자를 함께 반환합니다.
                        ② 서비스 이용기간 중 서비스 이용계약이 중도 해지되는 경우, 회사는 이용자에게 잔여기간에 대한 서비스 이용요금을 일할 계산 하여 잔여금액을 환불하며, 서비스 약정기간에 따라 이용자가 서비스 이용요금을 할인 받았을 경우 잔여금액에서 할인 받은 금액을 공제하고 환불합니다. 단, 잔여금액보다 이용자가 할인 받은 금액이 더 클 경우, 이용자는 초과된 금액(=할인금액-잔여금액)을 ‘회사’에 즉시 지급하여야 합니다.
                        ③ 이용자가 선불 결제한 서비스 이용요금 중 가입비는 환불금액에서 제외하며, 회사가 무상으로 제공한 서비스 이용기간은 잔여기간에 포함되지 않습니다.
                        ④ 이용자가 문자서비스 이용을 위하여 충전한 선불 충전금의 잔액에 대한 환불을 요청하면 환불 받을 수 있습니다. 단, 이용자가 무료로 지급받은 충전금은 환불 받을 수 없습니다.
                        ⑤ 본 조 제2항 또는 제4항에 따른 환불 시에는 송금비용, PG수수료 등의 사유로 잔여금액의 10%이내 금액 또는 잔여금액이 10,000원 이내인 경우에는 1,000원을 공제한 금액을 환불하여 드립니다. 단, 회사의 귀책사유가 있는 경우에는 환불수수료가 공제되지 않습니다.
                        ⑥ 선불 충전한 이용자가 문자메시지의 발송을 완료하였을 경우에는 차감된 이용요금은 환불이 불가합니다.
                        ⑦ 문자메시지 발송 서비스 이용을 위한 선불 충전금은 마지막 사용일(충전 이후 사용이 없었을 경우 충전일)로부터 5년이 경과하면 소멸됩니다.
                        ※ 환불금액 = 이용요금 X (유료 기간으로부터 유료 제공 중단 요청일까지의 기간/유료 제공 기간)

                        제 20조 [이용계약 해지]
                        ① 이용자는 이용계약을 해지 하고자 할 때 본인이 직접 서비스를 통하여 신청하거나 전자우편, 전화 등의 방법을 통하여 회사에 신청하여야 합니다.
                        ② 회사는 본 조 제1항의 규정에 의하여 해지신청이 접수되면 즉시 이용계약을 해지합니다. 단, 별도의 채권·채무관계가 있을 경우에는 그러하지 아니합니다.
                        ③ 회사는 이용자가 다음 각 호에 해당할 경우에는 이용자의 동의 없이 이용계약을 해지할 수 있으며 그 사실을 이용자에게 통지합니다. 다만 회사가 긴급하게 해지할 필요가 있다고 인정하는 경우나 이용자의 귀책사유로 인하여 통지할 수 없는 경우에는 지체 없이 사후 통지로 대체 할 수 있습니다.
                        1. 타인의 명의로 서비스 계약을 체결하였거나 서비스 계약 체결 시 제출한 자료 및 정보가 허위 또는 누락 되었음이 확인된 경우
                        2. 이용자가 제12조를 포함한 본 약관을 위반하고 일정 기간 이내에 위반 내용을 해소하지 않는 경우
                        3. 회사의 서비스 제공목적 외의 용도로 서비스를 이용하거나 제3자에게 임의로 서비스를 임대한 경우
                        4. 방송통신위원회 또는 한국인터넷진흥원 등이 불법스팸의 전송사실을 확인하여 회사에게 서비스 계약 해지를 요청하는 경우
                        5. 이용자가 제12조 제6항을 위반하여 발신번호를 변작하는 등 거짓으로 표시한 경우
                        6. 제16조 규정에 의하여 이용정지를 당한 이후 1년 이내에 이용정지 사유가 재발한 경우
                        7. 회사의 이용요금 등의 납입청구에 대하여 이용자가 이용요금을 체납할 경우
                        ④ 이용자 또는 회사가 계약을 해지할 경우 관련법 및 개인정보처리방침에 따라 회사가 이용자 정보를 보유하는 경우를 제외하고는 해지 즉시 이용자의 모든 데이터는 소멸될 수 있으며, 소멸된 데이터는 어떤 경우에도 이용자에게 반환되지 않습니다.
                        제 21조 [각종 데이터의 보관기간]
                        회사는 이용자의 정상적인 서비스 이용 중 이용자가 저장하고 있는 자료에 대하여 아래와 같은 보관기간을 정하고 있습니다. 회사는 필요에 따라 이용자에게 사전 공지 후 보관기간을 변경할 수 있습니다.

                        데이터 항목	보관기간
                        주문정보
                        · 주문정보 수집일로부터 3개월이 경과 후 주문자 정보만 마스킹 처리

                        · 주문정보 수집일로부터 2년 경과 후 주문정보 완전 삭제

                        상품정보	유료 서비스 종료일로부터 6개월 경과 후 삭제
                        통계 데이터,
                        상품정보 변경 이력	데이터 생성 시점 기준 2년 경과 후 삭제
                        재고 데이터,
                        상품 송신 이력	데이터 생성 시점 기준 2년 경과 후 삭제
                        택배사 연동 내역	주문정보 수집일로부터 7일 경과 후 삭제
                        제 22조 [지식재산권]
                        ① 서비스 자체에 대한 지식재산권은 회사에 귀속됩니다. 다만, 이용자가 서비스 페이지에 게시하거나 등록한 자료의 지식재산권은 이용자에게 귀속됩니다.
                        ② 이용자가 서비스를 통하여 업로드하는 이미지나 자료가 제3자의 저작권 및 지식재산권을 침해하여서는 안되며 이로 인해 발생하는 모든 문제는 전적으로 이용자의 책임이며, 회사와 제3자 사이에 분쟁이 발생시 이용자의 비용으로 이를 보상 혹은 배상해야 합니다.
                        제 23조 [손해배상의 범위 및 청구]
                        ① 회사의 귀책사유로 인한 서비스의 장애 발생 시 이용자가 서비스를 연속 1시간 이상 이용하지 못하였을 경우 아래와 같이 장애가 발생한 시간에 따라 장애 발생 당시 이용 중인 서비스에 한해(Retail Version 또는 OpenPlus Version) 무상 기간을 제공합니다. 단, 보상의 한도는 무상 서비스 이용기간 최대 15일 제공을 초과하지 않습니다.
                        장애 발생 시간(연속)	보상 내용
                        1시간 이상 ~ 3시간 미만	무상 기간 3일 제공
                        3시간 이상 ~ 4시간 미만	무상 기간 6일 제공
                        4시간 이상 ~ 5시간 미만	무상 기간 9일 제공
                        5시간 이상 ~ 6시간 미만	무상 기간 12일 제공
                        6시간 이상	무상 기간 15일 제공
                        ② 전 1항의 서비스 장애 이외에 회사가 고의 또는 과실로 이용자에게 손해를 끼친 경우, 손해에 대하여 배상할 책임이 있습니다. 이 경우 이용자는 서비스 무상 이용 기간 제공 배상 또는 현금 배상의 방식 중 하나를 선택하고, 이용자에게 발생한 손해에 대한 배상 금액은 이용자와 회사가 합의하여 정합니다. 단, 각 배상 방식 별 손해배상의 한도는 아래의 각 호를 초과하지 않습니다.
                        1. 무상 서비스 이용 기간 제공 방식 배상 : 이용자의 손해배상 청구일로부터 최근 3개월 평균 이용요금(Retail Version 또는 OpenPlus Version)의 3배에 해당하는 무상 서비스 이용기간 제공
                        2. 현금 배상 : 이용자의 손해배상 청구일로부터 최근 3개월 평균 월 서비스 이용요금(Retail Version 또는 OpenPlus Version)의 2배에 해당하는 현금의 배상
                        ③ 회사는 그 손해가 천재지변 등 불가항력이거나 이용자의 고의 또는 과실로 인하여 발생된 때에는 손해배상을 하지 않습니다.
                        ④ 이용자가 고의 또는 과실로 회사에 손해를 끼친 경우, 이용자는 회사에 대하여 발생한 손해를 배상할 책임이 있습니다.
                        ⑤ 이용자는 불법스팸 전송 등 불법행위를 하거나 전기통신사업법 등 관련 법령을 준수하지 못해 발생하는 모든 민형사상의 책임을 부담하며, 회사는 면책됩니다.
                        ⑥ 손해배상의 청구는 회사에 청구사유, 청구금액 및 산출근거를 기재하여 전자우편, 전화 등으로 신청하여야 합니다.
                        ⑦ 회사 및 타인에게 피해를 주어 피해자의 고발 또는 소송 제기로 인하여 손해배상이 청구된 이용자는 회사 및 수사기관의 요청에 적극 협조하여야 합니다.
                        제 24조 [면책]
                        ① 회사는 다음 각 호의 경우로 서비스를 제공할 수 없는 경우 이로 인하여 이용자 또는 제3자에게 발생한 손해에 대해서는 책임을 부담하지 않습니다.
                        1. 천재지변 또는 이에 준하는 불가항력의 상태가 있는 경우
                        2. 서비스의 효율적인 제공을 위한 시스템 개선, 장비 증설 등 계획된 서비스 중지 일정을 사전에 공지한 경우
                        3. 이용자의 귀책사유로 서비스 이용에 장애가 있는 경우
                        4. 회사의 고의 과실이 없는 사유로 인한 경우
                        5. 회사에게 회선, 통신망, 전용선을 제공하고 있는 이동통신사 또는 부가통신사업자 측의 장애·귀책사유로 인한 서비스의 불완전 또는 불능으로 이용자 또는 제3자에게 야기된 손해
                        ② 회사는 이용자가 서비스를 통해 얻은 정보 또는 자료 등으로 인해 발생한 손해와 서비스를 이용하거나 이용할 것으로부터 발생하거나 기대하는 손익 등에 대하여 책임을 면합니다.
                        ③ 회사는 서비스 이용의 장애로 인하여 발생한 이용자의 부가적, 영업적인 손해에 대해서는 책임을 지지 않습니다.
                        ④ 회사는 이용자가 게시 또는 전송한 데이터의 내용에 대해서는 책임을 면합니다.
                        ⑤ 회사는 이용자 상호 간 또는 이용자와 제3자 상호 간에 서비스를 매개로 하여 거래 등을 한 경우에는 책임을 면합니다.
                        ⑥ 회사는 무료로 제공하는 서비스 이용과 관련하여 관련법에 특별한 규정이 없는 한 책임을 지지 않습니다.
                        ⑦ 회사는 이용자가 서비스 이용 종료 후 제20조에 따라 파기된 데이터와 이용자가 직접 삭제를 요청한 데이터에 대해서는 책임을 지지 않습니다.
                        ⑧ 회사는 이용자가 서비스를 통하여 전송한 메시지의 내용에 대해서는 그 정확성, 신뢰성, 시기적절성 등을 보장하지 않으며 해당 내용이 관현 법령을 위반하거나 제3자의 권리를 침해하는 경우 이에 대한 책임을 지지 않습니다.
                        ⑨ 회사는 회사의 고의 또는 과실이 없는 한 서비스를 활용하여 발송된 메시지 관련 발신자와 수신자 간 분쟁에 대하여 개입할 의무가 없으며 이로 인한 손해를 배상할 책임이 없습니다.
                        ⑩ 회사는 제16조에 따라 이용자의 서비스 이용을 정지 또는 제한하는 경우, 이용의 제한으로 발생할 수 있는 이용자의 손해 등에 대해서는 책임이 면제됩니다.
                        제 25조 [분쟁조정]
                        ① 회사와 이용자 간 제기된 소송은 대한민국법을 준거법으로 합니다.
                        ② 서비스 이용과 관련하여 회사와 이용자 간에 발생한 분쟁에 대해서는 민사소송법상의 주소지를 관할하는 법원을 합의관할로 합니다.
                        ③ 해외에 주소나 거소가 있는 이용자의 경우 회사와 이용자간 발생한 분쟁에 관한 소송은 전항에도 불구하고 대한민국 서울중앙지방법원을 관할법원으로 합니다.
                        부칙
                        본 약관은 2019년 02월 18일부터 적용됩니다.

                        · 서비스 이용약관 시행일자 : 2019년 02월 18일
                        · 서비스 이용약관 공고일자 : 2019년 01월 18일
                      </Typography>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                </div>
              </GridItem>
              <GridItem xs={12} sm={12}>
                <div className={classes.root}>
                  <ExpansionPanel>
                    <ExpansionPanelSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-label="Expand"
                      aria-controls="additional-actions2-content"
                      id="additional-actions2-header"
                    >
                      <FormControlLabel
                        aria-label="Acknowledge"
                        onClick={event => event.stopPropagation()}
                        onFocus={event => event.stopPropagation()}
                        control={<Checkbox checked={this.state.checkedC} onChange={this.handleChange('checkedC')} value="checkedC" />}
                        label="개인정보 수집 및 이용에 대한 안내 (필수)"
                      />
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography color="textSecondary" variant="body2" gutterBottom>
                        위드소프트 (이하 회사는) 고객의 개인정보를 중요시하며, "정보통신망 이용촉진 및 정보보호"에 관한 법률을 준수하고 있습니다. 회사는 개인정보취급방침을 통하여 고객이 제공하는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.

                        1. 수집하는 개인정보 항목
                        가. 수집하는 항목
                        회사는 회원가입, 상담, 서비스 신청 등을 위해 아래와 같은 개인정보를 수집하고 있습니다.
                        이름, 로그인ID, 비밀번호, 휴대전화번호, 이메일, 회사명, 회사전화번호, 서비스이용기록, 접속 로그, 결제기록
                        나. 개인정보 수집방법
                        홈페이지 (www.baljumoa.com)
                        2. 개인정보의 수집 및 이용목적
                        가. 이용목적
                        회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.
                        서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산, 구매 및 요금결제 또는 청구서 등 발송
                        나. 회원 관리
                        회원제 서비스 이용에 따른 본인확인, 불만처리 등 민원처리
                        다. 신규 서비스 개발 및 마케팅*광고에 활용
                        회사가 제공하는 신규 서비스 개발 및 맞춤 서비스 제공, 통계학적 특성에 따른 서비스 제공 및 광고 게재, 서비스의 유효성 확인, 이벤트 정보 및 참여기회 제공, 광고성 정보 제공, 접속빈도 파악, 실사업자 확인, 회원의 서비스이용에 대한 통계 를 통한 효율적 관리에 사용한다.
                        3. 개인정보의 보유 및 이용기간
                        가. 개인정보의 보유
                        원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존합니다.
                        나. 보존기간
                        · 보존항목 : 이름, 로그인ID, 비밀번호, 휴대전화번호, 이메일, 회사명, 회사전화번호, 결제기록
                        · 보존근거 : 서비스 재사용대비 기록관리
                        · 보존기간 : 6개월
                        · 보존항목 : 서비스 이용기록, 접속 로그
                        · 보존근거 : 서비스 재사용대비 기록관리
                        · 보존기간 : 1개월
                        4. 동의거부권 및 거부시 불이익
                        고객은 개인정보 수집/이용에 대하여 거부할 수 있는 권리가 있습니다. 단, 이에 대한 동의를 거부할 경우에는 서비스이용이 불가합니다.
                      </Typography>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                </div>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

CheckStep1.propTypes = {
  classes: PropTypes.object
};

export default withStyles(style)(CheckStep1);