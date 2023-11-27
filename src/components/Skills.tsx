import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/Tabs'

export function Skills () {
  return (
        <section className='w-full h-screen flex flex-col items-center justify-around'>
            <h1>Principais tecnologias</h1>

            <Tabs defaultValue="account" className="w-[400px]">
            <TabsList>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">Make changes to your account here.</TabsContent>
            <TabsContent value="password">Change your password here.</TabsContent>
            </Tabs>
        </section>
  )
}
