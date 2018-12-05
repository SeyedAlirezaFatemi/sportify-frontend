import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Radio, Tabs } from 'antd';
import classnames from 'classnames';
import * as _ from 'lodash';
import * as React from 'react';

const TabPane = Tabs.TabPane;

const styles = theme => ({
  root: {
    flexGrow: 1,
    justifyContent: 'center',
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  subheader: {
    color: "#fff",
    textAlign: "center",
  },
  today: {
    background: "green",
  },
  yesterday: {
    background: "#666"
  }
});

class GamesList extends React.Component<any, any> {

  constructor(props) {
    super(props);
    this.state = {
      mode: 'soccer',
    };
  }


  public render(): React.ReactNode {
    const { mode } = this.state;
    const { classes } = this.props;
    const results: JSX.Element[] = [];
    _.times(20, () => results.push(this.renderGame()));
    return (
      <Grid container direction="column" className={classes.root} justify="center">
        <Grid item justify="center" container>
          <Radio.Group onChange={this.handleModeChange} value={mode} style={{ marginBottom: 8 }}>
            <Radio.Button value="soccer">Soccer</Radio.Button>
            <Radio.Button value="basketball">Basketball</Radio.Button>
          </Radio.Group>
        </Grid>
        <Grid item>
          <Tabs
            defaultActiveKey="1"
            tabPosition='left'
          >
            <TabPane tab="All" key="1">
              <List
                subheader={<ListSubheader
                  component="div"
                  className={classnames(classes.subheader, classes.today)}
                >Today</ListSubheader>}
              >
                {results}
              </List>
              <List
                subheader={<ListSubheader
                  component="div"
                  className={classnames(classes.subheader, classes.yesterday)}
                >Yesterday</ListSubheader>}
              >
                {results}
              </List>
            </TabPane>
            <TabPane tab="Subscribed" key="2">Content of tab 2</TabPane>
          </Tabs>
        </Grid>
      </Grid>
    );
  }

  private handleModeChange = (e) => {
    const mode = e.target.value;
    this.setState({ mode });
  };

  private renderGame() {
    return (
      <React.Fragment>
        <Divider />
        <ListItem style={{ justifyContent: 'center' }} dense button>
          <tr style={{}}>
            <td style={{ textAlign: "left" }}>
              <a href="/team/کلوب-بروژ" target="_blank">کلوب بروژ</a>
            </td>
            <td style={{ textAlign: "center", whiteSpace: "nowrap", padding: "0 6px" }}>
              0 - 1
            </td>
            <td style={{ textAlign: "right" }}>
              <a href="/team/دورتموند" target="_blank">دورتموند</a>
            </td>
          </tr>
        </ListItem>
      </React.Fragment>
    )
  }
}

// @ts-ignore
export default withStyles(styles)(GamesList);
