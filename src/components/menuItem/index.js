import React from 'react';
import { Text, View, Animated, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import styles from './styles';

export default class MenuItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            expanded: false,
            animation: new Animated.Value(54)
        };
    }

    toggle = () => {
        let initialValue = this.state.expanded ? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
            finalValue = this.state.expanded ? this.state.minHeight : this.state.maxHeight + this.state.minHeight;

        this.setState({
            expanded: !this.state.expanded
        });

        this.state.animation.setValue(initialValue);
        Animated.spring(
            this.state.animation,
            {
                toValue: finalValue,
                useNativeDriver: false
            }
        ).start();
    }

    _setMaxHeight(event) {
        this.setState({
            maxHeight: event.nativeEvent.layout.height
        });
    }

    _setMinHeight(event) {
        this.setState({
            minHeight: event.nativeEvent.layout.height
        });
    }


    render() {
        return (
            <Animated.View style={[styles.container, { height: this.state.animation }]} >
                <View style={styles.titleContainer} onLayout={this._setMinHeight.bind(this)}>
                    <TouchableOpacity
                        style={{ flex: 1, height: 54, alignItems: "center", flexDirection: "row" }}
                        onPress={() => this.props.expand ? this.toggle() : this.props.func()}>
                        <View style={styles.touchView}>
                            {this.props.icon && this.props.icon}
                            <Text style={styles.title}>{this.props.title}</Text>
                            {this.props.expand ? <View style={styles.expandIcon}>
                                {this.state.expanded ?
                                    <Icon name="arrow-up" size={13} color="grey" /> :
                                    <Icon name="arrow-right" size={13} color="grey" />}
                            </View> : null}
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.body} onLayout={this._setMaxHeight.bind(this)}>
                    {this.props.children}
                </View>
            </Animated.View >
        );
    }
}