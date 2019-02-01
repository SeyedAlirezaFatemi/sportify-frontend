import { Button, Icon, Input, Table, } from 'antd';
import * as React from 'react';
import { Component, createRef } from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import './TeamPlayersList.css';


function onChange(pagination, filters, sorter) {
  console.log('params', pagination, filters, sorter);
}

class TeamPlayersList extends Component<any, any> {
  public state = {
    searchText: '',
  };

  private searchInput = createRef<HTMLInputElement>();

  public render(): React.ReactNode {
    const { sport } = this.props;
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
      render: (name, player) => {
        const { searchText } = this.state;
        return searchText ? (
          <Link to={`/player/${sport}/${player.id}`}>
            {name.split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i')).map((fragment, i) => (
              fragment.toLowerCase() === searchText.toLowerCase()
                ? <span key={i} className="highlight">{fragment}</span> : fragment // eslint-disable-line
            ))}
          </Link>
        ) : <Link to={`/player/${sport}/${player.id}`}>{name}</Link>;
      },
    }, {
      title: 'Age',
      dataIndex: 'age',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.age - b.age,
    }, {
      title: 'Position',
      dataIndex: 'position',
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
      }, {
        text: 'Coach',
        value: 'Coach',
      }, {
        text: 'Technical Personnel',
        value: 'Technical Personnel',
      }, {
        text: 'Point Guard',
        value: 'Point Guard',
      }, {
        text: 'Shooting Guard',
        value: 'Shooting Guard',
      }, {
        text: 'Forward',
        value: 'Forward',
      }, {
        text: 'Center',
        value: 'Center',
      }],
      onFilter: (value, record) => record.position.indexOf(value) === 0,
      sorter: (a, b) => a.position.length - b.position.length,
    }];
    return (
      // @ts-ignore
      <Table columns={columns} pagination={false} dataSource={this.props.players} onChange={onChange}
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
