import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
const Contact = () => {
  return (
    <div className="w-full bg-[#0e1117] h-full flex justify-center items-center">
      <div className="p-8 gap-4 ">
        <div className='w-[30rem] h-auto p-10  bg-gray-700 flex justify-center items-center gap-8 flex-col rounded-xl'>
          <p className='font-semibold text-xl tracking-wide'>Contact Us</p>
          <Input className="bg-[#262730] text-md outline-none" type="text" placeholder="Enter your name" />
          <Input className="bg-[#262730] text-md outline-none" type="email" placeholder="Enter your email" />
          <Textarea className="bg-[#262730] text-md outline-none" placeholder="Enter your massage" />
          <Button
            type="submit"
            className="w-full gradient font-bold text-lg shadow-gray-400 hover:opacity-75"
          >
            Submit
          </Button>
        </div>
      </div>

    </div>
  )
}

export default Contact