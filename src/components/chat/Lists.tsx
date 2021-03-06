import React, { FC } from "react";
import Item from "./Item";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
import { DbMessage } from "./type";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

type Props = {
  messageList: DbMessage[];
};

const Lists: FC<Props> = ({ messageList }) => {
  const classes = useStyles();

  return (
    <>
      <List className={classes.root}>
        {messageList.length ? (
          messageList.map((list) => {
            return (
              <List key={list.id}>
                <Item
                  content={list.content}
                  id={list.id}
                  createdAt={list.createdAt}
                  userRef={list.user}
                  image={list.image}
                  groupId={list.groupId}
                />
              </List>
            );
          })
        ) : (
          <CircularProgress />
        )}
      </List>
    </>
  );
};

export default Lists;
