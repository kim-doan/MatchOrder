import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';
import PostCode from '../PostCode/PostCode';
const useStyles = makeStyles(theme => ({
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
    },
}));
export default function AddressForm() {
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();
    const handleOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };
    // const [state,setState] = React.useState({
    //     userParam : {
    //         username
    //     }
    // })
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
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="password"
            name="Password"
            label="비밀번호"
            fullWidth
            autoComplete="password"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="pwdChk"
            name="Password Check"
            label="비밀번호 체크"
            fullWidth
            autoComplete="pwdChk"
          />
        </Grid>
        <Grid item xs={6}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="circulation" value="Y" />}
            label="유통"
          />
        </Grid>
        <Grid item xs={6}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="sale" value="Y" />}
            label="판매"
          />
        </Grid>
      </Grid>
      <br></br><br></br>
      <Typography variant="h6" gutterBottom>
        사업자 정보
      </Typography>
      <Grid container spacing={3}>
      <Grid item xs={4}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="circulation" value="Y" />}
            label="개인사업자"
          />
        </Grid>
        <Grid item xs={4}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="sale" value="Y" />}
            label="법입사업자"
          />
        </Grid>
        <Grid item xs={4}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="circulation" value="Y" />}
            label="개인"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="company_name"
            name="companyName"
            label="회사명"
            fullWidth
            autoComplete="companyName"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="repressntative"
            name="repressntative"
            label="대표자성함"
            fullWidth
            autoComplete="repressntative"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="officeno"
            name="officeno"
            label="사업자등록번호"
            fullWidth
            autoComplete="officeno"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="business_type/business"
            name="business_type/business"
            label="업태/업종"
            fullWidth
            autoComplete="business_type/business"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="tel"
            name="tel"
            label="대표 전화번호"
            fullWidth
            autoComplete="tel"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="fax"
            name="fax"
            label="대표 팩스번호"
            fullWidth
            autoComplete="fax"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="addr"
            name="addr"
            label="주소"
            fullWidth
            autoComplete="addr"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="detail_addr"
            name="detail_addr"
            label="상세 주소"
            fullWidth
            autoComplete="detail_addr"
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <TextField
            required
            id="addr_num"
            name="addr_num"
            label="우편번호"
            fullWidth
            autoComplete="addr_num"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button variant="contained" color="primary" onClick={handleOpen}>우편번호 찾기</Button>
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
          />
        </Grid>
      </Grid>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <PostCode/>
          </div>
        </Fade>
      </Modal>
    </React.Fragment>
    
  );
}