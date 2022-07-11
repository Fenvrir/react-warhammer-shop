import React, { useState } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="footer">
      <div className="container">
        <h3 onClick={() => setIsVisible(!isVisible)}>© Copyright Games Workshop Limited 2022.</h3>
        {isVisible && (
          <div className="rights">
            <p>
              © Copyright Games Workshop Limited 2022. GW, Games Workshop,
              Citadel, White Dwarf, Space Marine, 40K, Warhammer, Warhammer
              40,000, the ‘Aquila’ Double-headed Eagle logo, Warhammer Age of
              Sigmar, Battletome, Stormcast Eternals, and all associated logos,
              illustrations, images, names, creatures, races, vehicles,
              locations, weapons, characters, and the distinctive likenesses
              thereof, are either ® or ™, and/or © Games Workshop Limited,
              variably registered around the world. All Rights Reserved.
            </p>
            <p>
              © Warner Bros. Entertainment Inc. All rights reserved. THE HOBBIT:
              AN UNEXPECTED JOURNEY, THE HOBBIT: THE DESOLATION OF SMAUG, THE
              HOBBIT: THE BATTLE OF THE FIVE ARMIES and the names of the
              characters, items, events and places therein are trademarks of The
              Saul Zaentz Company d/b/a Middle-earth Enterprises under license
              to New Line Productions, Inc. (s22)
            </p>
            <p>
              © 2022 New Line Productions, Inc. All rights reserved.
              MIDDLE-EARTH, THE LORD OF THE RINGS: THE FELLOWSHIP OF THE RING,
              THE LORD OF THE RINGS: THE TWO TOWERS, THE LORD OF THE RINGS: THE
              RETURN OF THE KING and the names of the characters, items, events
              and places therein are trademarks of The Saul Zaentz Company d/b/a
              Middle-earth Enterprises under license to New Line Productions,
              Inc. (s22)
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Footer;
