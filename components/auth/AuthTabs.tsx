import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const AuthTabs = () => {
  return (
    <Tabs defaultValue='login' className='w-[400px]'>
      <TabsList className='grid w-full grid-cols-2'>
        <TabsTrigger value='login'>Login</TabsTrigger>
        <TabsTrigger value='register'>Register</TabsTrigger>
      </TabsList>
      <TabsContent value='login'>LOGIN HERE</TabsContent>
      <TabsContent value='register'>REGISTER HERE</TabsContent>
    </Tabs>
  );
};

export default AuthTabs;
