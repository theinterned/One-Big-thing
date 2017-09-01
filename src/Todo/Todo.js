import React from "react";
import PropTypes from 'prop-types';
import glam from 'glamorous-primitives';

const { View } = glam;
const emptyTextColor = '#ccc';

const Input = glam.text(
  {
    fontWeight: 'lighter',
    color: emptyTextColor,
  },
  ({ little }) => ({
    fontSize: little ? 60 : 120
  })
);

const Button = glam.text({
  color: emptyTextColor,
  flex: 1,
  textTransform: 'uppercase',
});

export default function Todo({ little = false, prompt = little ? 'Little Thing' : 'Big Thing' }) {
  return (
    <View
      flex={1}
      alignItems="center"
      justifyContent="center"
      padding={10}
    >
      <View
        flex={8}
        justifyContent="center"
      ><Input little={little}>+</Input></View>
      <Button>{ prompt }</Button>
    </View>
  );
}

Todo.propTypes = {
  little: PropTypes.bool,
}
