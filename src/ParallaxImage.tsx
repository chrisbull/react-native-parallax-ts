import isEqual from 'lodash.isequal'
import * as React from 'react'
import {
  Animated,
  Dimensions,
  ImageProps,
  ImageStyle,
  LayoutChangeEvent,
  StyleProp,
  StyleSheet,
  TouchableHighlight,
  View,
  ViewStyle,
} from 'react-native'

const WINDOW_HEIGHT = Dimensions.get('window').height

export interface ParallaxImageProps extends ImageProps {
  onPress?: (e: any) => void
  scrollY?: Animated.Value
  parallaxFactor?: any
  imageStyle?: StyleProp<ImageStyle>
  overlayStyle?: StyleProp<ViewStyle>
}

interface State {
  offset: number
  height: number
  width: number
  parallaxScrollY?: Animated.Value
}

export class ParallaxImage extends React.Component<ParallaxImageProps, State> {
  static defaultProps = {
    parallaxFactor: 0.2,
  }

  static type = ParallaxImage

  isLayoutStale = true

  state = {
    offset: 0,
    height: 0,
    width: 0,
  }

  onParallaxScroll: any

  _container: React.ElementType<typeof View>
  _touchable: React.ElementType<typeof TouchableHighlight>

  componentWillReceiveProps = (nextProps: ParallaxImageProps) => {
    if (!isEqual(nextProps, this.props)) {
      this.isLayoutStale = true
    }
  }

  handleOnLayout = (event: LayoutChangeEvent) => {
    const { height, width, y } = event.nativeEvent.layout

    this.isLayoutStale = false
    this.setState({
      offset: y,
      height,
      width,
    })
  }

  componentWillMount() {
    const scrollY = new Animated.Value(0)

    this.setState({
      parallaxScrollY: scrollY,
    })

    this.onParallaxScroll = Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }])
  }

  render() {
    const { offset, width, height } = this.state

    const { onPress, style, scrollY, parallaxFactor, imageStyle, overlayStyle, children, ...props } = this.props

    const parallaxPadding = height * parallaxFactor

    const parallaxStyle = {
      height: height + parallaxPadding * 2,
      width,
      transform: null,
    }

    if (scrollY) {
      parallaxStyle.transform = [
        {
          translateY: scrollY.interpolate({
            inputRange: [offset - height, offset + WINDOW_HEIGHT + height],
            outputRange: [-parallaxPadding, parallaxPadding],
            extrapolate: 'clamp',
          }),
        },
      ]
    } else {
      parallaxStyle.transform = [{ translateY: -parallaxPadding }]
    }

    const content = (
      <View style={[style, styles.container]} onLayout={this.handleOnLayout}>
        <Animated.Image {...props} style={[imageStyle, parallaxStyle]} pointerEvents="none" />
        <View style={[styles.overlay, overlayStyle]}>{children}</View>
      </View>
    )

    if (onPress) {
      return <TouchableHighlight onPress={onPress}>{content}</TouchableHighlight>
    }

    return content
  }
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    position: 'relative',
  },
  overlay: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
})

export default ParallaxImage
