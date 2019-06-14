"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_isequal_1 = __importDefault(require("lodash.isequal"));
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
const WINDOW_HEIGHT = react_native_1.Dimensions.get('window').height;
class ParallaxImage extends React.Component {
    constructor() {
        super(...arguments);
        this.isLayoutStale = true;
        this.state = {
            offset: 0,
            height: 0,
            width: 0,
        };
        this.componentWillReceiveProps = (nextProps) => {
            if (!lodash_isequal_1.default(nextProps, this.props)) {
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
        const scrollY = new react_native_1.Animated.Value(0);
        this.setState({
            parallaxScrollY: scrollY,
        });
        this.onParallaxScroll = react_native_1.Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }]);
    }
    render() {
        const { offset, width, height } = this.state;
        const _a = this.props, { onPress, style, scrollY, parallaxFactor, imageStyle, overlayStyle, children } = _a, props = __rest(_a, ["onPress", "style", "scrollY", "parallaxFactor", "imageStyle", "overlayStyle", "children"]);
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
        const content = (React.createElement(react_native_1.View, { style: [style, styles.container], onLayout: this.handleOnLayout },
            React.createElement(react_native_1.Animated.Image, Object.assign({}, props, { style: [imageStyle, parallaxStyle], pointerEvents: "none" })),
            React.createElement(react_native_1.View, { style: [styles.overlay, overlayStyle] }, children)));
        if (onPress) {
            return React.createElement(react_native_1.TouchableHighlight, { onPress: onPress }, content);
        }
        return content;
    }
}
ParallaxImage.defaultProps = {
    parallaxFactor: 0.2,
};
ParallaxImage.type = ParallaxImage;
exports.ParallaxImage = ParallaxImage;
const styles = react_native_1.StyleSheet.create({
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
exports.default = ParallaxImage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFyYWxsYXhJbWFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9QYXJhbGxheEltYWdlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9FQUFvQztBQUNwQyw2Q0FBOEI7QUFDOUIsK0NBV3FCO0FBRXJCLE1BQU0sYUFBYSxHQUFHLHlCQUFVLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQTtBQWlCckQsTUFBYSxhQUFjLFNBQVEsS0FBSyxDQUFDLFNBQW9DO0lBQTdFOztRQU9FLGtCQUFhLEdBQUcsSUFBSSxDQUFBO1FBRXBCLFVBQUssR0FBRztZQUNOLE1BQU0sRUFBRSxDQUFDO1lBQ1QsTUFBTSxFQUFFLENBQUM7WUFDVCxLQUFLLEVBQUUsQ0FBQztTQUNULENBQUE7UUFPRCw4QkFBeUIsR0FBRyxDQUFDLFNBQTZCLEVBQUUsRUFBRTtZQUM1RCxJQUFJLENBQUMsd0JBQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQTthQUMxQjtRQUNILENBQUMsQ0FBQTtRQUVELG1CQUFjLEdBQUcsQ0FBQyxLQUF3QixFQUFFLEVBQUU7WUFDNUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUE7WUFFckQsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUE7WUFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDWixNQUFNLEVBQUUsQ0FBQztnQkFDVCxNQUFNO2dCQUNOLEtBQUs7YUFDTixDQUFDLENBQUE7UUFDSixDQUFDLENBQUE7SUFvREgsQ0FBQztJQWxEQyxrQkFBa0I7UUFDaEIsTUFBTSxPQUFPLEdBQUcsSUFBSSx1QkFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FB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