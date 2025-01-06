import EventForm from '@/components/form/event-form'
import React from 'react'

const NewEventPage = () => {
  return (
    <div className='w-full'>
        <div className='flex flex-col space-y-1'>
        <h1 className='text-xl font-bold leading-6 text-primary'>New Event Page</h1>
        <p className='text-secondary font-light leading-tight'>Just a few clicks away from posting your first event!</p>
        </div>
         <div className=' pt-12 lg:pt-24 w-full'>
        <EventForm />
        </div>
    </div> 
  )
}

export default NewEventPage