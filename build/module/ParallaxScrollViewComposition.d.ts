import * as React from 'react';
import { Animated, NativeScrollEvent, NativeSyntheticEvent, ScrollView, ScrollViewProps } from 'react-native';
export interface ParallaxScrollViewProps extends ScrollViewProps {
    scrollViewComponent?: typeof ScrollView;
}
interface State {
    scrollY: Animated.Value;
}
export declare class ParallaxScrollView extends React.Component<ParallaxScrollViewProps, State> {
    _root: any;
    _scrollComponent: any;
    onParallaxScroll: any;
    getScrollResponder: () => any;
    componentWillMount(): void;
    handleOnScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
    render(): JSX.Element;
}
export default ParallaxScrollView;
