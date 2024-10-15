import React from 'react';
import { StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import Confetti from '../Confetti';

/**
 * Confetti example that pops up from the bottom the left and right side of the screen.
 */
const ConfettiExample: React.FC = () => {
  const activateAnimation = useSharedValue(false);
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

  return (
    <View style={{ height: windowHeight, width: windowWidth }}>
      <View style={{ zIndex: 999 }}>
        <TouchableOpacity
          style={styles.button}
          hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}
          onPress={() => {
            activateAnimation.value = !activateAnimation.value;
          }}
        >
          <Text style={styles.buttonText}>Activate animation</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <Confetti
          activateAnimation={activateAnimation}
          svgs={[
            `<svg fill="#000000" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M8.49,12.68v4.61c0,.34,.23,.61,.53,.71v5.48c0,.13-.14,3.21,1.88,5.34,1.22,1.28,2.93,1.94,5.09,1.94s3.88-.65,5.09-1.94c2.02-2.13,1.89-5.21,1.88-5.3v-5.52c.3-.1,.53-.37,.53-.71v-4.61c1.71-.69,2.92-2.36,2.92-4.32,0-2.57-2.09-4.67-4.67-4.67-.49,0-.98,.08-1.46,.23-1.09-1.67-2.93-2.68-4.94-2.68s-3.68,.91-4.79,2.46c-2.74-.22-5.01,1.96-5.01,4.65,0,1.96,1.21,3.63,2.92,4.32Zm11.51,15.11c-.92,.97-2.27,1.46-4,1.46s-3.07-.49-4-1.46c-1.58-1.66-1.48-4.21-1.48-4.28v-5.48h10.96v5.51s.1,2.58-1.48,4.24Zm2.01-14.77v3.51H9.99v-3.51h12.02ZM10.23,5.19c.21,0,.4,.02,.59,.05,.3,.05,.61-.09,.77-.35,.81-1.34,2.22-2.15,3.78-2.15,1.68,0,3.19,.94,3.95,2.45,.09,.18,.25,.31,.43,.38,.19,.06,.39,.05,.57-.04,.45-.23,.95-.35,1.44-.35,1.75,0,3.17,1.42,3.17,3.17s-1.42,3.17-3.17,3.17H10.23c-1.75,0-3.17-1.42-3.17-3.17s1.42-3.17,3.17-3.17Z"></path><path d="M14.26,5.25c1.5,.28,2.59,1.59,2.59,3.11,0,.41,.34,.75,.75,.75s.75-.34,.75-.75c0-2.24-1.6-4.17-3.81-4.59-.4-.07-.8,.19-.88,.6-.08,.41,.19,.8,.6,.88Z"></path><circle cx="13.32" cy="20.07" r="1.25"></circle><circle cx="18.68" cy="20.07" r="1.25"></circle><path d="M17.56,24.5h-3.12c-.41,0-.75,.34-.75,.75s.34,.75,.75,.75h3.12c.41,0,.75-.34,.75-.75s-.34-.75-.75-.75Z"></path></g></svg>`,
          ]}
        />
        <Confetti
          activateAnimation={activateAnimation}
          delay={650}
          origin={{ x: windowWidth, y: 0 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 20,
    backgroundColor: 'blue',
    borderRadius: 5,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ConfettiExample;
