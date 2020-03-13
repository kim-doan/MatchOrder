import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import DaumPostcode from 'react-daum-postcode';
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-dashboard-pro-react/views/regularFormsStyle";
const useStyles = makeStyles(styles);
const useModalStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: 800
  }
}));

export default function AddressForm() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('female');
  const [selectedEnabled, setSelectedEnabled] = React.useState("b");
  const [radioBiz, setRadioBiz] = React.useState("private");
  const [addrInfo, setAddrInfo] = React.useState({
    zonecode: ""
    , jibunAddress: ""
    , roadAddress: ""
  });
  const handleChangeEnabled = event => {
    setSelectedEnabled(event.target.value);
  };
  const radioBizHandleChangeEnabled = event => {
    setRadioBiz(event.target.value);
  };
  const handleAddress = (data) => {
    setAddrInfo(data);
    handleClose();
  }
  const classesModal = useModalStyles();

  const classes = useStyles();
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const radioChg = event => {
    setValue(event.target.value);
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        회원 정보
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="username"
            name="username"
            label="아이디"
            fullWidth
            autoComplete="username"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl component="fieldset" fullWidth>
            <form>
              <GridContainer>
                <GridItem xs={12} sm={4}>
                  <FormLabel className={classes.registRadio}> 계정유형 </FormLabel>
                </GridItem>
                <GridItem xs={12} sm={4}>
                  <FormControlLabel
                    control={
                      <Radio
                        checked={selectedEnabled === "a"}
                        onChange={handleChangeEnabled}
                        value="a"
                        name="radio button enabled"
                        aria-label="A"
                        icon={<FiberManualRecord className={classes.radioUnchecked} />}
                        checkedIcon={<FiberManualRecord className={classes.radioChecked} />}
                        classes={{
                          checked: classes.radio,
                          root: classes.radioRoot
                        }}
                      />
                    }
                    classes={{
                      label: classes.label,
                      root: classes.labelRoot
                    }}
                    label="유통"
                  />
                </GridItem>
                <GridItem xs={12} sm={4}>
                  <FormControlLabel
                    control={
                      <Radio
                        checked={selectedEnabled === "b"}
                        onChange={handleChangeEnabled}
                        value="b"
                        name="radio button enabled"
                        aria-label="B"
                        icon={
                          <FiberManualRecord
                            className={classes.radioUnchecked}
                          />
                        }
                        checkedIcon={
                          <FiberManualRecord
                            className={classes.radioChecked}
                          />
                        }
                        classes={{
                          checked: classes.radio,
                          root: classes.radioRoot
                        }}
                      />
                    }
                    classes={{
                      label: classes.label,
                      root: classes.labelRoot
                    }}
                    label="판매"
                  />
                </GridItem>
              </GridContainer>
            </form>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="password"
            name="Password"
            label="비밀번호"
            fullWidth
            autoComplete="password"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id="pwdChk"
            name="Password Check"
            label="비밀번호 체크"
            fullWidth
            autoComplete="pwdChk"
            variant="outlined"
          />
        </Grid>
      </Grid>
      <br></br><br></br>
      <Typography variant="h6" gutterBottom>
        사업자 정보
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormControlLabel
            control={
              <Radio
                checked={radioBiz === "private"}
                onChange={radioBizHandleChangeEnabled}
                value="private"
                name="radio button enabled"
                aria-label="private"
                icon={
                  <FiberManualRecord
                    className={classes.radioUnchecked}
                  />
                }
                checkedIcon={
                  <FiberManualRecord
                    className={classes.radioChecked}
                  />
                }
                classes={{
                  checked: classes.radio,
                  root: classes.radioRoot
                }}
              />
            }
            classes={{
              label: classes.label,
              root: classes.labelRoot
            }}
            label="개인사업자"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            control={
              <Radio
                checked={radioBiz === "corporation"}
                onChange={radioBizHandleChangeEnabled}
                value="corporation"
                name="radio button enabled"
                aria-label="corporation"
                icon={
                  <FiberManualRecord
                    className={classes.radioUnchecked}
                  />
                }
                checkedIcon={
                  <FiberManualRecord
                    className={classes.radioChecked}
                  />
                }
                classes={{
                  checked: classes.radio,
                  root: classes.radioRoot
                }}
              />
            }
            classes={{
              label: classes.label,
              root: classes.labelRoot
            }}
            label="법인사업자"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            control={
              <Radio
                checked={radioBiz === "individual"}
                onChange={radioBizHandleChangeEnabled}
                value="individual"
                name="radio button enabled"
                aria-label="individual"
                icon={
                  <FiberManualRecord
                    className={classes.radioUnchecked}
                  />
                }
                checkedIcon={
                  <FiberManualRecord
                    className={classes.radioChecked}
                  />
                }
                classes={{
                  checked: classes.radio,
                  root: classes.radioRoot
                }}
              />
            }
            classes={{
              label: classes.label,
              root: classes.labelRoot
            }}
            label="개인"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="company_name"
            name="companyName"
            label="회사명"
            fullWidth
            autoComplete="companyName"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="repressntative"
            name="repressntative"
            label="대표자성함"
            fullWidth
            autoComplete="repressntative"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="officeno"
            name="officeno"
            label="사업자등록번호"
            fullWidth
            autoComplete="officeno"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="business_type/business"
            name="business_type/business"
            label="업태/업종"
            fullWidth
            autoComplete="business_type/business"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="tel"
            name="tel"
            label="대표 전화번호"
            fullWidth
            autoComplete="tel"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="fax"
            name="fax"
            label="대표 팩스번호"
            fullWidth
            autoComplete="fax"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zonecode"
            name="zonecode"
            label="우편번호"
            fullWidth
            autoComplete="zonecode"
            value={addrInfo.zonecode}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Button variant="contained" color="primary" fullWidth onClick={handleOpen}>주소 검색</Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="jibunAddress"
            name="jibunAddress"
            label="지번 주소"
            fullWidth
            autoComplete="jibunAddress"
            value={addrInfo.jibunAddress}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="roadAddress"
            name="roadAddress"
            label="도로명 주소"
            fullWidth
            autoComplete="roadAddress"
            value={addrInfo.roadAddress}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="detailAddress"
            name="detailAddress"
            label="상세 주소"
            fullWidth
            autoComplete="detailAddress"
            value={addrInfo.detailAddress}
            variant="outlined"
          />
        </Grid>


      </Grid>
      <br></br><br></br>
      <Typography variant="h6" gutterBottom>
        담당자 정보
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={6}>
          <TextField
            required
            id="charge_name"
            name="charge_name"
            label="담당자명"
            fullWidth
            autoComplete="charge_name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            required
            id="charge_tel"
            name="charge_tel"
            label="담당자 연락처"
            fullWidth
            autoComplete="charge_tel"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="charge_tel"
            name="charge_tel"
            label="담당자 이메일"
            fullWidth
            autoComplete="charge_tel"
            variant="outlined"
          />
        </Grid>
      </Grid>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classesModal.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classesModal.paper}>
            <DaumPostcode
              onComplete={handleAddress}
            />
          </div>
        </Fade>
      </Modal>
    </React.Fragment>

  );
}