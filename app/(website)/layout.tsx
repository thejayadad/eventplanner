import Header from '@/components/header/header';
import React from 'react'

const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-8">
        <div className='mx-auto max-w-screen-xl px-4'>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-9">
            {children}
            </div>
            <div className="hidden lg:block lg:col-span-3">
                Sidebar
            </div>
          </div>
        </div>
     </main>
    </div>
  )
}

export default layout