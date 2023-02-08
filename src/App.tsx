import { useEffect } from 'react';

import { ThemeProvider, CssBaseline } from '@mui/material';

import { AppRouter } from 'routes/AppRouter/AppRouter';
import theme from 'theme/theme';
import { localStorageService } from 'utils/localStorageService';
import useAppDispatch from 'store/hooks/useAppDispatch';
import { signIn } from 'store/thunks/thunks';
import { speakers, topics as top } from './data';

console.log('hello');
console.log('hello2');

const sliceArray = (arr: any, chunkSize: any) => {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
};

top.data.allBsTopic.nodes.forEach((dataOfTopic) => {
  const filteredContent = speakers.data.allBsSpeaker.nodes.filter(
    ({ topics }) => topics.nodes.filter((el) => el.databaseId === dataOfTopic.databaseId)
      .length !== 0,
  );
  sliceArray(filteredContent, 15).forEach((dataArr, idx, arr) => {
    console.log('dataArr', dataArr);
    console.log('idx', idx);
    console.log('arr', arr);
    console.log('dataofTopic', dataOfTopic);
  });
});

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const isAuth = localStorageService.getToken();
    if (!isAuth) {
      dispatch(signIn());
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;
