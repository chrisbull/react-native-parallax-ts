import * as React from 'react';
import { Animated, ScrollView } from 'react-native';
import { ParallaxImage } from './ParallaxImage';
export class ParallaxScrollView extends React.Component {
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
        const scrollY = new Animated.Value(0);
        this.setState({ scrollY });
        this.onParallaxScroll = Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }]);
    }
    render() {
        const { children, scrollViewComponent, onScroll, ...props } = this.props;
        const { scrollY } = this.state;
        const ScrollComponent = scrollViewComponent || ScrollView;
        return (React.createElement(ScrollComponent, Object.assign({ scrollEventThrottle: 16, onScroll: this.handleOnScroll }, props), children && applyPropsToParallaxImages(children, { scrollY })));
    }
}
export default ParallaxScrollView;
const applyPropsToParallaxImages = (children, props) => {
    if (Array.isArray(children)) {
        return children.map((child) => {
            if (Array.isArray(child))
                return applyPropsToParallaxImages(child, props);
            if (child.type === ParallaxImage)
                return React.cloneElement(child, props);
            return child;
        });
    }
    if (children.type === ParallaxImage)
        return React.cloneElement(children, props);
    return children;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFyYWxsYXhTY3JvbGxWaWV3Q29tcG9zaXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvUGFyYWxsYXhTY3JvbGxWaWV3Q29tcG9zaXRpb24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFBO0FBQzlCLE9BQU8sRUFBRSxRQUFRLEVBQTJDLFVBQVUsRUFBbUIsTUFBTSxjQUFjLENBQUE7QUFFN0csT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFBO0FBVS9DLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxLQUFLLENBQUMsU0FBeUM7SUFBdkY7O1FBS0UsdUJBQWtCLEdBQUcsR0FBRyxFQUFFO1lBQ3hCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLENBQUE7UUFDbkQsQ0FBQyxDQUFBO1FBUUQsbUJBQWMsR0FBRyxDQUFDLEtBQThDLEVBQUUsRUFBRTtZQUNsRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQTtZQUMvQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDNUIsUUFBUSxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUM3QixDQUFDLENBQUE7SUFhSCxDQUFDO0lBdkJDLGtCQUFrQjtRQUNoQixNQUFNLE9BQU8sR0FBRyxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDckMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUE7UUFDMUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFdBQVcsRUFBRSxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQzlGLENBQUM7SUFRRCxNQUFNO1FBQ0osTUFBTSxFQUFFLFFBQVEsRUFBRSxtQkFBbUIsRUFBRSxRQUFRLEVBQUUsR0FBRyxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFBO1FBQ3hFLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFBO1FBQzlCLE1BQU0sZUFBZSxHQUFHLG1CQUFtQixJQUFJLFVBQVUsQ0FBQTtRQUV6RCxPQUFPLENBQ0wsb0JBQUMsZUFBZSxrQkFBQyxtQkFBbUIsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxjQUFjLElBQU0sS0FBSyxHQUMvRSxRQUFRLElBQUksMEJBQTBCLENBQUMsUUFBUSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FDOUMsQ0FDbkIsQ0FBQTtJQUNILENBQUM7Q0FDRjtBQUVELGVBQWUsa0JBQWtCLENBQUE7QUFFakMsTUFBTSwwQkFBMEIsR0FBRyxDQUFDLFFBQWEsRUFBRSxLQUFVLEVBQUUsRUFBRTtJQUMvRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDM0IsT0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUU7WUFDakMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztnQkFBRSxPQUFPLDBCQUEwQixDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQTtZQUN6RSxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssYUFBYTtnQkFBRSxPQUFPLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFBO1lBQ3pFLE9BQU8sS0FBSyxDQUFBO1FBQ2QsQ0FBQyxDQUFDLENBQUE7S0FDSDtJQUNELElBQUksUUFBUSxDQUFDLElBQUksS0FBSyxhQUFhO1FBQUUsT0FBTyxLQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQTtJQUMvRSxPQUFPLFFBQVEsQ0FBQTtBQUNqQixDQUFDLENBQUEifQ==