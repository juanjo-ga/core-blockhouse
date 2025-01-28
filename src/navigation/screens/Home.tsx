
import { useNavigation } from '@react-navigation/native';
import store from '../../context/store';
import { logout } from '../../context/slices/userSlice';
import { loadAuthState } from '../../utils/storage';
import { View, Text, Pressable, SafeAreaView } from 'react-native';




export  function Home() {

  const navigation = useNavigation();
  
  const user = store.getState().auth.user;

  const handleLogout = async () => {
   const persistedAuth = await loadAuthState();
    if (persistedAuth && persistedAuth.user) {
      store.dispatch(logout());
      navigation.navigate('login');
    }
  };

  return (
    <SafeAreaView className="flex-1 justify-center space-y-6">
    <View className="px-6 space-y-6 gap-3">
      <Text className="text-4xl font-bold mb-4">About Me</Text>
      <Text className="text-lg leading-relaxed">
        Hello! I'm Juan Garcia, a passionate Computer Engineer student with expertise in building mobile and web applications as well as Hardware. I enjoy solving complex problems and continuously learning new technologies to enhance my skill set.
      </Text>
      <Text className="text-2xl font-bold mb-4">Account Data: Redux</Text>
      <View className="rounded bg-muted text-sm bg-black flex-col p-4">
        <Text className="text-white font-mono">UserID: {user?.id}</Text>
        <Text className="text-white font-mono">Email: {user?.email}</Text>
        <Text className="text-white font-mono">Password: {user?.password}</Text>
      </View>
      <Pressable
        className="items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors bg-black text-white hover:bg-primary/90 h-9 px-4 py-2"
        onPressIn={handleLogout}
      >
        <Text className="text-white font-medium text-sm">Logout</Text>
      </Pressable>
      <View className="text-balance text-xs max-w-sm text-muted-foreground space-y-1.5 text-center">
        <Text>
          Logging out will destroy all account data since there is no backend service.
        </Text>
      </View>
    </View>
    </SafeAreaView>

  );
}

