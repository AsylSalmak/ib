import React from 'react';
import { Message } from 'semantic-ui-react';

const Messages = () => {
  return (
    <Message positive size='tiny'>
      <Message.Header>Перевод успешно совершен</Message.Header>
    </Message>
  );
};
export default Messages;
