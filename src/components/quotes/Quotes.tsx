import React from "react";
import styles from "./Quotes.module.css"
import { Carousel as AntCarousel } from "antd"

export const Quotes: React.FC = () => {
    return (
        <AntCarousel autoplay autoplaySpeed={6000} effect="fade" className={styles.Slider}>
            <div>
              <h3>
                “Be yourself; everyone else is already taken.” 
              </h3>
              ―
              <span> Oscar Wilde</span>
            </div>
            <div>
              <h3>
                “I'm selfish, impatient and a little insecure. I make mistakes, 
                I am out of control and at times hard to handle. But if you can't 
                handle me at my worst, then you sure as hell don't deserve me 
                at my best.” 
              </h3>
              ―
              <span> Marilyn Monroe</span>
            </div>
            <div>
              <h3>
              “Two things are infinite: the universe and human stupidity; 
              and I'm not sure about the universe.” 
              </h3>
              ―
              <span> Albert Einstein</span>
            </div>
            <div>
              <h3>“So many books, so little time.”</h3>
              ―
              <span> Frank Zappa</span>
            </div>
            <div>
              <h3>
              “You've gotta dance like there's nobody watching,
              Love like you'll never be hurt,
              Sing like there's nobody listening,
              And live like it's heaven on earth.” 
              </h3>
              ―
              <span> William W. Purkey</span>
            </div>
        </AntCarousel>
    );
}