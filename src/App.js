import React,{Component} from 'react'
import Customer from './component/Customer'
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
const styles=theme=>(
  {
    root:{
      width: '100%',
      marginTop: theme.spacing.unit*3,
      overflowX: 'auto'
    },
    table:{
      minWidth: 1080
    },
  }
)
class App extends Component
{

  render(){
    const {classes}=this.props;
    const customer=
    [{
      'id':1,
      'image':'https://placeimg.com/64/64/1',
      'name':'김임임',
      'birthday':'1230902',
      'sex':'남성',
      'job':'대학생'
    },
    {
      'id':2,
      'image':'https://placeimg.com/64/64/2',
      'name':'이임임',
      'birthday':'530902',
      'sex':'여성',
      'job':'대학생'
    },
    {
      'id':3,
      'image':'https://placeimg.com/64/64/3',
      'name':'박임임',
      'birthday':'12902',
      'sex':'남성',
      'job':'대학생'
    }]
    return(
     
        <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
      {
        customer.map(c=>{
          return(
            <Customer
            data={c}
            />
          )
        })
      }
      </TableBody>
      </Table>
      </Paper>

    )
  }
}
export default withStyles(styles)(App);