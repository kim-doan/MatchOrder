import React, { Component, useEffect } from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import MaterialTable from 'material-table';
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import axios from 'axios';
import { MuiPickersUtilsProvider, TimePicker, DatePicker, DateTimePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import moment from 'moment';

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

function TableList() {

  var date = new Date();
  var mm = date.getMonth() +1;
  var dd = date.getDate();
  var yy = date.getFullYear();

  var nowDate = yy + '-' + mm + '-' + dd;

  const [state, setState] = React.useState({
    columns: [
      { 
        title: '입고일시', 
        field: 'wearingdate', 
        defaultSort: 'desc', 
        type: 'date', 
        //render: rowData => moment(rowData.validated_at).format('YYYY-MM-DD'),
        editComponent: props => (
          <MuiPickersUtilsProvider utils={DateFnsUtils} 
                      locale={props.dateTimePickerLocalization}>
                 <DatePicker
                        format="yyyy-MM-dd"
                        value={props.value || null}
                        onChange={props.onChange}
                        clearable
                        InputProps={{
                                 style: {
                                      fontSize: 13,
                                 }
                        }}
                   />
            </MuiPickersUtilsProvider>
        ),
      },
      { title: '로트번호', field: 'lote_id'},
      { title: '중량(kg)', field: 'item_weight', type: 'numeric' },
      { title: '수량', field: 'item_quantity', type: 'numeric' },
      { title: '제품코드', field: 'item_code' },
      { title: '제품명', field: 'item_name' },
      { title: '규격', field: 'standard' },
      { title: '재질', field: 'material' },
      { title: '공정명', field: 'process_name' },
      { title: '단중', field: 'unitweight', type: 'numeric' },
      { 
        title: '납기일시', 
        field: 'duedate', 
        type: 'date', 
        //render: rowData => moment(rowData.validated_at).format('YYYY-MM-DD')
        editComponent: props => (
          <MuiPickersUtilsProvider utils={DateFnsUtils} 
                      locale={props.dateTimePickerLocalization}>
                 <DatePicker
                        format="yyyy-MM-dd"
                        value={props.value || null}
                        onChange={props.onChange}
                        clearable
                        InputProps={{
                                 style: {
                                      fontSize: 13,
                                 }
                        }}
                   />
            </MuiPickersUtilsProvider>
        ),
      },
      { title: '단가', field: 'item_cost', type: 'numeric' },
      { title: '금액', field: 'item_price', type: 'numeric' },
    ],
    data: [],
  });

  useEffect(() =>{
    
    axios.get('/api/item/1')
    .then( response => {
      var output = response && response.data;
      
      const newState = Object.assign({}, state);
      newState.data = output.list;
      setState(newState);
    })
    .catch( response => {
      console.log(response);
    })
  },[]);

  return (
    <MaterialTable
      title="재고현황"
      columns={state.columns}
      data={state.data}
      

      localization={{
        header: {
          actions: 'CRUD'
        },
        pagination: {
          labelRowsSelect: '개의 아이템',
          labelDisplayedRows: '{from}-{to} 페이지 중 {count}',
          firstAriaLabel: '첫번째 페이지',
          firstTooltip: '첫번째 페이지',
          previousAriaLabel: '이전 페이지',
          previousTooltip: '이전 페이지',
          nextAriaLabel: '다음 페이지',
          nextTooltip: '다음 페이지',
          lastAriaLabel: '마지막 페이지',
          lastTooltip: '마지막 페이지'
        },
        toolbar: {
          searchTooltip: '검색',
          searchPlaceholder: '재고 검색'
        },
        body: {
          addTooltip: '재고추가',
          deleteTooltip: '재고삭제',
          editTooltip: '재고정보 변경',
          emptyDataSourceMessage: '현재 데이터가 없습니다. (서버환경을 확인해주세요.)',
          editRow: {
            deleteText: '해당 데이터를 정말로 삭제하시겠습니까?',
            cancelTooltip: '취소',
            saveTooltip: '저장'
          }
        }
      }}
      
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];

                newData.user_id = '1'; // 회원 아이디

                axios.post('/api/item', newData)
                .then( response => {
                  var output = response && response.data;
                  
                  if(output.success == true) {
                    alert("재고 추가에 " + output.msg);
                  } else {
                    alert("알수 없는 오류로 실패했습니다.");
                  }
                })
                .catch( response => {
                  console.log(response);
                })
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];

                  console.log(newData);
                  axios.put('/api/item', newData)
                  .then( response => {
                    var output = response && response.data;
                    
                    if(output.success == true) {
                      alert("재고 수정에 " + output.msg);
                    } else {
                      alert("알수 없는 오류로 실패했습니다.");
                    }
                  })
                  .catch( response => {
                    console.log(response);
                  })

                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];

                var indexId = state.data[data.indexOf(oldData)].id;
                axios.delete('/api/item/' + indexId)
                .then( response => {
                  var output = response && response.data;
                  
                  if(output.success == true) {
                    //alert("재고 삭제에 " + output.msg);
                  } else {
                    alert("알수 없는 오류로 실패했습니다.");
                  }
                })
                .catch( response => {
                  console.log(response);
                })
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}

export default withStyles(styles)(TableList);
