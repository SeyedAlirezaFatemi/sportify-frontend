import { Button, Icon, Input, Table } from 'antd';
import * as React from "react";
import { Component, createRef } from "react";
import './TeamPlayersList.css';


const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  role: 'Goalkeeper',
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  role: 'Midfielder',
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  role: 'Midfielder',
}, {
  key: '4',
  name: 'Jim Red',
  age: 32,
  role: 'Midfielder',
}];

function onChange(pagination, filters, sorter) {
  console.log('params', pagination, filters, sorter);
}

class TeamPlayersList extends Component {
  public state = {
    searchText: '',
  };
  private searchInput = createRef<HTMLInputElement>();

  public render(): React.ReactNode {
    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div className="custom-filter-dropdown">
          <Input
            // @ts-ignore
            ref={ele => this.searchInput = ele}
            placeholder="Search name"
            value={selectedKeys[0]}
            onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={this.handleSearch(selectedKeys, confirm)}
          />
          <Button type="primary" onClick={this.handleSearch(selectedKeys, confirm)}>Search</Button>
          <Button onClick={this.handleReset(clearFilters)}>Reset</Button>
        </div>
      ),
      filterIcon: filtered => <Icon type="search" style={{ color: filtered ? '#108ee9' : '#aaa' }} />,
      onFilter: (value, record) => record.name.toLowerCase().includes(value.toLowerCase()),
      onFilterDropdownVisibleChange: (visible) => {
        if (visible) {
          setTimeout(() => {
            // @ts-ignore
            this.searchInput.focus();
          });
        }
      },
      render: (text) => {
        const { searchText } = this.state;
        return searchText ? (
          <span>
            {text.split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i')).map((fragment, i) => (
              fragment.toLowerCase() === searchText.toLowerCase()
                ? <span key={i} className="highlight">{fragment}</span> : fragment // eslint-disable-line
            ))}
          </span>
        ) : text;
      },
    }, {
      title: 'Age',
      dataIndex: 'age',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.age - b.age,
    }, {
      title: 'Role',
      dataIndex: 'role',
      filters: [{
        text: 'Goalkeeper',
        value: 'Goalkeeper',
      }, {
        text: 'Defender',
        value: 'Defender',
      }, {
        text: 'Midfielder',
        value: 'Midfielder',
      }, {
        text: 'Forward',
        value: 'Forward',
      }],
      onFilter: (value, record) => record.role.indexOf(value) === 0,
      sorter: (a, b) => a.role.length - b.role.length,
    }];
    return (
      // @ts-ignore
      <Table columns={columns} pagination={false} dataSource={data} onChange={onChange}
             rowClassName={this.renderRowStyle} />
    )
  }

  private handleSearch = (selectedKeys, confirm) => () => {
    confirm();
    this.setState({ searchText: selectedKeys[0] });
  };

  private handleReset = clearFilters => () => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  private renderRowStyle = (record, index) => {
    return (index % 2 ? 'even' : 'odd');
  }
}

export default TeamPlayersList;