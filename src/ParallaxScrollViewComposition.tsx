import * as React from 'react'
import { Animated, NativeScrollEvent, NativeSyntheticEvent, ScrollView, ScrollViewProps } from 'react-native'

import { ParallaxImage } from './ParallaxImage'

export interface ParallaxScrollViewProps extends ScrollViewProps {
  scrollViewComponent?: typeof ScrollView
}

interface State {
  scrollY: Animated.Value
}

export class ParallaxScrollView extends React.Component<ParallaxScrollViewProps, State> {
  _root: any
  _scrollComponent: any
  onParallaxScroll: any

  getScrollResponder = () => {
    return this._scrollComponent.getScrollResponder()
  }

  componentWillMount() {
    const scrollY = new Animated.Value(0)
    this.setState({ scrollY })
    this.onParallaxScroll = Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }])
  }

  handleOnScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { onScroll } = this.props
    this.onParallaxScroll(event)
    onScroll && onScroll(event)
  }

  render() {
    const { children, scrollViewComponent, onScroll, ...props } = this.props
    const { scrollY } = this.state
    const ScrollComponent = scrollViewComponent || ScrollView

    return (
      <ScrollComponent scrollEventThrottle={16} onScroll={this.handleOnScroll} {...props}>
        {children && applyPropsToParallaxImages(children, { scrollY })}
      </ScrollComponent>
    )
  }
}

export default ParallaxScrollView

const applyPropsToParallaxImages = (children: any, props: any) => {
  if (Array.isArray(children)) {
    return children.map((child: any) => {
      if (Array.isArray(child)) return applyPropsToParallaxImages(child, props)
      if (child.type === ParallaxImage) return React.cloneElement(child, props)
      return child
    })
  }
  if (children.type === ParallaxImage) return React.cloneElement(children, props)
  return children
}
