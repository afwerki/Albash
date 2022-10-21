import React from "react";
import "./Teams_cardFlip.scss";
import Jay from "../images/Jay.jpg";
import Sukin from "../images/Sukin.jpg";

const Teams_cardFlip = () => {
  return (
    <div className="teams">
      <div className="team-text">
        <h1>Our Team</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          accusamus molestias reprehenderit facilis maiores? Eum ipsam, iste
          maiores placeat dicta reprehenderit porro asperiores maxime. Sequi
          tenetur hic minus est aperiam. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Accusantium accusamus vel blanditiis minus. Totam
          minus odio animi necessitatibus provident! Exercitationem suscipit et
          ducimus laudantium quia. Nostrum, necessitatibus nemo vero ipsum
          sapiente sed, qui quam, vitae optio ducimus minus quod! Laboriosam
          reprehenderit, accusantium itaque totam nisi deserunt labore molestiae
          iure quae.
        </p>
      </div>
      <div className="team-bio">
        <div class="flip">
          <div class="front" id="jay">
            <h1 class="text-shadow">Name</h1>
            <p className="role">role</p>
          </div>
          <div class="back">
            <h2>Angular</h2>
            <p>
              Good tools make application development quicker and easier to
              maintain than if you did everything by hand..
            </p>
            <button>Read More</button>
          </div>
        </div>
        <div class="flip">
          <div class="front" id="sukin">
            <h1 class="text-shadow">Name</h1>
            <p>role</p>
          </div>
          <div class="back">
            <h2>Angular</h2>
            <p>
              Good tools make application development quicker and easier to
              maintain than if you did everything by hand..
            </p>
            <button>Read More</button>
          </div>
        </div>
        <div class="flip">
          <div class="front" id="darrell">
            <h1 class="text-shadow">Name</h1>
            <p>role</p>
          </div>
          <div class="back">
            <h2>Angular</h2>
            <p>
              Good tools make application development quicker and easier to
              maintain than if you did everything by hand..
            </p>
            <button>Read More</button>
          </div>
        </div>
        <div class="flip">
          <div class="front" id="first-flip">
            <h1 class="text-shadow">Name</h1>
            <p>role</p>
          </div>
          <div class="back">
            <h2>Angular</h2>
            <p>
              Good tools make application development quicker and easier to
              maintain than if you did everything by hand..
            </p>
            <button>Read More</button>
          </div>
        </div>
        <div class="flip">
          <div class="front" id="first-flip">
            <h1 class="text-shadow">Name</h1>
            <p>role</p>
          </div>
          <div class="back">
            <h2>Angular</h2>
            <p>
              Good tools make application development quicker and easier to
              maintain than if you did everything by hand..
            </p>
            <button>Read More</button>
          </div>
        </div>
        <div class="flip">
          <div class="front" id="first-flip">
            <h1 class="text-shadow">Name</h1>
            <p>role</p>
          </div>
          <div class="back">
            <h2>Angular</h2>
            <p>
              Good tools make application development quicker and easier to
              maintain than if you did everything by hand..
            </p>
            <button>Read More</button>
          </div>
        </div>
        <div class="flip">
          <div class="front" id="second-flip">
            <h1 class="text-shadow">Name</h1>
            <p>role</p>
          </div>
          <div class="back">
            <h2>Angular</h2>
            <p>
              Good tools make application development quicker and easier to
              maintain than if you did everything by hand..
            </p>
          </div>
        </div>
        <div class="flip">
          <div class="front" id="thired-flip">
            <h1 class="text-shadow">Name</h1>
            <p>role</p>
          </div>
          <div class="back">
            <h2>Angular</h2>
            <p>
              Good tools make application development quicker and easier to
              maintain than if you did everything by hand..
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams_cardFlip;
