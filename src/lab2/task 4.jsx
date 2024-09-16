import React, { Component } from 'react';

class CoursesComponent extends Component {
    render() {
        // استخدام تفكيك الخصائص (Destructuring Props)
        const { course1, course2, course3, course4, children } = this.props;

        return (
            <div>
                <h1>Courses Studied</h1>
                <ul>
                    <li>{course1}</li>
                    <li>{course2}</li>
                    <li>{course3}</li>
                    <li>{course4}</li>
                </ul>
                <div>
                    {children}
                </div>
            </div>
        );
    }
}

export default CoursesComponent;
