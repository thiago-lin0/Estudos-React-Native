
import { StyleSheet,View } from 'react-native';

import Primeiro from './src/components/primeiro';
import MinMax from './src/components/minMax';

export default () => (  
    <View style={styles.container}>
        <MinMax/>
        {/* <Primeiro/> */}
    </View>
)
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
