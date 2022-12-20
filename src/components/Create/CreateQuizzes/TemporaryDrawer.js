import React, {useState} from 'react';
import MenuIcon from "@material-ui/icons/Menu";
import List from '@material-ui/core/List';
import { Drawer, IconButton, ListItem, Divider } from "@material-ui/core";
import { Link } from "react-router-dom";

const TemporaryDrawer = () => {
    const [state, setState] = useState({ left: false });

    const toggleDrawer = (anchor, open) => (event) => {
        setState({ ...state, [anchor]: open});
    };

  return (
    <div>
        <IconButton onClick={toggleDrawer('left', true)}>
          <MenuIcon />
        </IconButton>
        <Drawer open={state['left']} onClose={toggleDrawer('left', false)} anchor={'left'}>
            <List>
                <ListItem>
                <h2 style={{'margin': '12px', 'marginRight': '20px' }}>🥐OpenFle</h2>
                </ListItem>
            </List>
            <Divider />
            <List style={{'marginLeft': '12px', 'marginRight': '8px', 'marginTop': '5px'}}>
            <ListItem>
                    <div stlye={{'marginLeft': '20px'}}>
                      <IconButton onClick={toggleDrawer('left', false)}>
                        <div style={{'marginTop': '18px', 'fontSize': '16px', 'fontWeight': '500', 'color': 'grey'}}>
                           ✍️ Create a Quiz</div>
                      </IconButton>
                    </div>
                </ListItem>
                <ListItem>
                    <div stlye={{'marginLeft': '20px'}}>
                      <Link to="/createQuizzes">
                      <IconButton>
                         <div style={{'marginTop': '18px', 'fontSize': '16px', 'fontWeight': '500', 'color': 'grey'}}>
                           📝 Create Flashcards</div>
                      </IconButton>
                      </Link>
                    </div>
                </ListItem>
                <ListItem>
                    <div stlye={{'marginLeft': '20px'}}>
                      <Link to="/createQuizzes">
                        <IconButton>
                        <div style={{'marginTop': '18px', 'fontSize': '16px', 'fontWeight': '500', 'color': 'grey'}}>
                          👥 Propose a Scenario</div>
                          </IconButton>
                      </Link>
                    </div>
                </ListItem>
            </List>
        </Drawer>
    </div>
  )
}

export default TemporaryDrawer;