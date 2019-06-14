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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
const ParallaxImage_1 = require("./ParallaxImage");
class ParallaxScrollView extends React.Component {
    constructor() {
        super(...arguments);
        this.getScrollResponder = () => {
            return this._scrollComponent.getScrollResponder();
        };
        this.handleOnScroll = (event) => {
            const { onScroll } = this.props;
            this.onParallaxScroll(event);
            onScroll && onScroll(event);
        };
    }
    componentWillMount() {
        const scrollY = new react_native_1.Animated.Value(0);
        this.setState({ scrollY });
        this.onParallaxScroll = react_native_1.Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }]);
    }
    render() {
        const _a = this.props, { children, scrollViewComponent, onScroll } = _a, props = __rest(_a, ["children", "scrollViewComponent", "onScroll"]);
        const { scrollY } = this.state;
        const ScrollComponent = scrollViewComponent || react_native_1.ScrollView;
        return (React.createElement(ScrollComponent, Object.assign({ scrollEventThrottle: 16, onScroll: this.handleOnScroll }, props), children && applyPropsToParallaxImages(children, { scrollY })));
    }
}
exports.ParallaxScrollView = ParallaxScrollView;
exports.default = ParallaxScrollView;
const applyPropsToParallaxImages = (children, props) => {
    if (Array.isArray(children)) {
        return children.map((child) => {
            if (Array.isArray(child))
                return applyPropsToParallaxImages(child, props);
            if (child.type === ParallaxImage_1.ParallaxImage)
                return React.cloneElement(child, props);
            return child;
        });
    }
    if (children.type === ParallaxImage_1.ParallaxImage)
        return React.cloneElement(children, props);
    return children;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFyYWxsYXhTY3JvbGxWaWV3Q29tcG9zaXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvUGFyYWxsYXhTY3JvbGxWaWV3Q29tcG9zaXRpb24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQThCO0FBQzlCLCtDQUE2RztBQUU3RyxtREFBK0M7QUFVL0MsTUFBYSxrQkFBbUIsU0FBUSxLQUFLLENBQUMsU0FBeUM7SUFBdkY7O1FBS0UsdUJBQWtCLEdBQUcsR0FBRyxFQUFFO1lBQ3hCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLENBQUE7UUFDbkQsQ0FBQyxDQUFBO1FBUUQsbUJBQWMsR0FBRyxDQUFDLEtBQThDLEVBQUUsRUFBRTtZQUNsRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQTtZQUMvQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDNUIsUUFBUSxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUM3QixDQUFDLENBQUE7SUFhSCxDQUFDO0lBdkJDLGtCQUFrQjtRQUNoQixNQUFNLE9BQU8sR0FBRyxJQUFJLHVCQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFBO1FBQzFCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyx1QkFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsV0FBVyxFQUFFLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDOUYsQ0FBQztJQVFELE1BQU07UUFDSixNQUFNLGVBQWtFLEVBQWxFLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFFLFFBQVEsT0FBeUIsRUFBdkIsbUVBQXVCLENBQUE7UUFDeEUsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUE7UUFDOUIsTUFBTSxlQUFlLEdBQUcsbUJBQW1CLElBQUkseUJBQVUsQ0FBQTtRQUV6RCxPQUFPLENBQ0wsb0JBQUMsZUFBZSxrQkFBQyxtQkFBbUIsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxjQUFjLElBQU0sS0FBSyxHQUMvRSxRQUFRLElBQUksMEJBQTBCLENBQUMsUUFBUSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FDOUMsQ0FDbkIsQ0FBQTtJQUNILENBQUM7Q0FDRjtBQWhDRCxnREFnQ0M7QUFFRCxrQkFBZSxrQkFBa0IsQ0FBQTtBQUVqQyxNQUFNLDBCQUEwQixHQUFHLENBQUMsUUFBYSxFQUFFLEtBQVUsRUFBRSxFQUFFO0lBQy9ELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUMzQixPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRTtZQUNqQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO2dCQUFFLE9BQU8sMEJBQTBCLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFBO1lBQ3pFLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyw2QkFBYTtnQkFBRSxPQUFPLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFBO1lBQ3pFLE9BQU8sS0FBSyxDQUFBO1FBQ2QsQ0FBQyxDQUFDLENBQUE7S0FDSDtJQUNELElBQUksUUFBUSxDQUFDLElBQUksS0FBSyw2QkFBYTtRQUFFLE9BQU8sS0FBSyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUE7SUFDL0UsT0FBTyxRQUFRLENBQUE7QUFDakIsQ0FBQyxDQUFBIn0=