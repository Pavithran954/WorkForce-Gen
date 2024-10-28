import React from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import "./home.css";
import Button from '../../Button';
const Home = () => {
  return (
    <>
      <div class="container home_container">
        <Zoom duration={700}>
          <h1 className="home_h1">WorkGen</h1>
        </Zoom>

        <Fade duration={700}>
          <p className="home_p">Our Workforce Analytics and People Management platform provides a powerful solution for organizations to streamline workforce data analysis and enhance decision-making. Automatically analyzing employee datasets, it generates insightful visualizations to help HR teams and managers track employee performance, monitor key metrics, and identify trends across departments. With real-time analytics, customized reporting, and intuitive dashboards, our platform simplifies complex data, allowing you to optimize resource allocation, improve retention strategies, and drive organizational growth. Harness the power of data to unlock your team’s full potential and make informed, data-driven decisions with ease.</p>
        </Fade>
      </div>
      <Button />
    </>
  )
};
export default Home;