import React, { Component } from 'react';
import { data } from './AddressListData'

class AddressList extends Component {
  showTableData(data) {
    const views = [];
    if (data) {
      data.map((item, key) => {
        views.push(
          <tr key={key}>
             <td className="address-list-td1">{item.corporateName}</td>
             <td className="address-list-td2">{item.corporateAddress}</td>
             <td className="address-list-td3">{item.corporatePhone}</td>
          </tr>
        )
      })
    }
    return views;
  }
  render() {
    return (
      <div>
        <div className="address-list-table-title">分公司地址及联系方式</div>
        <table className="address-list-table" cellspacing="0" cellpadding="0">
        <tbody>
          {this.showTableData(data)}
        </tbody>
       </table>
      </div>
    );
  }
}

export default AddressList;
