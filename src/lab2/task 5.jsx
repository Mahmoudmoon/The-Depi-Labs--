import React, { Component } from 'react';

class ToggleButton extends Component {
    constructor(props) {
        super(props);
        // تعريف الحالة الأولية
        this.state = {
            isToggled: false
        };
    }

    // دالة لتبديل الحالة
    toggle = () => {
        this.setState(prevState => ({
            isToggled: !prevState.isToggled
        }));
    }

    render() {
        // استخدام تفكيك الحالة
        const { isToggled } = this.state;

        return (
            <div>
                <button onClick={this.toggle}>
                    {isToggled ? 'ON' : 'OFF'}
                </button>
            </div>
        );
    }
}

export default ToggleButton;
