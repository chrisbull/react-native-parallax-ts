import isEqual from 'lodash.isequal';
import * as React from 'react';
import { Animated, Dimensions, StyleSheet, TouchableHighlight, View, } from 'react-native';
const WINDOW_HEIGHT = Dimensions.get('window').height;
export class ParallaxImage extends React.Component {
    constructor() {
        super(...arguments);
        this.isLayoutStale = true;
        this.state = {
            offset: 0,
            height: 0,
            width: 0,
        };
        this.componentWillReceiveProps = (nextProps) => {
            if (!isEqual(nextProps, this.props)) {
                this.isLayoutStale = true;
            }
        };
        this.handleOnLayout = (event) => {
            const { height, width, y } = event.nativeEvent.layout;
            this.isLayoutStale = false;
            this.setState({
                offset: y,
                height,
                width,
            });
        };
    }
    componentWillMount() {
        const scrollY = new Animated.Value(0);
        this.setState({
            parallaxScrollY: scrollY,
        });
        this.onParallaxScroll = Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }]);
    }
    render() {
        const { offset, width, height } = this.state;
        const { onPress, style, scrollY, parallaxFactor, imageStyle, overlayStyle, children, ...props } = this.props;
        const parallaxPadding = height * parallaxFactor;
        const parallaxStyle = {
            height: height + parallaxPadding * 2,
            width,
            transform: null,
        };
        if (scrollY) {
            parallaxStyle.transform = [
                {
                    translateY: scrollY.interpolate({
                        inputRange: [offset - height, offset + WINDOW_HEIGHT + height],
                        outputRange: [-parallaxPadding, parallaxPadding],
                        extrapolate: 'clamp',
                    }),
                },
            ];
        }
        else {
            parallaxStyle.transform = [{ translateY: -parallaxPadding }];
        }
        const content = (React.createElement(View, { style: [style, styles.container], onLayout: this.handleOnLayout },
            React.createElement(Animated.Image, Object.assign({}, props, { style: [imageStyle, parallaxStyle], pointerEvents: "none" })),
            React.createElement(View, { style: [styles.overlay, overlayStyle] }, children)));
        if (onPress) {
            return React.createElement(TouchableHighlight, { onPress: onPress }, content);
        }
        return content;
    }
}
ParallaxImage.defaultProps = {
    parallaxFactor: 0.2,
};
ParallaxImage.type = ParallaxImage;
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
});
export default ParallaxImage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFyYWxsYXhJbWFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9QYXJhbGxheEltYWdlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLE9BQU8sTUFBTSxnQkFBZ0IsQ0FBQTtBQUNwQyxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQTtBQUM5QixPQUFPLEVBQ0wsUUFBUSxFQUNSLFVBQVUsRUFLVixVQUFVLEVBQ1Ysa0JBQWtCLEVBQ2xCLElBQUksR0FFTCxNQUFNLGNBQWMsQ0FBQTtBQUVyQixNQUFNLGFBQWEsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQTtBQWlCckQsTUFBTSxPQUFPLGFBQWMsU0FBUSxLQUFLLENBQUMsU0FBb0M7SUFBN0U7O1FBT0Usa0JBQWEsR0FBRyxJQUFJLENBQUE7UUFFcEIsVUFBSyxHQUFHO1lBQ04sTUFBTSxFQUFFLENBQUM7WUFDVCxNQUFNLEVBQUUsQ0FBQztZQUNULEtBQUssRUFBRSxDQUFDO1NBQ1QsQ0FBQTtRQU9ELDhCQUF5QixHQUFHLENBQUMsU0FBNkIsRUFBRSxFQUFFO1lBQzVELElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDbkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUE7YUFDMUI7UUFDSCxDQUFDLENBQUE7UUFFRCxtQkFBYyxHQUFHLENBQUMsS0FBd0IsRUFBRSxFQUFFO1lBQzVDLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFBO1lBRXJELElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFBO1lBQzFCLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ1osTUFBTSxFQUFFLENBQUM7Z0JBQ1QsTUFBTTtnQkFDTixLQUFLO2FBQ04sQ0FBQyxDQUFBO1FBQ0os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