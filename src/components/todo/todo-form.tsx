
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
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
import { Textarea } from "@/components/ui/textarea"

 


 const TodoForm = () => {
  const form =useForm()
  const onSubmit = (data:any)=>{
   console.log(data)
     
  }
  return (
    <Card className="max-w-[500px] mx-auto">
      
  <CardHeader>
    <CardTitle>Add your todo</CardTitle>
    <CardDescription></CardDescription>
  </CardHeader>
  <CardContent>
            <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 text-left">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter your title" {...field} />
              </FormControl>
              <FormDescription>
                
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter your description" {...field} />
              </FormControl>
              <FormDescription>
                
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
         
   
        <Button type="submit" className='w-full'>Add</Button>
      </form>
    </Form>
    </CardContent>
    </Card>
  )
}

export default TodoForm
