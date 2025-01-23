import React from 'react'
import { toast } from "sonner"

import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { useNavigate } from 'react-router-dom';
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
import apiConnector from '@/lib/api-connector'
 


 const SignupPage = () => {
  const form =useForm()
  const navigate = useNavigate();
  const onSubmit = async (data:any)=>{
   console.log(data)
  const response = await apiConnector("POST","auth/signup",data)
  console.log(response)
  if(response.success==true) {
    toast.success("User signed up successfully")
  navigate('/login');
}
else{
  toast.error(response.message)
}
 }
  return (
    <Card className="max-w-[500px] mx-auto">
      
  <CardHeader>
    <CardTitle>SignUp</CardTitle>
    <CardDescription>Enter your detail for signup</CardDescription>
  </CardHeader>
  <CardContent>
            <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 text-left">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name" {...field} />
              </FormControl>
              <FormDescription>
                
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
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

export default SignupPage
