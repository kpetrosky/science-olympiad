import React from 'react';
import iready from './../images/iready.png';
import typingclub from '../images/typing club.png'
import dragondrop from '../images/dragon drop.png'
import hp from '../images/hp.png';
import google from '../images/google classroom.png';

function Resources() {
  return (
    <div>
      
      <div style={{ display: 'flex', justifyContent: 'center' }}>
  
        <ul>
          <li>
            <img src={iready} alt="iReady" /> {/* Use the imported image */}
            <a
              href="https://readyclassroomcentral.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              iReady
            </a>
          </li>
          <li>
            <img src={typingclub} alt="Typingclub" />
            <a
              href="https://www.typingclub.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Typingclub
            </a>
          </li>
          <li>
            <img src={dragondrop} alt="Dragon Drop" />
            <a
              href="https://www.roomrecess.com/games/DragonDrop/play.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dragon Drop
            </a>
          </li>
          <li>
            <img src={hp} alt="HP Computer Skills Games" />
            <a
              href="https://www.hp.com/us-en/shop/tech-takes/mouse-and-keyboarding-games"
              target="_blank"
              rel="noopener noreferrer"
            >
              HP Computer Skills Games
            </a>
          </li>
          <li>
            <img src={google} alt="Google Classroom" />
            <a
              href="https://classroom.google.com/c/NjE2MzQxMTg5NjU4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Classroom
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Resources;
