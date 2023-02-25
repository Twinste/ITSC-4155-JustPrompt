import React from 'react'
import { StyleSheet, KeyboardAvoidingView } from 'react-native'
import { theme } from '../themes/sign-in-theme'

export default function Background({ children }) {
  return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {children}
      </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    flex: 1,
    padding: 20,
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
