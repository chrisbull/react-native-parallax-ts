import * as React from 'react';
import { Animated, ImageProps, ImageStyle, LayoutChangeEvent, StyleProp, TouchableHighlight, View, ViewStyle } from 'react-native';
export interface ParallaxImageProps extends ImageProps {
    onPress?: (e: any) => void;
    scrollY?: Animated.Value;
    parallaxFactor?: any;
    imageStyle?: StyleProp<ImageStyle>;
    overlayStyle?: StyleProp<ViewStyle>;
}
interface State {
    offset: number;
    height: number;
    width: number;
    parallaxScrollY?: Animated.Value;
}
export declare class ParallaxImage extends React.Component<ParallaxImageProps, State> {
    static defaultProps: {
        parallaxFactor: number;
    };
    static type: typeof ParallaxImage;
    isLayoutStale: boolean;
    state: {
        offset: number;
        height: number;
        width: number;
    };
    onParallaxScroll: any;
    _container: React.ElementType<typeof View>;
    _touchable: React.ElementType<typeof TouchableHighlight>;
    componentWillReceiveProps: (nextProps: ParallaxImageProps) => void;
    handleOnLayout: (event: LayoutChangeEvent) => void;
    componentWillMount(): void;
    render(): JSX.Element;
}
export default ParallaxImage;
