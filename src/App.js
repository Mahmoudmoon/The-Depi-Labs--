import React from 'react';
import SingleElementComponent from './SingleElementComponent';
import ThreeElementComponent from './ThreeElementComponent';
import BioComponent from './BioComponent';
import CoursesComponent from './CoursesComponent';
import ToggleButton from './ToggleButton';
import React, { useState } from 'react';
import SignUp from './SignUp';
import Login from './Login';
import ComponentOne from './ComponentOne';
import ComponentThree from './ComponentThree';
import ComponentFive from './ComponentFive';
import Comments from './Comments';
import PostComment from './PostComment';
import { DataProvider } from './DataContext';

function App() {
    // بيانات الـ props التي سيتم تمريرها
    const skillsArray = ['JavaScript', 'React', 'Node.js', 'CSS', 'HTML'];

    return (
        <div className="App">
            <h1>React Components Showcase</h1>

            {/* استدعاء المكون الوظيفي الذي يحتوي على عنصر واحد */}
            <SingleElementComponent />

            {/* استدعاء المكون الصنفي الذي يحتوي على ثلاثة عناصر */}
            <ThreeElementComponent />

            {/* استدعاء المكون الوظيفي الذي يحتوي على السيرة الذاتية ومصفوفة المهارات */}
            <BioComponent
                name="John Doe"
                age={30}
                profession="Software Developer"
                location="San Francisco"
                hobbies="Reading, Hiking"
                skills={skillsArray}
            >
                <p>This paragraph is passed as children from the App component to BioComponent.</p>
            </BioComponent>

            {/* استدعاء المكون الصنفي الذي يحتوي على قائمة الدورات */}
            <CoursesComponent
                course1="Mathematics"
                course2="Physics"
                course3="Chemistry"
                course4="Computer Science"
            >
                <p>This paragraph is passed as children from the App component to CoursesComponent.</p>
            </CoursesComponent>

            {/* استدعاء مكون ToggleButton */}
            <ToggleButton />
                <header>
                    <button onClick={() => setCurrentView('signup')}>Sign Up</button>
                    <button onClick={() => setCurrentView('login')}>Login</button>
                </header>

                {currentView === 'signup' ? <SignUp /> : <Login />}

                <ComponentOne />
                <ComponentThree />
                <ComponentFive />

                <Comments />
                <PostComment />


        </div>
    );
}

export default App;
