import React,{Component} from 'react'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
class Customer extends Component
{
    render()
    {
        var customer=this.props.data
        return(
            <TableRow>
                <TableCell><p>{customer.id}</p></TableCell>
                <TableCell><img src={customer.image} alt='profile'/></TableCell>
                <TableCell><p>{customer.name}</p></TableCell>
                <TableCell><p>{customer.birthday}</p></TableCell>
                <TableCell><p>{customer.sex}</p></TableCell>
                <TableCell><p>{customer.job}</p></TableCell>
            </TableRow>

        )
    }
}

export default Customer