
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import apiConnector from '@/lib/api-connector'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
 


 const LoginPage = () => {
  const form =useForm()

  const onSubmit = async(data:any)=>{
  const response = await apiConnector("POST","auth/login",data)

   console.log(response)
     
  }
  return (
    <Card className="max-w-[500px] mx-auto">
      
  <CardHeader>
    <CardTitle>Login</CardTitle>
    <CardDescription>Enter your detail for login</CardDescription>
  </CardHeader>
  <CardContent>
            <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 text-left">
      <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              <FormDescription>
                
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Enter your password" {...field} />
              </FormControl>
              <FormDescription>
                
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className='w-full'>Submit</Button>
      </form>
    </Form>
    </CardContent>
    </Card>
  )
}

export default LoginPage
