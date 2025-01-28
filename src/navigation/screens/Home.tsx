
import { useNavigation } from '@react-navigation/native';
import store from '../../context/store';
import { logout } from '../../context/slices/userSlice';
import { loadAuthState } from '../../utils/storage';





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
    <main>
    <header className="bg-black text-white fixed w-full z-10">
      <div className="container mx-auto flex items-center py-4 px-6">
        <h1 className="text-2xl font-bold">Juan Garcia</h1>
      </div>
    </header>
    <section id="about" className="min-h-screen flex items-center bg-white">
      <div className="container mx-auto px-6 space-y-6">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg leading-relaxed">
          {/* Replace with your own introduction */}
          Hello! I'm Juan Garcia, a passionate Computer Engineer student with with expertise in building mobile and web applications as welll as Hardware. I enjoy solving complex problems and continuously learning new technologies to enhance my skill set.
        </p>
        <h1 className="text-2xl font-bold mb-4" >Acount Data: Redux</h1>
        <code className=" rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm bg-black text-white flex-col flex-1 flex" data-language="tsx" data-theme="default">
          <span>UserID: {user?.id}</span>
          <span>Email: {user?.email}</span>
          <span>Password: {user?.password}</span>
        </code>
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-black text-white shadow hover:bg-primary/90 h-9 px-4 py-2"
          onClick={handleLogout}
        >Logout</button>
        <div className="text-balance text-xs max-w-sm text-muted-foreground space-y-1.5 ">
                <p>Logging out will destroy all data account since there is no backend service</p>
        </div>

      </div>
    </section>
    </main>
    
  );
}

