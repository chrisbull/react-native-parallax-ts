import * as React from 'react'
import { Dimensions, PixelRatio, ScrollView, StyleSheet, Text, View } from 'react-native'

import { ParallaxImage, ParallaxScrollView } from 'react-native-parallax-ts'

const IMAGE_WIDTH = Dimensions.get('window').width
const IMAGE_HEIGHT = IMAGE_WIDTH / 2
const PIXEL_RATIO = PixelRatio.get()
const PARALLAX_FACTOR = 0.3

const IMAGE_URI_PREFIX =
  'http://loremflickr.com/' +
  IMAGE_WIDTH * PIXEL_RATIO +
  '/' +
  Math.round(IMAGE_HEIGHT * (1 + PARALLAX_FACTOR * 2) * PIXEL_RATIO) +
  '/'

const SECTIONS = [
  {
    title: '(=^ ◡ ^=)',
    keyword: 'cat',
  },
  {
    title: 'ｏ（Ｕ・ω・）⊃',
    keyword: 'dog',
  },
  {
    title: '⊂((・⊥・))⊃',
    keyword: 'monkey',
  },
  {
    title: '（・⊝・）',
    keyword: 'penguin',
  },
  {
    title: '§・ω・§',
    keyword: 'sheep',
  },
  {
    title: '/|\\( ;,;)/|\\',
    keyword: 'bat',
  },
  {
    title: "-o,,o,,o'",
    keyword: 'ant',
  },
  {
    title: '(*)>\n/ )  \n/"  ',
    keyword: 'bird',
  },
  {
    title: '( )\n:(III)-\n( ) ',
    keyword: 'bee',
  },
  {
    title: 'O_______O\n( ^ ~ ^ )\n(,,)()(,,)\n( )   ( )',
    keyword: 'bear',
  },
]

const App = () => (
  <ParallaxScrollView style={styles.scrollView}>
    {SECTIONS.map((section, i) => (
      <ParallaxImage
        key={i}
        style={styles.image}
        overlayStyle={styles.overlay}
        source={{ uri: IMAGE_URI_PREFIX + section.keyword }}
        parallaxFactor={PARALLAX_FACTOR}
      >
        <Text style={styles.title}>{section.title}</Text>
        <Text style={styles.url}>Source: {IMAGE_URI_PREFIX + section.keyword}</Text>
      </ParallaxImage>
    ))}
  </ParallaxScrollView>
)

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  image: {
    height: IMAGE_HEIGHT,
  },
  overlay: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 25,
    fontWeight: 'bold',
    color: 'white',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 1,
    shadowColor: 'black',
    shadowOpacity: 0.8,
  },
  url: {
    opacity: 0.5,
    fontSize: 10,
    position: 'absolute',
    color: 'white',
    left: 5,
    bottom: 5,
  },
})

export default App
