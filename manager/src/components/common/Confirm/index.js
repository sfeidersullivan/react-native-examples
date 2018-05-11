import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardDetail } from '../CardDetail';
import { Button } from '../Button';
import styles from './style';

const Confirm = ({
  children,
  onAccept,
  onDecline,
  visible,
}) => (
  <Modal
    animationType="slide"
    onRequestClose={() => {}}
    transparent
    visible={visible}
  >
    <View style={styles.container}>
      <CardDetail style={styles.cardSection}>
        <Text style={styles.text}>
          {children}
        </Text>
      </CardDetail>
      <CardDetail>
        <Button onPress={onAccept}>Yes</Button>
        <Button onPress={onDecline}>No</Button>
      </CardDetail>
    </View>
  </Modal>
);

export { Confirm };
