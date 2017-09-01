import React from 'react';
import { Dimensions } from 'react-native-web';
import glam from 'glamorous-primitives';
import * as d from './styles/dimensions';
import { emerald, headerBorder, bodyBg, headerText } from './styles/colours';
import Todo from './Todo';

console.log(emerald);

const { height: windowHeight } = Dimensions.get('window');

const Screen = glam.view({
  alignItems: 'stretch',
  alignContent: 'stretch',
  height: windowHeight,
  backgroundColor: emerald,
  padding: d.gridUnit,
});

const Header = glam.view({
  flexDirection: 'row',
  flex: 0,
  justifyContent: 'space-around',
  padding: d.gridUnit,
  marginBottom: d.vUnit,
  borderBottomWidth: d.border100,
  borderBottomColor: headerBorder,
});

const Title = glam.text({
  color: headerText,
  fontWeight: 'bold',
});

const Body =  glam.view({
  flex: 1,
  justifyContent: 'space-around',
  padding: d.gridUnit,
  backgroundColor: bodyBg,
  borderRadius: d.borderRadius,
  padding: d.gridUnit,
});

const BigThing = glam.view({
  flex: 2,
});

const LittleThings = glam.view({
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignContent: 'stretch',
  borderTopColor: emerald,
  borderTopStyle: 'dotted',
  borderTopWidth: d.border200,
});

const App = () =>
  <Screen>
    <Header>
      <Title>One Big Thing</Title>
    </Header>
    <Body>
      <BigThing>
        <Todo>Do it</Todo>
      </BigThing>
      <LittleThings>
        <Todo little></Todo>
        <Todo little></Todo>
        <Todo little></Todo>
      </LittleThings>
    </Body>
  </Screen>;

export default App;
