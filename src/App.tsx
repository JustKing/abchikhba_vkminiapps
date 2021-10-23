import React, { ReactElement } from "react";
import "./App.css";
import Participant from "./components/participant/Participant";

export interface IParticipant {
  name: string;
  img: string;
  logo: ReactElement;
  github: string;
  speciality: string;
}

export default class App extends React.Component {
  participants: IParticipant[] = [
    {
      name: "Алексей",
      img: 'a.png',
      github: 'https://github.com/borgishmorg/',
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="144"
          height="144"
          viewBox="0 0 48 48"
        >
          <path d="M24 3c-3.7 0-5.8 1-7.2 1.6a4.5 4.5 0 0 0-2.4 2.8 10.8 10.8 0 0 0-.4 3.2V14h-3.4c-1 0-2 0-3.2.4a4.5 4.5 0 0 0-2.8 2.4C4 18.2 3 20.3 3 24s1 5.8 1.6 7.2a4.5 4.5 0 0 0 2.8 2.4c1.1.4 2.2.4 3.2.4H14v3.4c0 1 0 2 .4 3.2a4.5 4.5 0 0 0 2.4 2.8c1.4.6 3.5 1.6 7.2 1.6s5.8-1 7.2-1.6a4.5 4.5 0 0 0 2.4-2.8c.4-1.1.4-2.3.4-3.2V34h3.4c1 0 2 0 3.2-.4a4.5 4.5 0 0 0 2.8-2.4C44 29.8 45 27.7 45 24s-1-5.8-1.6-7.2a4.5 4.5 0 0 0-2.8-2.4 10.8 10.8 0 0 0-3.2-.4H34v-3.4c0-1 0-2-.4-3.2a4.5 4.5 0 0 0-2.4-2.8C29.8 4 27.7 3 24 3zm0 3c3.3 0 4.5.7 6 1.3.4.2.6.4.8 1l.2 2.3v4.7a1.5 1.5 0 0 0 0 .4V19c0 2-1.6 3.5-3.5 3.5h-7A6.5 6.5 0 0 0 14 29v2h-3.4a8.8 8.8 0 0 1-2.3-.2c-.6-.2-.8-.4-1-.8-.6-1.5-1.3-2.7-1.3-6s.7-4.5 1.3-6c.2-.4.4-.6 1-.8a8.8 8.8 0 0 1 2.3-.2h12.9a1.5 1.5 0 1 0 0-3H17v-3.4c0-.9 0-1.7.2-2.3.2-.6.4-.8.8-1 1.5-.6 2.7-1.3 6-1.3zm-3.5 3a1.5 1.5 0 0 0 0 3 1.5 1.5 0 0 0 0-3zM34 17h3.4a9 9 0 0 1 2.3.2c.6.2.8.4 1 .8.6 1.5 1.3 2.7 1.3 6s-.7 4.5-1.3 6c-.2.4-.4.6-1 .8a8.8 8.8 0 0 1-2.3.2H24.5a1.5 1.5 0 1 0 0 3H31v3.4a9 9 0 0 1-.2 2.3c-.2.6-.4.8-.8 1-1.5.6-2.7 1.3-6 1.3s-4.5-.7-6-1.3c-.4-.2-.6-.4-.8-1a8.8 8.8 0 0 1-.2-2.3V29c0-2 1.6-3.5 3.5-3.5h7c3.6 0 6.5-3 6.5-6.5v-2zm-6.5 19a1.5 1.5 0 0 0 0 3 1.5 1.5 0 0 0 0-3z" />
        </svg>
      ),
      speciality: "Python backend developer",
    },
    {
      name: "Дмитрий",
      img: 'd.png',
      github: 'https://github.com/JustKing/',
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="128"
          height="128"
          viewBox="0 0 32 32"
        >
          <path d="m3 6 13 22L29 6H19l-3 5.3L13 6H3zm3.5 2h3.8L16 18l5.7-10h3.8L16 24.1 6.5 8z" />
        </svg>
      ),
      speciality: "Vue frontend developer",
    },
    {
      name: "Евгений",
      img: 'e.png',
      github: 'https://github.com/EZavdovev/',
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="150"
          height="150"
          viewBox="0 0 50 50"
        >
          <path d="M40.5 3h-.3L23.8 7a1 1 0 0 0-.7.6L21.3 12H16a1 1 0 0 0-.7.3l-12 13a1 1 0 0 0 0 1.4l12.6 12a1 1 0 0 0 .7.3h5.7l1.8 4.4c.1.3.4.5.7.6l17.5 3a1 1 0 0 0 1.1-.8L47 30a1 1 0 0 0-.1-.8l-2.4-3.8 2.4-5a1 1 0 0 0 0-.7l-5.5-16a1 1 0 0 0-1-.7Zm-.7 2.2 5.1 14.7-1.4 3.1L40 11.7a1 1 0 0 0-1.9-.1l-7 14a1 1 0 0 0 0 1l8 12.1a1 1 0 0 0 1.9-.3l2.4-10.9L45 30l-3.2 15-16-2.8-1.1-2.8 11.6 2.2a1 1 0 0 0 1-1.6l-8.4-12.5a1 1 0 0 0-.8-.4H12a1 1 0 0 0-.7 1.7l9.1 8.3H17L5.4 26l11-12h3.3l-8.4 9.3A1 1 0 0 0 12 25h16a1 1 0 0 0 .9-.6l7-14A1 1 0 0 0 34.8 9l-11.2 2.6 1.1-2.7Zm-6.6 6.2L27.4 23H14.3l8.2-9.1Zm5.6 3.3L42 25l-2.4 10.7-6.5-9.8ZM14.6 29h12.9l6.7 10-10.7-2Z" />
        </svg>
      ),
      speciality: "Unity developer",
    },
    {
      name: "Михаил",
      img: 'm.png',
      github: 'https://github.com/MDobrilko/',
      logo: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox='0 -1 100 50"'>
          <path d="M7.6 10.1h14.2c4.2 0 7.2 1.3 9 3.6 2 2.4 2.5 5.6 1.9 9.7a18.6 18.6 0 0 1-5 10.4c-1.8 1.9-3.7 3-5.7 3.5s-4.1.8-6.3.8H9.4l-2 10H0l7.6-38m6.2 6-3.2 16H12c3.4 0 6.2-.3 8.5-1 2.2-.7 3.7-3.3 4.5-7.7.7-3.7 0-5.9-1.9-6.4a23.8 23.8 0 0 0-8.3-.8h-1M41 0h7.4l-2 10.1h6.5c3.6 0 6.3.8 8 2.2 1.9 1.5 2.4 4.1 1.7 8.1L59 38.1h-7.4L55 21.2c.3-1.8.2-3-.3-3.8-.6-.7-1.8-1-3.7-1l-5.9-.1L40.8 38h-7.3L41 0m29.4 10.1h14.2c4.2 0 7.2 1.3 9 3.6 2 2.4 2.6 5.6 2 9.7a18.6 18.6 0 0 1-5.1 10.4c-1.8 1.9-3.7 3-5.7 3.5s-4 .8-6.2.8h-6.4l-2 10h-7.4l7.6-38m6.2 6-3.2 16h1.4c3.4 0 6.2-.3 8.5-1s3.8-3.3 4.5-7.7c.7-3.7 0-5.9-1.9-6.4a23.8 23.8 0 0 0-8.2-.8h-1.1" />
        </svg>
      ),
      speciality: "Php, js, rust developer:)",
    },
  ];

  render() {
    return (
      <div className="abch">
        <header className="abch-header">Абчихба</header>
        <main>
          {this.participants.map((participant: IParticipant, index: number) => (
            <Participant key={index} participant={participant} />
          ))}
        </main>
      </div>
    );
  }
}
