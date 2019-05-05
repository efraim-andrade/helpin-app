import React from 'react';

import { FloatChat, Button, Courses } from '../../components';

import {
  Container, Chat, Tabs, styles,
} from './styles';

function Forum() {
  return (
    <Container>
      <Chat>
        <FloatChat />
      </Chat>

      <Tabs>
        <Button
          text="ajudar"
          color="secondary"
          stylesContainer={[styles.ButtonCustom, styles.ButtonLeft]}
        />

        <Button
          text="perguntar"
          disabled
          stylesContainer={[styles.ButtonCustom, styles.ButtonRight]}
        />
      </Tabs>

      <Courses />
    </Container>
  );
}

Forum.navigationOptions = {
  header: null,
};

export default Forum;