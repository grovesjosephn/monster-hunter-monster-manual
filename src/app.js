import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import {
  Pane,
  Heading,
  Card,
  Text,
  majorScale,
  Image,
  minorScale,
} from 'evergreen-ui';

import { getAllMonstersWithImages } from './api/getAllMonsters';

import 'normalize.css/normalize.css';
import { elementToIcon } from './utils/elementToColor';

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchMonsters() {
      const monsters = await getAllMonstersWithImages();
      setData(monsters);
    }

    fetchMonsters();
  }, []);

  return (
    <Pane
      is="main"
      display="flex"
      flexDirection="column"
      alignItems="center"
      background="tealTint"
    >
      <Heading is="h1" size={500} marginTop="default" elevation={2}>
        Monster Hunter Monster Guide
      </Heading>
      <Pane width="100%" marginTop={majorScale(2)}>
        {data.map((x, k) => (
          <Pane
            elevation={1}
            hoverElevation={2}
            key={k}
            display="flex"
            background="white"
            alignItems="center"
            padding={majorScale(2)}
            width="100%"
            marginBottom={minorScale(2)}
          >
            <Image src={x.image} height={majorScale(8)} width={majorScale(8)} />
            <Pane>
              <Text paddingX={majorScale(2)} size={500}>
                {x.name}
              </Text>
              <Pane paddingX={majorScale(2)}>
                {x.elements.map((x, k) => (
                  <Image
                    key={k}
                    src={elementToIcon(x)}
                    marginTop={minorScale(1)}
                    height={majorScale(3)}
                    width={majorScale(3)}
                  />
                ))}
              </Pane>
            </Pane>
          </Pane>
        ))}
      </Pane>
    </Pane>
  );
};

render(<App />, document.getElementById('root'));
