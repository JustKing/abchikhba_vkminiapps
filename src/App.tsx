import {
  useAdaptivity,
  AppRoot,
  SplitLayout,
  SplitCol,
  ViewWidth,
  View,
  Panel,
  PanelHeader,
  Group,
  Header,
  Footer,
  HorizontalCell,
  HorizontalScroll,
  Avatar,
} from "@vkontakte/vkui";
import Participant from "./components/participant/Participant";

export interface IParticipant {
  name: string;
  img: string;
  github: string;
  speciality: string;
}

export const App = () => {
  const participants: IParticipant[] = [
    {
      name: "Алексей",
      img: "participants/a.png",
      github: "https://github.com/borgishmorg/",
      speciality: "Python backend developer",
    },
    {
      name: "Дмитрий",
      img: "participants/d.png",
      github: "https://github.com/JustKing/",
      speciality: "Vue frontend developer",
    },
    {
      name: "Евгений",
      img: "participants/e.png",
      github: "https://github.com/EZavdovev/",
      speciality: "Unity developer",
    },
    {
      name: "Михаил",
      img: "participants/m.png",
      github: "https://github.com/MDobrilko/",
      speciality: "Php, js, rust developer:)",
    },
  ];
  const skills: string[] = [
    "skills/vue.png",
    "skills/php.png",
    "skills/python.png",
    "skills/unity.png",
    "skills/java.png",
    "skills/ts.png",
    "skills/js.png",
    "skills/c++.png",
  ];

  const { viewWidth } = useAdaptivity();
  return (
    <AppRoot mode="full">
      <SplitLayout header={<PanelHeader separator={false} />}>
        <SplitCol spaced={viewWidth && viewWidth > ViewWidth.MOBILE}>
          <View activePanel="main">
            <Panel id="main">
              <header>
                <PanelHeader>Абчихба</PanelHeader>
              </header>
              <main>
                <Group header={<Header mode="secondary">Команда</Header>}>
                  {participants.map(
                    (participant: IParticipant, index: number) => (
                      <Participant key={index} participant={participant} />
                    )
                  )}
                </Group>
                <Group
                  header={<Header mode="secondary">Скиллы команды</Header>}
                >
                  <HorizontalScroll
                    showArrows
                    getScrollToLeft={(i) => i - 120}
                    getScrollToRight={(i) => i + 120}
                  >
                    <div style={{ display: "flex" }}>
                      {skills.map((skill: string, index: number) => (
                        <HorizontalCell key={index} size="m">
                          <Avatar size={88} mode="image" src={skill} />
                        </HorizontalCell>
                      ))}
                    </div>
                  </HorizontalScroll>
                </Group>
              </main>
              <footer>
                <Footer>{participants.length} человека в команде</Footer>
              </footer>
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
};
